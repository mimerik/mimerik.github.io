const i18n = {
    en: {
        title:       'main projects',
        subtitle:    'my osu and minecraft projects',
        osuTitle:    'osu! skins',
        osuSubtitle: 'custom self-maded skins collection',
        osuDesc:     'custom self-maded skins collection',
        mcTitle:     'minecraft server',
        mcDesc:      'my own fully vanilla minecraft server',
        flag:        'https://flagcdn.com/w40/gb.png',
        download:    'download',
        skin1Title:  'silent hill small 2',
        skin1Desc:   'smaller circlesize for easier reading',
        skin2Title:  '2',
        skin2Desc:   '2d',
        skin3Title:  '3',
        skin3Desc:   '3d',
        skin4Title:  '4',
        skin4Desc:   '4d',
        skin5Title:  '5',
        skin5Desc:   '5d',
        skin6Title:  '6',
        skin6Desc:   '6d'
    },
    ru: {
        title:       'мои проекты',
        subtitle:    'мои скины и майнкрафт сервер',
        osuTitle:    'osu скины',
        osuSubtitle: 'коллекция моих кастомных скинов',
        osuDesc:     'кастомные скины для osu — минималистичные и лёгкие',
        mcTitle:     'майнкрафт сервер',
        mcDesc:      'мой собственный полностью ванильный майнкрафт сервер',
        flag:        'https://flagcdn.com/w40/ru.png',
        download:    'скачать',
        skin1Title:  'silent hill small 2',
        skin1Desc:   'уменьшенные круги для легкого чтения',
        skin2Title:  '2',
        skin2Desc:   '2д',
        skin3Title:  '3',
        skin3Desc:   '3д',
        skin4Title:  '4',
        skin4Desc:   '4д',
        skin5Title:  '5',
        skin5Desc:   '5д',
        skin6Title:  '6',
        skin6Desc:   '6д'
    }
};

const skinData = {
    midnight: {
        title: 'silent hill small 2',
        version: 'v1.0',
        desc: { en: 'smaller circlesize for easier reading', ru: 'уменьшенные круги для легкого чтения' },
        images: [
            'https://github.com/mimerik/mimerik.github.io/blob/main/osu/skins/silent%20hill%20small%202/screenshots/s1.png?raw=true',
            'https://github.com/mimerik/mimerik.github.io/blob/main/osu/skins/silent%20hill%20small%202/screenshots/s2.png?raw=true',
            'https://github.com/mimerik/mimerik.github.io/blob/main/osu/skins/silent%20hill%20small%202/screenshots/s3.png?raw=true'
        ],
        download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/silent%20hill%20small%202/-%20silent%20hill%20small%202.osk'
    },
    ocean: {
        title: '2',
        version: 'v1.0',
        desc: { en: '2d', ru: '2д' },
        images: [
            'https://placehold.co/800x450/1a2a3a/ffffff?text=Ocean+1',
            'https://placehold.co/800x450/2a3a4a/ffffff?text=Ocean+2',
            'https://placehold.co/800x450/0a1a2a/ffffff?text=Ocean+3'
        ],
        download: '#'
    },
    sunset: {
        title: '3',
        version: 'v1.0',
        desc: { en: '3d', ru: '3д' },
        images: [
            'https://placehold.co/800x450/3a2a1a/ffffff?text=3+1',
            'https://placehold.co/800x450/4a3a2a/ffffff?text=3+2',
            'https://placehold.co/800x450/2a1a0a/ffffff?text=3+3'
        ],
        download: '#'
    },
    forest: {
        title: '4',
        version: 'v1.0',
        desc: { en: '4d', ru: '4д' },
        images: [
            'https://placehold.co/800x450/1a3a2a/ffffff?text=4+1',
            'https://placehold.co/800x450/2a4a3a/ffffff?text=4+2',
            'https://placehold.co/800x450/0a2a1a/ffffff?text=4+3'
        ],
        download: '#'
    },
    rose: {
        title: '5',
        version: 'v1.0',
        desc: { en: '5d', ru: '5д' },
        images: [
            'https://placehold.co/800x450/3a1a2a/ffffff?text=5+1',
            'https://placehold.co/800x450/4a2a3a/ffffff?text=5+2',
            'https://placehold.co/800x450/2a0a1a/ffffff?text=5+3'
        ],
        download: '#'
    },
    mono: {
        title: '6',
        version: 'v1.0',
        desc: { en: '6d', ru: '6д' },
        images: [
            'https://placehold.co/800x450/2a2a3a/ffffff?text=6+1',
            'https://placehold.co/800x450/3a3a4a/ffffff?text=6+2',
            'https://placehold.co/800x450/1a1a2a/ffffff?text=6+3'
        ],
        download: '#'
    }
};

// ===== Language detection =====
function detectLanguage() {
    const saved = localStorage.getItem('mimerik-lang');
    if (saved) return saved;

    const navLang = navigator.language || navigator.userLanguage || '';
    if (navLang.toLowerCase().startsWith('ru')) return 'ru';
    if (navLang.toLowerCase().startsWith('uk') || navLang.toLowerCase().startsWith('be')) return 'ru';

    try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const ruZones = [
            'Europe/Moscow','Europe/Samara','Europe/Volgograd','Europe/Kirov','Europe/Astrakhan',
            'Europe/Saratov','Europe/Ulyanovsk','Europe/Minsk','Europe/Kiev','Europe/Simferopol',
            'Asia/Yekaterinburg','Asia/Omsk','Asia/Novosibirsk','Asia/Krasnoyarsk','Asia/Irkutsk',
            'Asia/Yakutsk','Asia/Vladivostok','Asia/Magadan','Asia/Kamchatka','Asia/Sakhalin',
            'Asia/Tomsk','Asia/Barnaul','Asia/Chita','Asia/Anadyr','Asia/Ust-Nera'
        ];
        if (ruZones.includes(tz)) return 'ru';
    } catch(e) {}

    return 'en';
}

// ===== Theme =====
function getTheme() {
    const saved = localStorage.getItem('mimerik-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function setTheme(t) {
    const html = document.documentElement;
    if (t === 'light') {
        html.setAttribute('data-theme', 'light');
    } else {
        html.removeAttribute('data-theme');
    }
    localStorage.setItem('mimerik-theme', t);
}

// ===== Language =====
function getLang() {
    const saved = localStorage.getItem('mimerik-lang');
    if (saved) return saved;
    // default english
    return 'en';
}

function setLang(l) {
    const t = i18n[l];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    const flagImg = document.getElementById('flagImg');
    if (flagImg && t.flag) flagImg.src = t.flag;

    document.documentElement.lang = l === 'ru' ? 'ru' : 'en';
    localStorage.setItem('mimerik-lang', l);

    updateModalLang();
}

// ===== Modal =====
let currentSkin = null;
let currentThumb = 0;

function openModal(skinKey) {
    const skin = skinData[skinKey];
    if (!skin) return;

    currentSkin = skinKey;
    currentThumb = 0;

    const modal = document.getElementById('skinModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalVersion = document.getElementById('modalVersion');
    const modalDesc = document.getElementById('modalDesc');
    const modalDownload = document.getElementById('modalDownload');
    const modalMainImg = document.getElementById('modalMainImg');
    const modalThumbs = document.querySelectorAll('.modal-thumb');

    if (!modal || !modalTitle || !modalVersion || !modalDesc || !modalDownload || !modalMainImg) return;

    const lang = getLang();
    modalTitle.textContent = skin.title;
    modalVersion.textContent = skin.version;
    modalDesc.textContent = skin.desc[lang] || skin.desc.en;
    modalDownload.href = skin.download;

    if (skin.images && skin.images.length > 0) {
        modalMainImg.src = skin.images[0];
        modalMainImg.alt = skin.title + ' screenshot 1';
    }

    modalThumbs.forEach((thumb, i) => {
        if (skin.images && skin.images[i]) {
            const img = thumb.querySelector('.modal-thumb-img');
            if (img) {
                img.src = skin.images[i].replace('800x450', '120x80');
                img.alt = 'Thumbnail ' + (i + 1);
            }
            thumb.style.display = '';
        } else {
            thumb.style.display = 'none';
        }
        thumb.classList.toggle('active', i === 0);
    });

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('skinModal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentSkin = null;
}

function updateModalLang() {
    if (!currentSkin) return;
    const skin = skinData[currentSkin];
    const modalDesc = document.getElementById('modalDesc');
    if (!skin || !modalDesc) return;
    const lang = getLang();
    modalDesc.textContent = skin.desc[lang] || skin.desc.en;
}

function setMainShot(index) {
    if (!currentSkin) return;
    const skin = skinData[currentSkin];
    const modalMainImg = document.getElementById('modalMainImg');
    const modalThumbs = document.querySelectorAll('.modal-thumb');
    if (!skin || !modalMainImg || !skin.images) return;

    if (skin.images[index]) {
        const currentSrc = modalMainImg.src;
        const newSrc = skin.images[index];
        if (currentSrc !== newSrc) {
            const direction = index > currentThumb ? 'slide-left' : 'slide-right';
            modalMainImg.classList.add(direction);
            setTimeout(() => {
                modalMainImg.src = newSrc;
                modalMainImg.alt = skin.title + ' screenshot ' + (index + 1);
                modalMainImg.classList.remove(direction);
            }, 200);
        }
        currentThumb = index;
        modalThumbs.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    }
}

function nextImage() {
    if (!currentSkin) return;
    const skin = skinData[currentSkin];
    if (!skin || !skin.images) return;
    const next = (currentThumb + 1) % skin.images.length;
    setMainShot(next);
}

function prevImage() {
    if (!currentSkin) return;
    const skin = skinData[currentSkin];
    if (!skin || !skin.images) return;
    const prev = (currentThumb - 1 + skin.images.length) % skin.images.length;
    setMainShot(prev);
}

// ===== Swipe support =====
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) nextImage();
        else prevImage();
    }
}

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', function() {
    const html = document.documentElement;
    const themeBtn = document.getElementById('themeBtn');
    const langBtn = document.getElementById('langBtn');

    // Theme
    setTheme(getTheme());

    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            setTheme(html.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
        });
    }

    // Language - default en
    setLang('en');

    if (langBtn) {
        langBtn.addEventListener('click', function() {
            setLang(getLang() === 'en' ? 'ru' : 'en');
        });
    }

    // Skin cards
    const skinsGrid = document.querySelector('.skins-grid');
    if (skinsGrid) {
        skinsGrid.addEventListener('click', function(e) {
            const card = e.target.closest('.skin-card');
            if (!card) return;
            e.preventDefault();
            const skinKey = card.getAttribute('data-skin');
            if (skinKey) openModal(skinKey);
        });

        skinsGrid.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                const card = e.target.closest('.skin-card');
                if (!card) return;
                e.preventDefault();
                const skinKey = card.getAttribute('data-skin');
                if (skinKey) openModal(skinKey);
            }
        });
    }

    // Modal controls
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalClose = document.getElementById('modalClose');
    const modalNavPrev = document.getElementById('modalNavPrev');
    const modalNavNext = document.getElementById('modalNavNext');
    const modalMainWrapper = document.querySelector('.modal-main-wrapper');

    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    if (modalClose) modalClose.addEventListener('click', closeModal);

    if (modalNavPrev) {
        modalNavPrev.addEventListener('click', function(e) {
            e.stopPropagation();
            prevImage();
        });
    }

    if (modalNavNext) {
        modalNavNext.addEventListener('click', function(e) {
            e.stopPropagation();
            nextImage();
        });
    }

    // Swipe on main wrapper
    if (modalMainWrapper) {
        modalMainWrapper.addEventListener('touchstart', handleTouchStart, { passive: true });
        modalMainWrapper.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('skinModal');
        if (!modal || !modal.classList.contains('open')) return;

        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevImage();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextImage();
        }
    });

    // Thumbs
    const modalThumbs = document.querySelector('.modal-thumbs');
    if (modalThumbs) {
        modalThumbs.addEventListener('click', function(e) {
            const thumb = e.target.closest('.modal-thumb');
            if (!thumb) return;
            const index = parseInt(thumb.getAttribute('data-index'));
            if (!isNaN(index)) setMainShot(index);
        });
    }

    // Navbar scroll optimization
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const sentinel = document.createElement('div');
        sentinel.style.cssText = 'position:absolute;top:0;height:1px;width:100%;pointer-events:none;';
        document.body.prepend(sentinel);

        const observer = new IntersectionObserver(
            ([entry]) => {
                navbar.style.backdropFilter = !entry.isIntersecting
                    ? 'blur(44px) saturate(160%)'
                    : 'blur(28px) saturate(160%)';
            },
            { threshold: [0, 1], rootMargin: '-10px 0px 0px 0px' }
        );
        observer.observe(sentinel);
    }
});