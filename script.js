// DOM要素の取得
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-list a');
const navClose = document.querySelector('.nav-close');
const contactForm = document.getElementById('contactForm');

// モバイルメニューの切り替え
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});

// ナビゲーションリンクをクリックした時にメニューを閉じる
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// 閉じるボタンでメニューを閉じる
if (navClose) {
    navClose.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// メニュー外をクリックした時にメニューを閉じる
nav.addEventListener('click', (e) => {
    if (e.target === nav) {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// スクロール時のヘッダーの背景変更
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// スムーススクロール
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// お問い合わせフォームの処理
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Formspree will handle the submission automatically
        // We just need to show a loading state
        
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = '送信中...';
        submitButton.disabled = true;
        
        // Formspree will handle the form submission
        // The form will be submitted to your email automatically
    });
}

// スクロールアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// アニメーション対象要素の監視
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .service-card, .info-item, .office-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// 画像の遅延読み込み
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.95)';
        img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        imageObserver.observe(img);
    });
});

// ページ読み込み時のアニメーション
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// 初期設定
document.addEventListener('DOMContentLoaded', () => {
    // ページ読み込み時のフェードイン
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    // 現在のページ位置に基づいてナビゲーションをハイライト
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-list a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});

// エラーハンドリング
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// パフォーマンス最適化
document.addEventListener('DOMContentLoaded', () => {
    // 不要なリフローを防ぐ
    const style = document.createElement('style');
    style.textContent = `
        .header {
            will-change: transform;
        }
        .project-card, .service-card {
            will-change: transform;
        }
    `;
    document.head.appendChild(style);
}); 