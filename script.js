// ---------- КЭШИРОВАНИЕ И ОПТИМИЗАЦИЯ ----------
// Один раз кэшируем тяжелые запросы к DOM
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const i18n = {
    en: {
        download: 'Download',
        support: ' Support',
        flag: 'https://flagcdn.com/w40/gb.png',
        notifTitle: 'Updates',
        version: 'Version:',
        filterLabel: 'All skins',
        filterAll: 'All',
        filterCursors: 'Cursors',
        filterPersonal: 'Personal',
        filterRemakes: 'Remakes',
        filterStreamers: 'Streamers',
        title: 'Main projects',
        subtitle: 'My osu and minecraft projects',
        title_soon: 'Soon...',
        subtitle_soon: 'Wait for updates!',
        mcTitle: 'Minecraft server',
        mcDesc: 'My own fully vanilla minecraft server',
        mcPageTitle: 'Minecraft server',
        mcPageSubtitle: 'Access, mod pack & updates',
        mcSection1Title: 'Ip & access',
        mcSection1Desc: 'My private fully-vanilla server. Buy access to get your invite, then copy the ip below and join in.',
        mcBuy: 'Buy access',
        mcCopy: 'Copy',
        mcCopied: 'Copied!',
        osuTitle: 'Osu! skins',
        osuSubtitle: 'Custom self-maded skins collection',
        osuDesc: 'Custom minimalistic and light skins',
    },
    ru: {
        download: 'Скачать',
        support: ' Поддержать',
        flag: 'https://flagcdn.com/w40/ru.png',
        version: 'Версия:',
        notifTitle: 'Обновления',
        filterLabel: 'Все скины',
        filterAll: 'Все',
        filterCursors: 'Курсоры',
        filterPersonal: 'Личные',
        filterRemakes: 'Ремейки',
        filterStreamers: 'Стримеры',
        title: 'Мои проекты',
        subtitle: 'Мои скины и minecraft сервер',
        title_soon: 'Скоро...',
        subtitle_soon: 'Ждите обновлений!',
        mcTitle: 'Minecraft сервер',
        mcDesc: 'Мой собственный полностью ванильный minecraft сервер',
        mcPageTitle: 'Minecraft сервер',
        mcPageSubtitle: 'Доступ, сборка и обновления',
        mcSection1Title: 'Ip и доступ',
        mcSection1Desc: 'Мой приватный и полностью ванильный сервер. Купи доступ, чтобы получить инвайт, и присоединяйся — скопируй ip ниже.',
        mcBuy: 'Купить доступ',
        mcCopy: 'Скопировать',
        mcCopied: 'Скопировано!',
        osuTitle: 'Osu! скины',
        osuSubtitle: 'Коллекция моих кастомных скинов',
        osuDesc: 'Кастомные скины для osu — минималистичные и лёгкие',
    }
};

const skinData = {
    Cursors: {
        title: 'Cursors',
        versions: [
            { version: 'green',             download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/green/green.zip' },
            { version: 'hexagon',           download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/hexagon/hexagon.zip' },
            { version: 'hexagon cyan',      download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/hexagon_cyan/hexagon_cyan.zip' },
            { version: 'hexagon green',     download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/hexagon_green/hexagon_green.zip' },
            { version: 'hexagon white',     download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/hexagon_white/hexagon_white.zip' },
            { version: 'hexagon yellow',    download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/hexagon_yellow/hexagon_yellow.zip' },
            { version: 'rafis',             download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/rafis/rafis.zip' },
            { version: 'rektygon',          download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/rektygon/rektygon.zip' },
            { version: 'ryan',              download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/ryan/ryan.zip' },
            { version: 'vv_idke',           download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/vv_idke/vv_idke.zip' },
            { version: 'white dot',         download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/white_dot/white_dot.zip' }
        ],
        desc: { en: 'My cursors', ru: 'Мои курсоры' },
        images: [
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/cursors/green/cursor@2x.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/cursors/hexagon/cursor@2x.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/cursors/hexagon_cyan/cursor@2x.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/cursors/hexagon_green/cursor@2x.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/cursors/hexagon_white/cursor@2x.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/cursors/hexagon_yellow/cursor@2x.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/cursors/rafis/cursor@2x.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/cursors/rektygon/cursor@2x.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/cursors/ryan/cursor@2x.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/cursors/vv_idke/cursor@2x.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/cursors/white_dot/cursor@2x.png',
        ],
        labels: ['green', 'hexagon', 'hexagon cyan', 'hexagon green', 'hexagon white', 'hexagon yellow', 'rafis', 'rektygon', 'ryan', 'vv idke', 'white dot'],
        categories: ['cursors']
    },
    silenthill: {
        title: 'silenthill',
        versions: [
            { version: 'v1.1', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/slienthill/-%20mrk%20-%20silenthill%201.1.osk' },
            { version: 'v1.0', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/slienthill/-%20mrk%20-%20silenthill%201.0.osk' }
        ],
        desc: { en: 'Silenthill themed skin', ru: 'Скин по тематике silent hill' },
        images: [
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/slienthill/screenshots/stream.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/slienthill/screenshots/slider.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/slienthill/screenshots/jump.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/slienthill/screenshots/menu.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/slienthill/screenshots/mods.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/slienthill/screenshots/result.png'
        ],
        labels: ['Streams', 'Slider', 'Jumps', 'Menu', 'Mods', 'Results'],
        categories: ['personal']
    },
    silenthill_small: {
        title: 'silenthill small',
        versions: [
            { version: 'v1.1', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/silenthillsmall/-%20mrk%20-%20silenthill%20small%201.1.osk' },
            { version: 'v1.0', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/silenthillsmall/-%20mrk%20-%20silenthill%20small%201.0.osk' }
        ],
        desc: { en: 'Smaller circlesize for easier reading', ru: 'Уменьшенные круги для лёгкого чтения' },
        images: [
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/silenthillsmall/screenshots/stream.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/silenthillsmall/screenshots/slider.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/silenthillsmall/screenshots/jump.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/silenthillsmall/screenshots/menu.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/silenthillsmall/screenshots/mods.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/silenthillsmall/screenshots/result.png'
        ],
        labels: ['Streams', 'Slider', 'Jumps', 'Menu', 'Mods', 'Results'],
        categories: ['personal']
    },
    ryan: {
        title: 'ryan',
        versions: [{ version: 'v1.0', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/ryan/-%20mrk%20-%20ryan%201.0.osk' }],
        desc: { en: 'Ryuk skin remake', ru: 'Ремейк скина ryuk' },
        images: [
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/ryan/screenshots/stream.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/ryan/screenshots/slider.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/ryan/screenshots/jump.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/ryan/screenshots/menu.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/ryan/screenshots/mods.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/ryan/screenshots/result.png'
        ],
        labels: ['Streams', 'Slider', 'Jumps', 'Menu', 'Mods', 'Results'],
        categories: ['remakes']
    },
    vv_idke: {
        title: 'vv_idke',
        versions: [{ version: 'v1.0', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/vv_idke/-%20mrk%20-%20vv_idke%201.0.osk' }],
        desc: { en: 'vv_idke_trail skin remake', ru: 'Ремейк скина vv_idke_trail' },
        images: [
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/vv_idke/screenshots/stream.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/vv_idke/screenshots/slider.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/vv_idke/screenshots/jump.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/vv_idke/screenshots/menu.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/vv_idke/screenshots/mods.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/vv_idke/screenshots/result.png'
        ],
        labels: ['Streams', 'Slider', 'Jumps', 'Menu', 'Mods', 'Results'],
        categories: ['remakes']
    },
    kuruench: {
        title: 'kuruench',
        versions: [{ version: 'v1.0', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/kuruench/-%20mrk%20-%20kuruench%201.0.osk' }],
        desc: { en: 'Kururuchi x enchant collab', ru: 'Коллаба легенд kururuchi x enchant' },
        images: [
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/kuruench/screenshots/stream.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/kuruench/screenshots/slider.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/kuruench/screenshots/jump.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/kuruench/screenshots/menu.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/kuruench/screenshots/mods.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/kuruench/screenshots/result.png'
        ],
        labels: ['Streams', 'Slider', 'Jumps', 'Menu', 'Mods', 'Results'],
        categories: ['streamers']
    },
    zavoevatel: {
        title: 'zavoevatel',
        versions: [{ version: 'v1.0', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/zavoevatel/-%20mrk%20-%20zavoevatel%201.0.osk' }],
        desc: { en: 'Zavoevatel skin', ru: 'Скин zavoevatel' },
        images: [
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/zavoevatel/screenshots/stream.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/zavoevatel/screenshots/slider.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/zavoevatel/screenshots/jump.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/zavoevatel/screenshots/menu.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/zavoevatel/screenshots/mods.png',
            'https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/zavoevatel/screenshots/result.png'
        ],
        labels: ['Streams', 'Slider', 'Jumps', 'Menu', 'Mods', 'Results'],
        categories: ['streamers']
    },
    incoming: {
        title: 'Coming soon...',
        versions: [{ version: 'v0.0' }],
        desc: { en: '...', ru: '...' },
        images: [
            'https://placehold.co/800x500/000000/6c6c6c?text=Coming+soon...',
            'https://placehold.co/800x500/000000/6c6c6c?text=Coming+soon...',
            'https://placehold.co/800x500/000000/6c6c6c?text=Coming+soon...'
        ],
        labels: ['Preview 1', 'Preview 2', 'Preview 3'],
        categories: ['all']
    }
};

const notifications = [
    { id: 14, date: '03-09-2026',   title: { en: 'Redesign and Fixes!',         ru: 'Редизайн и фиксы!' },                  desc: { en: 'New site theme again 🤡 and bug fixes!',           ru: 'Новая тема на сайте снова 🤡 и фиксы багов!' } },
    { id: 13, date: '02-09-2026',   title: { en: 'Added new skin version!',     ru: 'Добавлена новая версия скина!' },      desc: { en: 'Added new skin version: silenthill small 1.0',     ru: 'Добавлена новая версия скина: silenthill small 1.0' } },
    { id: 12, date: '02-09-2026',   title: { en: 'Added new skin version!',     ru: 'Добавлена новая версия скина!' },      desc: { en: 'Added new skin version: silenthill 1.0',           ru: 'Добавлена новая версия скина: silenthill 1.0' } },
    { id: 11, date: '02-09-2026',   title: { en: 'Tags and sorting!',           ru: 'Теги и сортировка!' },                 desc: { en: 'Now you can sort skins by categories!',            ru: 'Теперь вы можете сортировать скины по категориям!' } },
    { id: 10, date: '01-09-2026',   title: { en: 'Cursors added!',              ru: 'Добавлены мои курсоры!' },             desc: { en: 'Added my cursor collection!',                      ru: 'Была добавлена моя коллекция курсоров!' } },
    { id: 9, date: '01-09-2026',    title: { en: 'New theme there!',            ru: 'Новая тема на сайте!' },               desc: { en: 'The interface has been refined, and the site color palette has been changed!', ru: 'Был доработан интерфейс и изменена цветовая палитра сайта!' } },
    { id: 8, date: '01-09-2026',    title: { en: 'Versions!',                   ru: 'Версии!' },                            desc: { en: 'Added the ability to select a skin version!',      ru: 'Добавлена возможность выбора версии скина!' } },
    { id: 7, date: '31-08-2026',    title: { en: 'Added new skin!',             ru: 'Добавлен новый скин!' },               desc: { en: 'Added new skin: zavoevatel 1.0',                   ru: 'Добавлен новый скин: zavoevatel 1.0' } },
    { id: 6, date: '31-08-2026',    title: { en: 'A lot of updates',            ru: 'Очень много нового' },                 desc: { en: '- Notification button to keep you up to date with new features!\n- Bug fixes\n- Site optimization\n- Site redesign\n- Revamped screenshot scrolling\n- Added even more bugs so theres something to fix!', ru: '- Кнопка уведомлений чтобы вы были в курсе нововведений!\n- Исправление старых багов\n- Оптимизация сайта\n- Редизайн сайта\n- Переработанная прокрутка скриншотов\n- Добавил ещё больше багов чтобы было что фиксить!' } },
    { id: 5, date: '29-08-2026',    title: { en: 'Added new skin!',             ru: 'Добавлен новый скин!' },               desc: { en: 'Added new skin: kuruench 1.0',                     ru: 'Добавлен новый скин: kuruench 1.0' } },
    { id: 4, date: '27-08-2026',    title: { en: 'Added new skin!',             ru: 'Добавлен новый скин!' },               desc: { en: 'Added new skin: vv_idke 1.0',                      ru: 'Добавлен новый скин: vv_idke 1.0' } },
    { id: 3, date: '27-08-2026',    title: { en: 'Added new skin!',             ru: 'Добавлен новый скин!' },               desc: { en: 'Added new skin: ryan 1.0',                         ru: 'Добавлен новый скин: ryan 1.0' } },
    { id: 2, date: '27-08-2026',    title: { en: 'Added new skin!',             ru: 'Добавлен новый скин!' },               desc: { en: 'Added new skin: silenthill small 1.1',             ru: 'Добавлен новый скин: silenthill small 1.1' } },
    { id: 1, date: '27-08-2026',    title: { en: 'Added new skin!',             ru: 'Добавлен новый скин!' },               desc: { en: 'Added new skin: silenthill 1.1',                   ru: 'Добавлен новый скин: silenthill 1.1' } }
];

const skinCategories = {
    all: ['incoming'],
    cursors: ['Cursors'],
    personal: ['silenthill', 'silenthill_small'],
    remakes: ['ryan', 'vv_idke'],
    streamers: ['kuruench', 'zavoevatel']
};

// ---------- БЕЗОПАСНЫЙ LOCALSTORAGE ----------
function safeGet(k) { try { return localStorage.getItem(k); } catch { return null; } }
function safeSet(k, v) { try { localStorage.setItem(k, v); } catch {} }
function getLang() { return safeGet('mimerik-lang') || 'en'; }

// ---------- ТЕМА ----------
function getTheme() {
    const saved = safeGet('mimerik-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}
function setTheme(t) {
    if (t === 'light') document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
    safeSet('mimerik-theme', t);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = t === 'light' ? '#ffffff' : '#000000';
}

// ---------- ЯЗЫК ----------
function setLang(l) {
    const t = i18n[l];
    if (!t) return;
document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
    } else {
        for (const node of el.childNodes) {
            if (node.nodeType === Node.TEXT_NODE) {
                node.textContent = t[key];
                break;
            }
        }
    }
    // Синхронизация data-text для перелива
    if (el.classList.contains('gradient-title')) {
        el.dataset.text = t[key];
    }
});
    const flagImg = document.getElementById('flagImg');
    if (flagImg && t.flag) flagImg.src = t.flag;
    document.documentElement.lang = l === 'ru' ? 'ru' : 'en';
    safeSet('mimerik-lang', l);
    updateModalLang();
    renderNotifications();
    renderSkinCards();
}

// ---------- РЕНДЕР КАРТОЧЕК ----------
let currentFilter = 'all';

function renderSkinCards() {
    const grid = document.getElementById('skinsGrid');
    if (!grid) return;
    
    // Оптимизация: используем фрагмент, чтобы вставить все карточки за один раз
    const fragment = document.createDocumentFragment();
    grid.innerHTML = '';
    const lang = getLang();

    Object.keys(skinData).forEach((skinKey) => {
        const skin = skinData[skinKey];
        const title = i18n[lang]?.[skinKey + '_Title'] || skin.title;
        const desc = i18n[lang]?.[skinKey + '_Desc'] || skin.desc[lang] || skin.desc.en || '';
        const version = skin.versions[0]?.version || 'v1.0';
        const previewImg = skin.images[0] || 'https://placehold.co/800x450/000000/6c6c6c?text=No+preview';

        const isCursor = (skin.categories || []).includes('cursors');
        const bgPlaceholder = 'https://placehold.co/800x500/000000/000000?text=0';
        
        const card = document.createElement('div');
        card.className = 'skin-card';
        card.dataset.skin = skinKey;
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        
        card.innerHTML = `
            <div class="skin-glass surface">
                <div class="skin-preview ${isCursor ? 'skin-preview-contain' : ''}">
                    <img src="${isCursor ? bgPlaceholder : previewImg}" alt="preview" class="skin-preview-img" width="800" height="450" loading="lazy" decoding="async">
                    ${isCursor ? `<img src="${previewImg}" alt="${title}" class="skin-cursor-img" loading="lazy" decoding="async">` : ''}
                    <div class="skin-overlay"></div>
                    <div class="skin-badge surface">${version}</div>
                </div>
                <div class="skin-info">
                    <h3>${title}</h3>
                    <div class="skin-divider"></div>
                    <p>${desc}</p>
                </div>
            </div>
        `;

        card.addEventListener('click', () => openModal(skinKey));
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(skinKey);
            }
        });

        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
    filterSkins(currentFilter);
    initCardTilt();
}

// ---------- ФИЛЬТР ----------
function filterSkins(filter) {
    const cards = document.querySelectorAll('.skin-card');
    const filterLabel = document.querySelector('.skins-header h2');
    const filterValue = document.getElementById('filterValue');

    const lang = getLang();
    const filterKey = 'filter' + filter.charAt(0).toUpperCase() + filter.slice(1);
    const label = i18n[lang]?.[filterKey] || i18n.en[filterKey] || filter;

    if (filterLabel) filterLabel.textContent = label;
    if (filterValue) filterValue.textContent = label;

    cards.forEach(card => {
        const skinKey = card.dataset.skin;
        if (!skinKey) return;
        const show = filter === 'all' || (skinCategories[filter] || []).includes(skinKey);
        card.style.display = show ? '' : 'none';
    });

    currentFilter = filter;
}

function initFilter() {
    const wrapper = document.getElementById('filterDropdownWrapper');
    const trigger = document.getElementById('filterTrigger');
    const options = document.querySelectorAll('#filterDropdown .item');
    if (!wrapper || !trigger || !options.length) return;

    trigger.addEventListener('click', e => {
        e.stopPropagation();
        wrapper.classList.toggle('open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            const filter = option.dataset.filter;
            if (!filter) return;
            options.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            wrapper.classList.remove('open');
            filterSkins(filter);
        });
    });
}

/* =========================================
   ЛОГИКА 3D-НАКЛОНА (TILT)
   ========================================= */
function initCardTilt() {
    // Отключаем на тач-устройствах
    if (window.matchMedia('(hover: none)').matches) return;

    const cards = document.querySelectorAll('.skin-card, .card, .mc-panel');

    cards.forEach(card => {
        if (card.dataset.tiltInit) return;
        card.dataset.tiltInit = 'true';

        let rafId = null;

        card.addEventListener('mouseenter', () => {
            // Быстрый отклик — выключаем transition, чтобы карточка следовала за курсором без задержки
            card.style.transition = 'transform 0.05s linear';
        });

        card.addEventListener('mousemove', e => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -8;
                const rotateY = ((x - centerX) / centerX) * 8;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
                rafId = null;
            });
        });

        card.addEventListener('mouseleave', () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = null;
            // Плавный возврат в исходное состояние
            card.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ---------- МОДАЛКА ----------
let currentSkin = null;
let currentThumb = 0;
let currentTrackIndex = 1;
let currentImages = [];
let currentLabels = [];

function createThumbItems(images, labels) {
    const container = document.getElementById('modalThumbsGroup');
    if (!container) return;
    
    // Фрагмент для миниатюр
    const fragment = document.createDocumentFragment();
    container.innerHTML = '';
    currentImages = images;
    currentLabels = labels;
    const isCursor = (skinData[currentSkin]?.categories || []).includes('cursors');
    const bgPlaceholder = 'https://placehold.co/800x500/000000/000000?text=0';

    images.forEach((src, index) => {
        const item = document.createElement('div');
        item.className = 'modal-thumb-item' + (index === 0 ? ' active' : '');
        item.dataset.index = index;
        
        const imgSrc = isCursor ? bgPlaceholder : src;
        const cursorImg = isCursor ? `<img class="modal-thumb-cursor" src="${src}" alt="" loading="lazy" decoding="async">` : '';

        item.innerHTML = `
            <div class="modal-thumb">
                <img class="modal-thumb-img" src="${imgSrc}" alt="${labels[index] || 'Screenshot ' + (index + 1)}" loading="lazy" decoding="async">
                ${cursorImg}
            </div>
            <div class="modal-thumb-label">${labels[index] || 'Screenshot ' + (index + 1)}</div>
        `;
        item.addEventListener('click', () => setMainShot(index));
        fragment.appendChild(item);
    });
    
    container.appendChild(fragment);
}

function updateThumbs(index) {
    const items = document.querySelectorAll('.modal-thumb-item');
    const container = document.getElementById('modalThumbsGroup');
    const totalItems = items.length;
    if (!totalItems || !container) return;

    items.forEach((item, i) => item.classList.toggle('active', i === index));

    if (totalItems <= 6) {
        container.style.transform = 'translateX(0)';
        return;
    }

    const itemWidth = items[0].getBoundingClientRect().width;
    const gap = 10;
    const step = itemWidth + gap;
    const maxScroll = (totalItems - 6) * step;

    let targetScroll = (index - 3) * step;
    if (targetScroll < 0) targetScroll = 0;
    if (targetScroll > maxScroll) targetScroll = maxScroll;

    container.style.transform = 'translateX(-' + Math.round(targetScroll) + 'px)';
}

function buildTrack(skin, track) {
    if (!track || !currentImages.length) return;
    track.innerHTML = '';
    const isCursor = (skin.categories || []).includes('cursors');

    const makeImg = (src, alt, hidden) => {
        if (isCursor) {
            const div = document.createElement('div');
            div.className = 'modal-main-img';
            div.style.background = 'url("https://placehold.co/800x500/000000/000000?text=0") center/cover';
            
            const img = document.createElement('img');
            img.className = 'modal-cursor-img';
            img.src = src;
            img.alt = alt;
            img.decoding = 'async';
            if (hidden) img.setAttribute('aria-hidden', 'true');
            div.appendChild(img);
            return div;
        }

        const img = document.createElement('img');
        img.className = 'modal-main-img';
        img.alt = alt;
        img.draggable = false;
        img.decoding = 'async';
        if (hidden) img.setAttribute('aria-hidden', 'true');
        img.src = src;
        return img;
    };

    track.appendChild(makeImg(currentImages[currentImages.length - 1], '', true));
    currentImages.forEach((src, i) => track.appendChild(makeImg(src, skin.title + ' screenshot ' + (i + 1))));
    track.appendChild(makeImg(currentImages[0], '', true));

    currentTrackIndex = 1;
    track.style.transition = 'none';
    track.style.transform = 'translateX(-100%)';
    void track.offsetWidth;
    track.style.transition = 'transform 0.2s ease';
}

function openModal(skinKey) {
    const skin = skinData[skinKey];
    if (!skin) return;

    currentSkin = skinKey;
    currentThumb = 0;
    currentTrackIndex = 1;
    currentImages = skin.images || [];
    currentLabels = skin.labels || [];

    const modal = document.getElementById('skinModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalVersion = document.getElementById('modalVersion');
    const modalDesc = document.getElementById('modalDesc');
    const modalDownload = document.getElementById('modalDownload');
    const modalVersionSelect = document.getElementById('modalVersionSelect');
    const customSelectValue = document.getElementById('customSelectValue');
    const customSelectDropdown = document.getElementById('customSelectDropdown');
    const customSelectWrapper = document.getElementById('customSelectWrapper');
    const customSelectTrigger = document.getElementById('customSelectTrigger');
    const modalTrack = document.getElementById('modalTrack');

    if (!modal || !modalTitle || !modalVersion || !modalDesc || !modalDownload || !modalVersionSelect || !modalTrack) return;

    const lang = getLang();
    modalTitle.textContent = skin.title;
    modalVersion.textContent = skin.versions[0]?.version || 'v1.0';
    modalDesc.textContent = skin.desc[lang] || skin.desc.en;

    modalVersionSelect.innerHTML = '';
    customSelectDropdown.innerHTML = '';

    skin.versions.forEach((v, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = v.version;
        if (index === 0) option.selected = true;
        modalVersionSelect.appendChild(option);

        const item = document.createElement('div');
        item.className = 'item' + (index === 0 ? ' active' : '');
        item.dataset.index = index;
        item.textContent = v.version;

        item.addEventListener('click', () => {
            const selectedIndex = parseInt(item.dataset.index);
            const selectedVersion = skin.versions[selectedIndex];
            if (!selectedVersion) return;
            customSelectValue.textContent = selectedVersion.version;
            modalDownload.href = selectedVersion.download;
            modalVersionSelect.value = selectedIndex;
            modalVersion.textContent = selectedVersion.version;
            customSelectDropdown.querySelectorAll('.item').forEach(o => o.classList.remove('active'));
            item.classList.add('active');
            customSelectWrapper.classList.remove('open');
        });

        customSelectDropdown.appendChild(item);
    });

    modalDownload.href = skin.versions[0]?.download || '#';
    customSelectValue.textContent = skin.versions[0]?.version || 'v1.0';

    customSelectTrigger.onclick = e => {
        e.stopPropagation();
        customSelectWrapper.classList.toggle('open');
    };

    buildTrack(skin, modalTrack);
    createThumbItems(currentImages, currentLabels);

    const container = document.getElementById('modalThumbsGroup');
    const thumbsWrapper = document.getElementById('modalThumbsGroupWrapper');
    if (container) container.style.transform = 'translateX(0)';
    if (thumbsWrapper) thumbsWrapper.scrollLeft = 0;

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

    const container = document.getElementById('modalThumbsGroup');
    const thumbsWrapper = document.getElementById('modalThumbsGroupWrapper');
    if (container) container.style.transform = 'translateX(0)';
    if (thumbsWrapper) thumbsWrapper.scrollLeft = 0;

    currentThumb = 0;
}

function updateModalLang() {
    if (!currentSkin) return;
    const skin = skinData[currentSkin];
    const modalDesc = document.getElementById('modalDesc');
    if (!skin || !modalDesc) return;
    modalDesc.textContent = skin.desc[getLang()] || skin.desc.en;
}

function setMainShot(index) {
    if (!currentSkin) return;
    const count = currentImages.length;
    if (!count) return;
    const track = document.getElementById('modalTrack');
    if (!track) return;

    const next = ((index % count) + count) % count;
    if (next === currentThumb) return;

    let targetTrack;
    if (currentThumb === count - 1 && next === 0) targetTrack = count + 1;
    else if (currentThumb === 0 && next === count - 1) targetTrack = 0;
    else targetTrack = next + 1;

    currentThumb = next;
    updateThumbs(next);

    currentTrackIndex = targetTrack;
    track.style.transform = 'translateX(-' + (targetTrack * 100) + '%)';
}

function nextImage() {
    if (!currentSkin || !currentImages.length) return;
    const count = currentImages.length;
    if (count <= 1) return;
    setMainShot((currentThumb + 1) % count);
}

function prevImage() {
    if (!currentSkin || !currentImages.length) return;
    const count = currentImages.length;
    if (count <= 1) return;
    setMainShot((currentThumb - 1 + count) % count);
}

function snapTrack(track, index) {
    track.style.transition = 'none';
    track.style.transform = 'translateX(-' + (index * 100) + '%)';
    currentTrackIndex = index;
    void track.offsetWidth;
    track.style.transition = 'transform 0.2s ease';
}

// Оптимизация: пассивные слушатели
document.addEventListener('transitionend', e => {
    if (!currentSkin) return;
    const track = document.getElementById('modalTrack');
    if (!track || e.target !== track) return;
    const count = currentImages.length;
    if (!count) return;

    if (currentTrackIndex === 0) snapTrack(track, count);
    else if (currentTrackIndex === count + 1) snapTrack(track, 1);
}, { passive: true });

let touchStartX = 0;
function handleTouchStart(e) { touchStartX = e.changedTouches[0].screenX; }
function handleTouchEnd(e) {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) nextImage();
        else prevImage();
    }
}

function initMcCopy() {
    const btn = document.getElementById('mcCopyBtn');
    const input = document.getElementById('mcIp');
    if (!btn || !input) return;

    const tr = key => (i18n[getLang()] && i18n[getLang()][key]) || '';
    const restore = () => { btn.textContent = tr('mcCopy'); };
    const fallback = (value, done) => {
        input.focus();
        input.select();
        try { document.execCommand('copy'); } catch (e) {}
        done();
    };

    btn.addEventListener('click', () => {
        const value = (input.value || '').trim();
        const done = () => {
            btn.textContent = tr('mcCopied');
            setTimeout(restore, 1500);
        };
        if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText(value).then(done, () => fallback(value, done));
        } else {
            fallback(value, done);
        }
    });

    document.addEventListener('click', e => {
        if (e.target.closest('#langBtn')) setTimeout(restore, 50);
    });
}

let notifOpen = false;

function getLastReadNotifId() { return parseInt(safeGet('mimerik-notif-last-read')) || 0; }
function setLastReadNotifId(id) { safeSet('mimerik-notif-last-read', String(id)); }

function hasNewNotifications() {
    const lastRead = getLastReadNotifId();
    if (!notifications.length) return false;
    return notifications[notifications.length - 1].id > lastRead;
}

function renderNotifications() {
    const list = document.getElementById('notifList');
    if (!list) return;
    
    // Фрагмент для уведомлений
    const fragment = document.createDocumentFragment();
    list.innerHTML = '';
    const lang = getLang();
    
    notifications.forEach(n => {
        const item = document.createElement('div');
        item.className = 'notif-item';
        item.innerHTML = `
            <div class="notif-date">${n.date}</div>
            <div class="notif-title">${n.title[lang] || n.title.en}</div>
            <div class="notif-desc">${n.desc[lang] || n.desc.en}</div>
        `;
        fragment.appendChild(item);
    });
    
    list.appendChild(fragment);
}

function toggleNotifications() {
    const panel = document.getElementById('notifPanel');
    const dot = document.getElementById('notifDot');
    if (!panel) return;

    notifOpen = !notifOpen;
    panel.classList.toggle('open', notifOpen);
    panel.setAttribute('aria-hidden', String(!notifOpen));

    if (notifOpen) {
        if (notifications.length) setLastReadNotifId(notifications[notifications.length - 1].id);
        if (dot) dot.classList.remove('visible');
    }
    document.body.style.overflow = notifOpen ? 'hidden' : '';
}

function closeNotifications() {
    const panel = document.getElementById('notifPanel');
    if (!panel || !panel.classList.contains('open')) return;
    notifOpen = false;
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function checkNotifications() {
    const dot = document.getElementById('notifDot');
    if (!dot) return;
    if (hasNewNotifications() && !notifOpen) dot.classList.add('visible');
    else dot.classList.remove('visible');
}

// ---------- ОПТИМИЗИРОВАННАЯ ПРОКРУТКА ----------
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (window.scrollY > 20) {
                    navbar.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
                } else {
                    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
                }
            }
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// ---------- ОПТИМИЗИРОВАННЫЙ RESIZE ----------
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const modal = document.getElementById('skinModal');
        if (currentSkin && modal && modal.classList.contains('open')) updateThumbs(currentThumb);
    }, 100);
}, { passive: true });

// ---------- ИНИЦИАЛИЗАЦИЯ ----------
async function init() {
    setTheme(getTheme());
    setLang(getLang());
    renderNotifications();
    checkNotifications();
    initMcCopy();
    initFilter();
    initCardTilt();
    
    // Слушатели тем/языка
    document.getElementById('themeBtn')?.addEventListener('click', () => {
        setTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
    });
    document.getElementById('langBtn')?.addEventListener('click', () => {
        setLang(getLang() === 'en' ? 'ru' : 'en');
    });
    document.getElementById('notifBtn')?.addEventListener('click', toggleNotifications);
    document.getElementById('notifPanelClose')?.addEventListener('click', closeNotifications);
    document.getElementById('modalBackdrop')?.addEventListener('click', closeModal);
    document.getElementById('modalClose')?.addEventListener('click', closeModal);

    document.querySelector('.modal-panel')?.addEventListener('click', e => {
        if (e.target.closest('#modalNavPrev')) { e.stopPropagation(); e.preventDefault(); prevImage(); }
        else if (e.target.closest('#modalNavNext')) { e.stopPropagation(); e.preventDefault(); nextImage(); }
    });

    const modalMainWrapper = document.querySelector('.modal-main-wrapper');
    if (modalMainWrapper) {
        modalMainWrapper.addEventListener('touchstart', handleTouchStart, { passive: true });
        modalMainWrapper.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    document.getElementById('modalThumbsGroup')?.addEventListener('click', e => {
        const item = e.target.closest('.modal-thumb-item');
        if (!item) return;
        const index = parseInt(item.dataset.index);
        if (!isNaN(index)) setMainShot(index);
    });

    document.addEventListener('keydown', e => {
        const modal = document.getElementById('skinModal');
        if (modal && modal.classList.contains('open')) {
            if (e.key === 'Escape') closeModal();
            else if (e.key === 'ArrowLeft') { e.preventDefault(); prevImage(); }
            else if (e.key === 'ArrowRight') { e.preventDefault(); nextImage(); }
            return;
        }
        if (e.key === 'Escape' && notifOpen) closeNotifications();
    });

    document.addEventListener('click', e => {
        const sel = document.getElementById('customSelectWrapper');
        if (sel && !sel.contains(e.target)) sel.classList.remove('open');

        const filter = document.getElementById('filterDropdownWrapper');
        if (filter && !filter.contains(e.target)) filter.classList.remove('open');

        if (notifOpen) {
            const panel = document.getElementById('notifPanel');
            const btn = document.getElementById('notifBtn');
            if (panel && btn && !panel.contains(e.target) && !btn.contains(e.target)) closeNotifications();
        }
    });
}

document.addEventListener('DOMContentLoaded', init);