document.addEventListener('DOMContentLoaded', function() {
    // تبديل بين الخطط الشهرية والسنوية
    const tabBtns = document.querySelectorAll('.feature-tab-btn');
    const tabContents = document.querySelectorAll('.feature-tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // إزالة النشاط من جميع الأزرار
            tabBtns.forEach(b => b.classList.remove('active'));
            // إضافة النشاط للزر المحدد
            this.classList.add('active');

            // إخفاء جميع محتويات علامات التبويب
            tabContents.forEach(content => content.classList.remove('active'));
            
            // عرض محتوى علامة التبويب المحددة
            const tabId = this.dataset.tab;
            document.getElementById(tabId).classList.add('active');
        });
    });

    // حساب التوفير عند اختيار الخطة السنوية
    const yearlyBtn = document.querySelector('[data-tab="yearly"]');
    if (yearlyBtn) {
        yearlyBtn.addEventListener('click', function() {
            const prices = document.querySelectorAll('.price');
            prices.forEach(price => {
                const monthlyPrice = parseFloat(price.textContent.replace('$', ''));
                const yearlyPrice = monthlyPrice * 12 * 0.8; // خصم 20%
                price.textContent = `$${yearlyPrice.toFixed(0)} `;
                price.querySelector('span').textContent = '/سنوياً';
            });
        });
    }

    // استعادة الأسعار الشهرية عند العودة
    const monthlyBtn = document.querySelector('[data-tab="monthly"]');
    if (monthlyBtn) {
        monthlyBtn.addEventListener('click', function() {
            const basicPrice = document.querySelector('.pricing-card:nth-child(1) .price');
            const proPrice = document.querySelector('.pricing-card:nth-child(2) .price');
            const premiumPrice = document.querySelector('.pricing-card:nth-child(3) .price');

            basicPrice.textContent = '$50 ';
            basicPrice.querySelector('span').textContent = '/شهر';

            proPrice.textContent = '$120 ';
            proPrice.querySelector('span').textContent = '/شهر';

            premiumPrice.textContent = '$250 ';
            premiumPrice.querySelector('span').textContent = '/شهر';
        });
    }
});