document.addEventListener('DOMContentLoaded', function() {
    // تأثيرات التمرير للصور والنصوص
    const featureImages = document.querySelectorAll('.feature-tab-image');
    const featureTexts = document.querySelectorAll('.feature-tab-text');

    function animateFeatures() {
        featureImages.forEach((image, index) => {
            setTimeout(() => {
                image.style.opacity = '1';
                image.style.transform = 'translateX(0)';
            }, index * 200);
        });

        featureTexts.forEach((text, index) => {
            setTimeout(() => {
                text.style.opacity = '1';
                text.style.transform = 'translateX(0)';
            }, index * 200 + 100);
        });
    }

    // تشغيل التأثيرات عند تحميل الصفحة
    animateFeatures();

    // تبديل علامات التبويب
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
            
            // إعادة تشغيل تأثيرات الرسوم المتحركة
            animateFeatures();
        });
    });
});