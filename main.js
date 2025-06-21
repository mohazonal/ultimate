document.addEventListener('DOMContentLoaded', function() {
    // القائمة المتنقلة للهواتف
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('fa-times');
        this.classList.toggle('fa-bars');
    });

    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('fa-times');
            mobileMenuBtn.classList.add('fa-bars');
        });
    });

    // تغيير لون شريط التنقل عند التمرير
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'var(--white)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // تبويبات الباقات
    const tabBtns = document.querySelectorAll('.tab-btn');
    const monthlyPlans = document.querySelectorAll('.monthly-plan');
    const yearlyPlans = document.querySelectorAll('.yearly-plan');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // إزالة النشاط من جميع الأزرار
            tabBtns.forEach(b => b.classList.remove('active'));
            // إضافة النشاط للزر المحدد
            this.classList.add('active');

            // تبديل الخطط الشهرية والسنوية
            if (this.dataset.tab === 'monthly') {
                monthlyPlans.forEach(plan => plan.style.display = 'block');
                yearlyPlans.forEach(plan => plan.style.display = 'none');
            } else {
                monthlyPlans.forEach(plan => plan.style.display = 'none');
                yearlyPlans.forEach(plan => plan.style.display = 'block');
            }
        });
    });

    // الأكورديون للأسئلة الشائعة
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');

        question.addEventListener('click', function() {
            // إغلاق جميع الإجابات الأخرى
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    otherItem.querySelector('.faq-question i').classList.remove('fa-chevron-up');
                    otherItem.querySelector('.faq-question i').classList.add('fa-chevron-down');
                }
            });

            // تبديل الإجابة الحالية
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });

    // شريط التمرير اللطيف للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // إغلاق القائمة المتنقلة إذا كانت مفتوحة
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.classList.remove('fa-times');
                    mobileMenuBtn.classList.add('fa-bars');
                }
            }
        });
    });

    // إضافة تأثيرات الظهور عند التمرير
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    function checkScroll() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    }

    // التحقق عند التحميل وعند التمرير
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);

    // نموذج الاتصال
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // هنا يمكنك إضافة كود إرسال النموذج إلى الخادم
            console.log('تم إرسال النموذج:', { name, email, message });
            
            // عرض رسالة نجاح
            alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.');
            this.reset();
        });
    }
});