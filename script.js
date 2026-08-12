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
        skin2Title:  'Coming soon...',
        skin2Desc:   '...',
        mcPageTitle:    'minecraft server',
        mcPageSubtitle: 'access, mod pack & updates',
        mcSection1Title:'ip & access',
        mcSection1Desc: 'my private fully-vanilla server. buy access to get your invite, then copy the ip below and join in',
        mcBuy:          'buy access',
        mcCopy:         'copy',
        mcCopied:       'copied!',
        mcSection2Title:'modpack',
        mcSection2Desc: 'the modpack for optimisation and server-compability. download the pack and drop it in your mods folder or import with modrinth app',
        support:        'support',
    },
    ru: {
        title:       'мои проекты',
        subtitle:    'мои скины и minecraft сервер',
        osuTitle:    'osu! скины',
        osuSubtitle: 'коллекция моих кастомных скинов',
        osuDesc:     'кастомные скины для osu — минималистичные и лёгкие',
        mcTitle:     'minecraft сервер',
        mcDesc:      'мой собственный полностью ванильный minecraft сервер',
        flag:        'https://flagcdn.com/w40/ru.png',
        download:    'скачать',
        skin1Title:  'silent hill small 2',
        skin1Desc:   'уменьшенные круги для лёгкого чтения',
        skin2Title:  'Скоро',
        skin2Desc:   '...',
        mcPageTitle:    'minecraft сервер',
        mcPageSubtitle: 'доступ, сборка и обновления',
        mcSection1Title:'ip и доступ',
        mcSection1Desc: 'мой приватный и полностью ванильный сервер. купи доступ, чтобы получить инвайт и присоединяйся',
        mcBuy:          'купить доступ',
        mcCopy:         'скопировать',
        mcCopied:       'скопировано!',
        mcSection2Title:'сборка модов',
        mcSection2Desc: 'модпак для оптимизации и совместимости с сервером. скачай пак и помести его в папку mods или импортируй с помощью лаунчера modprinth',
        support:        'поддержать',
    }
};

const skinData = {
    silenthillsmall2: {
        title: 'silent hill small 2',
        version: 'v1.0',
        desc: { en: 'smaller circlesize for easier reading', ru: 'уменьшенные круги для лёгкого чтения' },
        images: [
            'https://github.com/mimerik/mimerik.github.io/blob/main/osu/skins/silent%20hill%20small%202/screenshots/s1.png?raw=true',
            'https://github.com/mimerik/mimerik.github.io/blob/main/osu/skins/silent%20hill%20small%202/screenshots/s2.png?raw=true',
            'https://github.com/mimerik/mimerik.github.io/blob/main/osu/skins/silent%20hill%20small%202/screenshots/s3.png?raw=true'
        ],
        download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/silent%20hill%20small%202/-%20silent%20hill%20small%202.osk'
    },
    incoming: {
        title: 'Coming soon...',
        version: 'v0.0',
        desc: { en: '...', ru: '...' },
        images: [
            'https://placehold.co/800x500/000000/6c6c6c?text=Coming+soon...',
            'https://placehold.co/800x500/000000/6c6c6c?text=Coming+soon...',
            'https://placehold.co/800x500/000000/6c6c6c?text=Coming+soon...'
        ],
        download: '#'
    }
};

// ===== Language =====
function getLang() {
    return localStorage.getItem('mimerik-lang') || 'en';
}

function setLang(l) {
    const t = i18n[l];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (!t[key]) return;
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = t[key];
        } else {
            // Replace only text nodes, preserve SVGs and nested elements
            for (const node of el.childNodes) {
                if (node.nodeType === Node.TEXT_NODE) {
                    node.textContent = t[key];
                    break;
                }
            }
        }
    });

    const flagImg = document.getElementById('flagImg');
    if (flagImg && t.flag) flagImg.src = t.flag;

    document.documentElement.lang = l === 'ru' ? 'ru' : 'en';
    localStorage.setItem('mimerik-lang', l);

    updateModalLang();
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

// ===== Modal =====
let currentSkin = null;
let currentThumb = 0;        // index inside currentImages being displayed
let currentTrackIndex = 1;   // index inside .modal-track (0 = clone of last, N+1 = clone of first)
let currentImages = [];      // skin.images of the open skin
let isTransitioning = false; // lock while the track is animating

function buildTrack(skin, track) {
    if (!track || !currentImages.length) return;

    track.innerHTML = '';

    // Clone of the last screenshot at the start (smooth backwards wrap-around)
    const lastClone = document.createElement('img');
    lastClone.className = 'modal-main-img';
    lastClone.alt = '';
    lastClone.draggable = false;
    lastClone.setAttribute('aria-hidden', 'true');
    lastClone.src = currentImages[currentImages.length - 1];
    track.appendChild(lastClone);

    currentImages.forEach((src, i) => {
        const img = document.createElement('img');
        img.className = 'modal-main-img';
        img.alt = skin.title + ' screenshot ' + (i + 1);
        img.draggable = false;
        img.src = src;
        track.appendChild(img);
    });

    // Clone of the first screenshot at the end (smooth forwards wrap-around)
    const firstClone = document.createElement('img');
    firstClone.className = 'modal-main-img';
    firstClone.alt = '';
    firstClone.draggable = false;
    firstClone.setAttribute('aria-hidden', 'true');
    firstClone.src = currentImages[0];
    track.appendChild(firstClone);

    // Position track on the first screenshot without animation
    currentTrackIndex = 1;
    track.style.transition = 'none';
    track.style.transform = 'translateX(-100%)';
    void track.offsetWidth;
    track.style.transition = '';
}

function snapTrack(track, trackIndex) {
    track.style.transition = 'none';
    track.style.transform = 'translateX(-' + (trackIndex * 100) + '%)';
    currentTrackIndex = trackIndex;
    void track.offsetWidth;
    track.style.transition = '';
}

function openModal(skinKey) {
    const skin = skinData[skinKey];
    if (!skin) return;

    currentSkin = skinKey;
    currentThumb = 0;
    currentTrackIndex = 1;
    isTransitioning = false;
    currentImages = skin.images || [];

    const modal = document.getElementById('skinModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalVersion = document.getElementById('modalVersion');
    const modalDesc = document.getElementById('modalDesc');
    const modalDownload = document.getElementById('modalDownload');
    const modalTrack = document.getElementById('modalTrack');
    const modalThumbs = document.querySelectorAll('.modal-thumb');

    if (!modal || !modalTitle || !modalVersion || !modalDesc || !modalDownload || !modalTrack) return;

    const lang = getLang();
    modalTitle.textContent = skin.title;
    modalVersion.textContent = skin.version;
    modalDesc.textContent = skin.desc[lang] || skin.desc.en;
    modalDownload.href = skin.download;

    buildTrack(skin, modalTrack);

    modalThumbs.forEach((thumb, i) => {
        if (currentImages[i]) {
            const img = thumb.querySelector('.modal-thumb-img');
            if (img) {
                img.src = currentImages[i].replace('800x450', '120x80');
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

function updateThumbs(index) {
    document.querySelectorAll('.modal-thumb').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function setMainShot(index) {
    if (!currentSkin || isTransitioning) return;
    const count = currentImages.length;
    if (!count) return;
    const track = document.getElementById('modalTrack');
    if (!track) return;

    const next = ((index % count) + count) % count;
    if (next === currentThumb) return;

    let targetTrack;
    if (currentThumb === count - 1 && next === 0) {
        targetTrack = count + 1;      // Forwards wrap-around
    } else if (currentThumb === 0 && next === count - 1) {
        targetTrack = 0;              // Backwards wrap-around
    } else {
        targetTrack = next + 1;
    }

    currentThumb = next;
    updateThumbs(next);

    isTransitioning = true;
    currentTrackIndex = targetTrack;
    track.style.transform = 'translateX(-' + (targetTrack * 100) + '%)';
}

function nextImage() {
    if (!currentSkin || !currentImages.length) return;
    setMainShot((currentThumb + 1) % currentImages.length);
}

function prevImage() {
    if (!currentSkin || !currentImages.length) return;
    setMainShot((currentThumb - 1 + currentImages.length) % currentImages.length);
}

// After the track finishes sliding, snap clones back to their real twins
document.addEventListener('transitionend', function(e) {
    if (!currentSkin) return;
    const track = document.getElementById('modalTrack');
    if (!track || e.target !== track) return;
    const count = currentImages.length;
    if (!count) return;

    isTransitioning = false;
    if (currentTrackIndex === 0) {
        snapTrack(track, count);     // clone of last → real last
    } else if (currentTrackIndex === count + 1) {
        snapTrack(track, 1);         // clone of first → real first
    }
});

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

// ===== MC Server: Copy IP =====
function initMcCopy() {
    const btn = document.getElementById('mcCopyBtn');
    const input = document.getElementById('mcIp');
    if (!btn || !input) return;

    function tr(key) {
        const l = getLang();
        return (i18n[l] && i18n[l][key]) || '';
    }

    function restore() {
        btn.textContent = tr('mcCopy') || (getLang() === 'ru' ? 'Скопировать' : 'Copy');
        btn.classList.remove('copied');
    }

    function fallback(value, done) {
        input.focus();
        input.select();
        try { document.execCommand('copy'); } catch (e) {}
        done();
    }

    btn.addEventListener('click', function () {
        const value = (input.value || '').trim();
        const done = function () {
            btn.textContent = tr('mcCopied') || (getLang() === 'ru' ? 'Скопировано!' : 'Copied!');
            btn.classList.add('copied');
            setTimeout(restore, 1500);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(value).then(done, function () { fallback(value, done); });
        } else {
            fallback(value, done);
        }
    });

    document.addEventListener('click', function (e) {
        if (e.target.closest('#langBtn')) setTimeout(restore, 50);
    });
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

    // Language
    const currentLang = getLang();
    setLang(currentLang);

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

    // MC Server copy
    initMcCopy();

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
