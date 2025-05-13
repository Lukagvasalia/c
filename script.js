// Ждем загрузки DOM перед выполнением JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Функционал для мобильного меню
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    
    hamburgerMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Закрытие меню при клике вне его
    document.addEventListener('click', function(event) {
        const isClickInside = navMenu.contains(event.target) || hamburgerMenu.contains(event.target);
        
        if (!isClickInside && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
    
    // Функционал переключения языков
    const languageLinks = document.querySelectorAll('.language-content a');
    const languageBtn = document.querySelector('.language-btn');
    
    languageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            
            // Обновляем текст кнопки
            languageBtn.textContent = lang.toUpperCase();
            
            // Вызываем функцию смены языка
            changeLanguage(lang);
        });
    });
    
    // Функция для смены языка
    function changeLanguage(lang) {
        console.log('Выбран язык:', lang);
        
        // Словарь переводов
        const translations = {
            'ru': {
                'home': 'Главная',
                'service': 'Услуги',
                'about': 'О нас',
                'contact': 'Контакты',
                'hero_title': 'ЭКИПИРОВКА ДЛЯ НАСТОЯЩИХ ПРИКЛЮЧЕНИЙ',
                'hero_text': 'Профессиональное снаряжение для охоты, экстремального туризма и выживания в самых суровых условиях природы',
                'about_btn': 'О нас',
                'our_products': 'Наши товары',
                'tents': 'Палатки',
                'equipment': 'Экипировка',
                'gear': 'Снаряжение',
                'more_details': 'Подробнее',
                'buy': 'Купить',
                'about_us': 'О нас',
                'contact_us': 'Связаться с нами',
                'about_text_1': 'Мы специализируемся на поставке высококачественного снаряжения для экстремального туризма, охоты и выживания в дикой природе более 10 лет. Наша компания сотрудничает с ведущими производителями со всего мира, чтобы предложить вам только лучшее оборудование.',
                'about_text_2': 'Наша миссия — обеспечить безопасность и комфорт всех любителей активного отдыха и профессионалов, работающих в экстремальных условиях. Мы тщательно тестируем каждый товар перед тем, как включить его в наш ассортимент.',
                'about_text_3': 'Наши клиенты — это охотники, рыболовы, туристы, спасатели и все, кто ценит качество и надежность снаряжения, от которого может зависеть жизнь.'
            },
            'en': {
                'home': 'Home',
                'service': 'Service',
                'about': 'About',
                'contact': 'Contact',
                'hero_title': 'EQUIPMENT FOR REAL ADVENTURES',
                'hero_text': 'Professional gear for hunting, extreme tourism and survival in the most severe natural conditions',
                'about_btn': 'About me',
                'our_products': 'Our Products',
                'tents': 'Tents',
                'equipment': 'Equipment',
                'gear': 'Gear',
                'more_details': 'More Details',
                'buy': 'Buy Now',
                'about_us': 'About Us',
                'contact_us': 'Contact Us',
                'about_text_1': 'We specialize in supplying high-quality equipment for extreme tourism, hunting, and wilderness survival for over 10 years. Our company collaborates with leading manufacturers worldwide to offer you only the best gear.',
                'about_text_2': 'Our mission is to ensure the safety and comfort of all outdoor enthusiasts and professionals working in extreme conditions. We thoroughly test each product before including it in our range.',
                'about_text_3': 'Our customers are hunters, fishermen, tourists, rescuers, and everyone who values the quality and reliability of equipment on which their lives may depend.'
            },
            'ka': {
                'home': 'მთავარი',
                'service': 'სერვისი',
                'about': 'ჩვენს შესახებ',
                'contact': 'კონტაქტი',
                'hero_title': 'აღჭურვილობა ნამდვილი თავგადასავლებისთვის',
                'hero_text': 'პროფესიონალური აღჭურვილობა ნადირობისთვის, ექსტრემალური ტურიზმისთვის და გადარჩენისთვის ყველაზე მკაცრ ბუნებრივ პირობებში',
                'about_btn': 'ჩემ შესახებ',
                'our_products': 'ჩვენი პროდუქტები',
                'tents': 'კარვები',
                'equipment': 'აღჭურვილობა',
                'gear': 'მოწყობილობები',
                'more_details': 'მეტი დეტალები',
                'buy': 'ყიდვა',
                'about_us': 'ჩვენს შესახებ',
                'contact_us': 'დაგვიკავშირდით',
                'about_text_1': 'ჩვენ ვსპეციალიზდებით მაღალი ხარისხის აღჭურვილობის მიწოდებაში ექსტრემალური ტურიზმისთვის, ნადირობისთვის და ველურ ბუნებაში გადარჩენისთვის 10 წელზე მეტი ხნის განმავლობაში. ჩვენი კომპანია თანამშრომლობს წამყვან მწარმოებლებთან მთელი მსოფლიოდან, რათა შემოგთავაზოთ მხოლოდ საუკეთესო აღჭურვილობა.',
                'about_text_2': 'ჩვენი მისიაა უზრუნველვყოთ ყველა აქტიური დასვენების მოყვარულისა და ექსტრემალურ პირობებში მომუშავე პროფესიონალების უსაფრთხოება და კომფორტი. ჩვენ საფუძვლიანად ვამოწმებთ თითოეულ პროდუქტს, სანამ მას ჩვენს ასორტიმენტში შევიტანთ.',
                'about_text_3': 'ჩვენი კლიენტები არიან მონადირეები, მეთევზეები, ტურისტები, მაშველები და ყველა, ვინც აფასებს აღჭურვილობის ხარისხსა და საიმედოობას, რომელზეც შეიძლება მათი სიცოცხლე იყოს დამოკიდებული.'
            }
        };
        
        // Если у нас есть переводы для выбранного языка
        if (translations[lang]) {
            // Обновляем навигационные ссылки
            document.querySelectorAll('.nav-links a').forEach((link, index) => {
                const keys = ['home', 'service', 'about', 'contact'];
                if (keys[index]) {
                    link.textContent = translations[lang][keys[index]];
                }
            });
            
            // Обновляем контент героической секции
            const heroTitle = document.querySelector('.hero-title');
            const heroText = document.querySelector('.hero-text');
            const heroButton = document.querySelector('.hero-button');
            
            if (heroTitle) heroTitle.textContent = translations[lang]['hero_title'];
            if (heroText) heroText.textContent = translations[lang]['hero_text'];
            if (heroButton) heroButton.textContent = translations[lang]['about_btn'];
            
            // Обновляем заголовки секций
            const sectionTitles = document.querySelectorAll('.section-title');
            if (sectionTitles[0]) sectionTitles[0].textContent = translations[lang]['our_products'];
            if (sectionTitles[1]) sectionTitles[1].textContent = translations[lang]['about_us'];
            if (sectionTitles[2]) sectionTitles[2].textContent = translations[lang]['contact_us'];
            
            // Обновляем товары
            const productTitles = document.querySelectorAll('.product-title');
            const keys = ['tents', 'equipment', 'gear'];
            productTitles.forEach((title, index) => {
                if (keys[index]) {
                    title.textContent = translations[lang][keys[index]];
                }
            });
            
            // Обновляем кнопки товаров
            const detailsBtns = document.querySelectorAll('.product-details-btn');
            detailsBtns.forEach(btn => {
                btn.textContent = translations[lang]['more_details'];
            });
            
            // Обновляем кнопки покупки
            const buyBtns = document.querySelectorAll('.buy-button');
            buyBtns.forEach(btn => {
                btn.textContent = translations[lang]['buy'];
            });
            
            // Обновляем текст в секции "О нас"
            const aboutParagraphs = document.querySelectorAll('.about-text p');
            if (aboutParagraphs.length >= 3) {
                aboutParagraphs[0].textContent = translations[lang]['about_text_1'];
                aboutParagraphs[1].textContent = translations[lang]['about_text_2'];
                aboutParagraphs[2].textContent = translations[lang]['about_text_3'];
            }
        }
        
        // Сохраняем выбранный язык в localStorage
        localStorage.setItem('selectedLanguage', lang);
    }
    
    // Проверяем, был ли ранее выбран язык
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && ['ru', 'en', 'ka'].includes(savedLanguage)) {
        languageBtn.textContent = savedLanguage.toUpperCase();
        // Применяем сохраненный язык
        changeLanguage(savedLanguage);
    }
    
    // Прокрутка к секциям при клике на ссылки навигации
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').replace('#', '');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Компенсация высоты шапки
                    behavior: 'smooth'
                });
            }
            
            // Закрываем мобильное меню после клика
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Функционал для модальных окон товаров
    const modalButtons = document.querySelectorAll('.product-details-btn');
    const modals = document.querySelectorAll('.product-modal');
    const overlay = document.querySelector('.overlay');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    // Открытие модального окна при клике на кнопку "Подробнее"
    modalButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            modals[index].classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы
        });
    });
    
    // Закрытие модального окна при клике на крестик
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });
    
    // Закрытие модального окна при клике на оверлей
    overlay.addEventListener('click', closeModal);
    
    // Функция закрытия модального окна
    function closeModal() {
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Разрешаем прокрутку страницы
    }
    
    // Реализация кнопки "Купить"
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Товар добавлен в корзину!');
            closeModal();
        });
    });
    
    // Анимация появления элементов при прокрутке
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target); // Прекращаем наблюдение после анимации
            }
        });
    }, observerOptions);
    
    // Добавляем все элементы с атрибутом data-aos в наблюдение
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});