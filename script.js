const $ = (sel) => document.querySelector(sel);

const i18n = {
    en: {
        download: 'Download', support: ' Support', flag: 'https://flagcdn.com/w40/gb.png',
        notifTitle: 'Updates', version: 'Version:', filterLabel: 'All skins',
        filterAll: 'All', filterCursors: 'Cursors', filterPersonal: 'Personal',
        filterRemakes: 'Remakes', filterStreamers: 'Streamers', title: 'Main projects',
        subtitle: 'My osu and minecraft projects', title_soon: 'Soon...', subtitle_soon: 'Wait for updates!',
        mcTitle: 'Minecraft server', mcDesc: 'My own fully vanilla minecraft server',
        mcPageTitle: 'Minecraft server', mcPageSubtitle: 'Access, mod pack & updates',
        mcSection1Title: 'Ip & access', mcSection1Desc: 'My private fully-vanilla server. Buy access to get your invite, then copy the ip below and join in.',
        mcBuy: 'Buy access', mcCopy: 'Copy', mcCopied: 'Copied!',
        osuTitle: 'Osu! skins', osuSubtitle: 'Custom self-maded skins collection', osuDesc: 'Custom minimalistic and light skins',
    },
    ru: {
        download: 'Скачать', support: ' Поддержать', flag: 'https://flagcdn.com/w40/ru.png',
        notifTitle: 'Обновления', version: 'Версия:', filterLabel: 'Все скины',
        filterAll: 'Все', filterCursors: 'Курсоры', filterPersonal: 'Личные',
        filterRemakes: 'Ремейки', filterStreamers: 'Стримеры', title: 'Мои проекты',
        subtitle: 'Мои скины и minecraft сервер', title_soon: 'Скоро...', subtitle_soon: 'Ждите обновлений!',
        mcTitle: 'Minecraft сервер', mcDesc: 'Мой собственный полностью ванильный minecraft сервер',
        mcPageTitle: 'Minecraft сервер', mcPageSubtitle: 'Доступ, сборка и обновления',
        mcSection1Title: 'Ip и доступ', mcSection1Desc: 'Мой приватный и полностью ванильный сервер. Купи доступ, чтобы получить инвайт, и присоединяйся — скопируй ip ниже.',
        mcBuy: 'Купить доступ', mcCopy: 'Скопировать', mcCopied: 'Скопировано!',
        osuTitle: 'Osu! скины', osuSubtitle: 'Коллекция моих кастомных скинов', osuDesc: 'Кастомные скины для osu — минималистичные и лёгкие',
    }
};

const skinData = {
    Cursors: {
        title: 'Cursors',
        versions: [
            { version: 'green', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/green/green.zip' },
            { version: 'hexagon', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/hexagon/hexagon.zip' },
            { version: 'hexagon cyan', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/hexagon_cyan/hexagon_cyan.zip' },
            { version: 'hexagon green', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/hexagon_green/hexagon_green.zip' },
            { version: 'hexagon white', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/hexagon_white/hexagon_white.zip' },
            { version: 'hexagon yellow', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/hexagon_yellow/hexagon_yellow.zip' },
            { version: 'rafis', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/rafis/rafis.zip' },
            { version: 'rektygon', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/rektygon/rektygon.zip' },
            { version: 'ryan', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/ryan/ryan.zip' },
            { version: 'vv_idke', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/vv_idke/vv_idke.zip' },
            { version: 'white dot', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/white_dot/white_dot.zip' }
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
        images: ['stream.png', 'slider.png', 'jump.png', 'menu.png', 'mods.png', 'result.png'].map(f => `https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/slienthill/screenshots/${f}`),
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
        images: ['stream.png', 'slider.png', 'jump.png', 'menu.png', 'mods.png', 'result.png'].map(f => `https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/silenthillsmall/screenshots/${f}`),
        labels: ['Streams', 'Slider', 'Jumps', 'Menu', 'Mods', 'Results'],
        categories: ['personal']
    },
    ryan: {
        title: 'ryan',
        versions: [{ version: 'v1.0', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/ryan/-%20mrk%20-%20ryan%201.0.osk' }],
        desc: { en: 'Ryuk skin remake', ru: 'Ремейк скина ryuk' },
        images: ['stream.png', 'slider.png', 'jump.png', 'menu.png', 'mods.png', 'result.png'].map(f => `https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/ryan/screenshots/${f}`),
        labels: ['Streams', 'Slider', 'Jumps', 'Menu', 'Mods', 'Results'],
        categories: ['remakes']
    },
    vv_idke: {
        title: 'vv_idke',
        versions: [{ version: 'v1.0', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/vv_idke/-%20mrk%20-%20vv_idke%201.0.osk' }],
        desc: { en: 'vv_idke_trail skin remake', ru: 'Ремейк скина vv_idke_trail' },
        images: ['stream.png', 'slider.png', 'jump.png', 'menu.png', 'mods.png', 'result.png'].map(f => `https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/vv_idke/screenshots/${f}`),
        labels: ['Streams', 'Slider', 'Jumps', 'Menu', 'Mods', 'Results'],
        categories: ['remakes']
    },
    kuruench: {
        title: 'kuruench',
        versions: [{ version: 'v1.0', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/kuruench/-%20mrk%20-%20kuruench%201.0.osk' }],
        desc: { en: 'Kururuchi x enchant collab', ru: 'Коллаба легенд kururuchi x enchant' },
        images: ['stream.png', 'slider.png', 'jump.png', 'menu.png', 'mods.png', 'result.png'].map(f => `https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/kuruench/screenshots/${f}`),
        labels: ['Streams', 'Slider', 'Jumps', 'Menu', 'Mods', 'Results'],
        categories: ['streamers']
    },
    zavoevatel: {
        title: 'zavoevatel',
        versions: [{ version: 'v1.0', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/zavoevatel/-%20mrk%20-%20zavoevatel%201.0.osk' }],
        desc: { en: 'Zavoevatel skin', ru: 'Скин zavoevatel' },
        images: ['stream.png', 'slider.png', 'jump.png', 'menu.png', 'mods.png', 'result.png'].map(f => `https://raw.githubusercontent.com/mimerik/mimerik.github.io/main/osu/skins/zavoevatel/screenshots/${f}`),
        labels: ['Streams', 'Slider', 'Jumps', 'Menu', 'Mods', 'Results'],
        categories: ['streamers']
    },
    incoming: {
        title: 'Coming soon...', versions: [{ version: 'v0.0' }], desc: { en: '...', ru: '...' },
        images: Array(3).fill('https://placehold.co/800x500/000000/6c6c6c?text=Coming+soon...'),
        labels: ['Preview 1', 'Preview 2', 'Preview 3'], categories: ['all']
    }
};

const notifications = [
    { id: 14, date: '03-09-2026', title: { en: 'Redesign and Fixes!', ru: 'Редизайн и фиксы!' }, desc: { en: 'New site theme again and bug fixes!', ru: 'Новая тема на сайте снова и фиксы багов!' } },
    { id: 13, date: '02-09-2026', title: { en: 'Added new skin version!', ru: 'Добавлена новая версия скина!' }, desc: { en: 'Added new skin version: silenthill small 1.0', ru: 'Добавлена новая версия скина: silenthill small 1.0' } },
    { id: 12, date: '02-09-2026', title: { en: 'Added new skin version!', ru: 'Добавлена новая версия скина!' }, desc: { en: 'Added new skin version: silenthill 1.0', ru: 'Добавлена новая версия скина: silenthill 1.0' } },
    { id: 11, date: '02-09-2026', title: { en: 'Tags and sorting!', ru: 'Теги и сортировка!' }, desc: { en: 'Now you can sort skins by categories!', ru: 'Теперь вы можете сортировать скины по категориям!' } },
    { id: 10, date: '01-09-2026', title: { en: 'Cursors added!', ru: 'Добавлены мои курсоры!' }, desc: { en: 'Added my cursor collection!', ru: 'Была добавлена моя коллекция курсоров!' } },
    { id: 9, date: '01-09-2026', title: { en: 'New theme there!', ru: 'Новая тема на сайте!' }, desc: { en: 'The interface has been refined, and the site color palette has been changed!', ru: 'Был доработан интерфейс и изменена цветовая палитра сайта!' } },
    { id: 8, date: '01-09-2026', title: { en: 'Versions!', ru: 'Версии!' }, desc: { en: 'Added the ability to select a skin version!', ru: 'Добавлена возможность выбора версии скина!' } },
    { id: 7, date: '31-08-2026', title: { en: 'Added new skin!', ru: 'Добавлен новый скин!' }, desc: { en: 'Added new skin: zavoevatel 1.0', ru: 'Добавлен новый скин: zavoevatel 1.0' } },
    { id: 6, date: '31-08-2026', title: { en: 'A lot of updates', ru: 'Очень много нового' }, desc: { en: '- Notification button!\n- Bug fixes\n- Optimization\n- Redesign\n- Revamped scrolling\n- Added bugs to fix', ru: '- Кнопка уведомлений!\n- Исправление багов\n- Оптимизация\n- Редизайн\n- Переработанная прокрутка\n- Добавил багов чтобы было что фиксить' } },
    { id: 5, date: '29-08-2026', title: { en: 'Added new skin!', ru: 'Добавлен новый скин!' }, desc: { en: 'Added new skin: kuruench 1.0', ru: 'Добавлен новый скин: kuruench 1.0' } },
    { id: 4, date: '27-08-2026', title: { en: 'Added new skin!', ru: 'Добавлен новый скин!' }, desc: { en: 'Added new skin: vv_idke 1.0', ru: 'Добавлен новый скин: vv_idke 1.0' } },
    { id: 3, date: '27-08-2026', title: { en: 'Added new skin!', ru: 'Добавлен новый скин!' }, desc: { en: 'Added new skin: ryan 1.0', ru: 'Добавлен новый скин: ryan 1.0' } },
    { id: 2, date: '27-08-2026', title: { en: 'Added new skin!', ru: 'Добавлен новый скин!' }, desc: { en: 'Added new skin: silenthill small 1.1', ru: 'Добавлен новый скин: silenthill small 1.1' } },
    { id: 1, date: '27-08-2026', title: { en: 'Added new skin!', ru: 'Добавлен новый скин!' }, desc: { en: 'Added new skin: silenthill 1.1', ru: 'Добавлен новый скин: silenthill 1.1' } }
];

const skinCategories = {
    all: ['incoming'], cursors: ['Cursors'],
    personal: ['silenthill', 'silenthill_small'],
    remakes: ['ryan', 'vv_idke'], streamers: ['kuruench', 'zavoevatel']
};

const safeGet = k => { try { return localStorage.getItem(k); } catch { return null; } };
const safeSet = (k, v) => { try { localStorage.setItem(k, v); } catch {} };
const getLang = () => safeGet('mimerik-lang') || 'en';
const getTheme = () => safeGet('mimerik-theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

function setTheme(t) {
    if (t === 'light') document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
    safeSet('mimerik-theme', t);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = t === 'light' ? '#ffffff' : '#000000';
}

let currentFilter = 'all';

function setLang(l) {
    const t = i18n[l];
    if (!t) return;
    document.documentElement.lang = l === 'ru' ? 'ru' : 'en';
    safeSet('mimerik-lang', l);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (!t[key]) return;
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = t[key];
        } else if (el.classList.contains('gradient-title')) {
            el.dataset.text = t[key];
            el.textContent = t[key];
        } else if (!el.querySelector('.version-roller')) {
            for (const node of el.childNodes) {
                if (node.nodeType === Node.TEXT_NODE) { node.textContent = t[key]; break; }
            }
        }
    });

    const flagImg = document.getElementById('flagImg');
    if (flagImg && t.flag) flagImg.src = t.flag;

    const filterValue = document.getElementById('filterValue');
    if (filterValue) {
        const fKey = 'filter' + currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1);
        rollVersionText(filterValue, t[fKey] || t.filterAll || 'All');
    }
    updateModalLang();
    renderNotifications();
    renderSkinCards();
}

function renderSkinCards() {
    const grid = document.getElementById('skinsGrid');
    if (!grid) return;
    const fragment = document.createDocumentFragment();
    grid.innerHTML = '';
    const lang = getLang();

    Object.keys(skinData).forEach((key, index) => {
        const skin = skinData[key];
        const title = i18n[lang]?.[key + '_Title'] || skin.title;
        const desc = i18n[lang]?.[key + '_Desc'] || skin.desc[lang] || skin.desc.en || '';
        const isCursor = skin.categories.includes('cursors');
        const displayVersion = isCursor ? skin.versions[0].version : skin.versions[0].version.replace(/^v/i, '');
        const bgPlaceholder = 'https://placehold.co/800x500/000000/000000?text=0';

        const card = document.createElement('div');
        card.className = 'skin-card';
        card.dataset.skin = key;
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.style.animationDelay = `${index * 40}ms`;

        card.innerHTML = `
            <div class="skin-glass surface">
                <div class="skin-preview ${isCursor ? 'skin-preview-contain' : ''}">
                    <img src="${isCursor ? bgPlaceholder : (skin.images[0] || bgPlaceholder)}" alt="preview" class="skin-preview-img" width="800" height="450" loading="lazy">
                    ${isCursor ? `<img src="${skin.images[0]}" alt="${title}" class="skin-cursor-img" loading="lazy">` : ''}
                    <div class="skin-overlay"></div>
                    <div class="skin-badge surface">${displayVersion}</div>
                </div>
                <div class="skin-info">
                    <h3>${title}</h3>
                    <div class="skin-divider"></div>
                    <p>${desc}</p>
                </div>
            </div>`;
        card.addEventListener('click', () => openModal(key));
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(key); } });
        fragment.appendChild(card);
    });
    grid.appendChild(fragment);
    filterSkins(currentFilter);
    initCardTilt();
}

function filterSkins(filter) {
    const lang = getLang();
    const fKey = 'filter' + filter.charAt(0).toUpperCase() + filter.slice(1);
    const label = i18n[lang]?.[fKey] || i18n.en[fKey] || filter;

    const filterLabel = document.querySelector('.skins-header h2');
    if (filterLabel) filterLabel.textContent = label;

    let visibleIndex = 0;
    document.querySelectorAll('.skin-card').forEach(card => {
        const key = card.dataset.skin;
        if (!key) return;
        const show = (filter === 'all' || (skinCategories[filter] || []).includes(key));
        
        if (show) {
            card.style.display = '';
            card.style.animation = 'none';
            void card.offsetWidth;
            card.style.animation = `fadeInScale 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards`;
            card.style.animationDelay = `${visibleIndex * 40}ms`;
            card.style.opacity = '0';
            visibleIndex++;
        } else {
            card.style.display = 'none';
        }
    });
    currentFilter = filter;
}

function initFilter() {
    const wrapper = document.getElementById('filterDropdownWrapper');
    const trigger = document.getElementById('filterTrigger');
    const options = document.querySelectorAll('#filterDropdown .item');
    if (!wrapper || !trigger || !options.length) return;

    const filterValue = document.getElementById('filterValue');
    if (filterValue) {
        const lang = getLang();
        rollVersionText(filterValue, i18n[lang]?.filterAll || 'All');
    }

    trigger.addEventListener('click', e => { e.stopPropagation(); wrapper.classList.toggle('open'); });
    options.forEach(opt => {
        opt.addEventListener('click', () => {
            const filter = opt.dataset.filter;
            if (!filter) return;
            options.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            wrapper.classList.remove('open');

            if (filterValue) {
                rollVersionText(filterValue, opt.textContent || '');
            }
            filterSkins(filter);
        });
    });
}

function initCardTilt() {
    if (window.matchMedia('(hover: none)').matches) return;
    document.querySelectorAll('.skin-card, .card, .mc-panel').forEach(card => {
        if (card.dataset.tiltInit) return;
        card.dataset.tiltInit = 'true';
        let rafId = null;
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.05s linear';
        });
        card.addEventListener('mousemove', e => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                const rect = card.getBoundingClientRect();
                const rotateX = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -8;
                const rotateY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 8;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
                rafId = null;
            });
        });
        card.addEventListener('mouseleave', () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = null;
            card.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

let currentSkin = null, currentThumb = 0, currentTrackIndex = 1, currentImages = [], currentLabels = [];
let isDraggingTrack = false, thumbsSuppressClick = false, thumbsSuppressTimer = null;
const isCursorSkin = skin => (skin?.categories || []).includes('cursors');

function syncVersionToThumb(index) {
    if (!currentSkin) return;
    const skin = skinData[currentSkin];
    if (skin && isCursorSkin(skin) && skin.versions[index]) updateVersionUI(skin, index);
}

function animateTriggerWidth(el) {
    if (!el) return;
    el.style.width = 'max-content';
    const targetWidth = el.getBoundingClientRect().width;
    const startWidth = el.offsetWidth;
    if (Math.abs(startWidth - targetWidth) < 1) return;
    el.style.width = startWidth + 'px';
    void el.offsetWidth;
    el.style.transition = 'width 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
    requestAnimationFrame(() => {
        el.style.width = targetWidth + 'px';
    });
    clearTimeout(el._animTimer);
    el._animTimer = setTimeout(() => {
        el.style.width = 'max-content';
        el.style.transition = '';
    }, 320);
}

function rollVersionText(container, newText) {
    if (!container) return;
    Array.from(container.childNodes).forEach(n => { if (n.nodeType === Node.TEXT_NODE) n.textContent = ''; });
    
    let roller = container.querySelector('.version-roller');
    if (!roller) {
        roller = document.createElement('span');
        roller.className = 'version-roller';
        container.insertBefore(roller, container.firstChild);
    }

    let letters = Array.from(roller.querySelectorAll('.version-roller-letter'));
    const newChars = Array.from(newText);
    
    while (letters.length > newChars.length) {
        roller.removeChild(letters.pop());
    }
    while (letters.length < newChars.length) {
        const l = document.createElement('span');
        l.className = 'version-roller-letter';
        l.textContent = '\u00A0';
        l.style.opacity = '0';
        roller.appendChild(l);
        letters.push(l);
    }

    letters.forEach((l, i) => {
        l.textContent = newChars[i] === ' ' ? '\u00A0' : newChars[i];
    });

    letters.forEach((l, i) => {
        l.style.transition = 'none';
        l.style.opacity = '0';
        l.style.transform = 'translateY(4px)';
        void l.offsetWidth;
        l.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        l.style.transitionDelay = (i * 30) + 'ms';
        l.style.opacity = '1';
        l.style.transform = 'translateY(0)';
    });

    animateTriggerWidth(container);
}

function createThumbItems(images, labels) {
    const container = document.getElementById('modalThumbsGroup');
    if (!container) return;
    const fragment = document.createDocumentFragment();
    container.innerHTML = '';
    currentImages = images; currentLabels = labels;
    const isCursor = isCursorSkin(skinData[currentSkin]);
    const bgPlaceholder = 'https://placehold.co/800x500/000000/000000?text=0';

    images.forEach((src, i) => {
        const item = document.createElement('div');
        item.className = 'modal-thumb-item' + (i === 0 ? ' active' : '');
        item.dataset.index = i;
        item.innerHTML = `
            <div class="modal-thumb">
                <img class="modal-thumb-img" src="${isCursor ? bgPlaceholder : src}" alt="${labels[i] || 'Screenshot ' + (i + 1)}" loading="lazy">
                ${isCursor ? `<img class="modal-thumb-cursor" src="${src}" alt="" loading="lazy">` : ''}
            </div>
            <div class="modal-thumb-label">${labels[i] || 'Screenshot ' + (i + 1)}</div>`;
        item.addEventListener('click', () => setMainShot(i));
        fragment.appendChild(item);
    });
    container.appendChild(fragment);
}

function updateThumbs(index) {
    const items = document.querySelectorAll('.modal-thumb-item');
    const container = document.getElementById('modalThumbsGroup');
    if (!items.length || !container) return;
    items.forEach((item, i) => item.classList.toggle('active', i === index));
    if (items.length <= 6) { container.style.transform = 'translateX(0)'; return; }
    const step = items[0].getBoundingClientRect().width + 10;
    const maxScroll = (items.length - 6) * step;
    let targetScroll = (index - 3) * step;
    targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
    container.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    container.style.transform = `translateX(-${Math.round(targetScroll)}px)`;
}

function buildTrack(skin, track) {
    if (!track || !currentImages.length) return;
    track.innerHTML = '';
    const isCursor = isCursorSkin(skin);
    const makeImg = (src, alt, hidden) => {
        if (isCursor) {
            const div = document.createElement('div');
            div.className = 'modal-main-img';
            div.style.background = 'url("https://placehold.co/800x500/000000/000000?text=0") center/cover';
            const img = document.createElement('img');
            img.className = 'modal-cursor-img'; img.src = src; img.alt = alt; img.decoding = 'async';
            if (hidden) img.setAttribute('aria-hidden', 'true');
            div.appendChild(img);
            return div;
        }
        const img = document.createElement('img');
        img.className = 'modal-main-img'; img.alt = alt; img.draggable = false; img.decoding = 'async';
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
    track.style.transition = 'transform 0.25s ease';
}

function updateVersionUI(skin, index) {
    const v = skin.versions[index];
    if (!v) return;
    const modalVersion = document.getElementById('modalVersion');
    const modalDownload = document.getElementById('modalDownload');
    const customSelectValue = document.getElementById('customSelectValue');
    const modalVersionSelect = document.getElementById('modalVersionSelect');
    const customSelectDropdown = document.getElementById('customSelectDropdown');

    const versionText = isCursorSkin(skin) ? v.version : v.version.replace(/^v/i, '');

    if (modalVersion) rollVersionText(modalVersion, versionText);
    if (customSelectValue) rollVersionText(customSelectValue, versionText);
    
    if (modalDownload) {
        modalDownload.href = v.download || '#';
        const t = modalDownload.querySelector('[data-i18n="download"]');
        if (t) t.textContent = i18n[getLang()]?.download || 'Download';
    }
    if (modalVersionSelect) modalVersionSelect.value = index;
    if (customSelectDropdown) {
        customSelectDropdown.querySelectorAll('.item').forEach(o => o.classList.toggle('active', o.dataset.index == index));
    }
}

function openModal(skinKey) {
    const skin = skinData[skinKey];
    if (!skin) return;
    Object.assign({}, currentSkin = skinKey, currentThumb = 0, currentTrackIndex = 1);
    currentImages = skin.images || []; currentLabels = skin.labels || [];
    isDraggingTrack = false; thumbsSuppressClick = false;
    if (thumbsSuppressTimer) clearTimeout(thumbsSuppressTimer);

    const modal = document.getElementById('skinModal'), modalTitle = document.getElementById('modalTitle');
    const modalVersion = document.getElementById('modalVersion'), modalDesc = document.getElementById('modalDesc');
    const modalDownload = document.getElementById('modalDownload'), modalVersionSelect = document.getElementById('modalVersionSelect');
    const customSelectValue = document.getElementById('customSelectValue'), customSelectDropdown = document.getElementById('customSelectDropdown');
    const customSelectWrapper = document.getElementById('customSelectWrapper'), customSelectTrigger = document.getElementById('customSelectTrigger');
    const modalTrack = document.getElementById('modalTrack');

    if (!modal || !modalTitle || !modalVersion || !modalDesc || !modalDownload || !modalVersionSelect || !modalTrack) return;

    const lang = getLang();
    modalTitle.textContent = skin.title;
    const isCursor = isCursorSkin(skin);
    const initialVersion = isCursor ? skin.versions[0].version : skin.versions[0].version.replace(/^v/i, '');

    if (modalVersion) rollVersionText(modalVersion, initialVersion);
    if (modalDesc) modalDesc.textContent = skin.desc[lang] || skin.desc.en;
    
    modalVersionSelect.innerHTML = '';
    customSelectDropdown.innerHTML = '';

    skin.versions.forEach((v, i) => {
        const txt = isCursor ? v.version : v.version.replace(/^v/i, '');
        modalVersionSelect.add(new Option(txt, i, i === 0, i === 0));
        const item = document.createElement('div');
        item.className = 'item' + (i === 0 ? ' active' : '');
        item.dataset.index = i;
        item.textContent = txt;
        item.addEventListener('click', () => {
            updateVersionUI(skin, i);
            if (customSelectWrapper) customSelectWrapper.classList.remove('open');
            if (isCursor) setMainShot(i);
        });
        customSelectDropdown.appendChild(item);
    });

    modalDownload.href = skin.versions[0].download || '#';
    if (customSelectValue) rollVersionText(customSelectValue, initialVersion);
    if (customSelectTrigger) {
        customSelectTrigger.onclick = e => { e.stopPropagation(); customSelectWrapper.classList.toggle('open'); };
    }

    buildTrack(skin, modalTrack);
    createThumbItems(currentImages, currentLabels);
    const thumbsGroup = document.getElementById('modalThumbsGroup'), thumbsWrapper = document.getElementById('modalThumbsGroupWrapper');
    if (thumbsGroup) thumbsGroup.style.transform = 'translateX(0)';
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
    const thumbsGroup = document.getElementById('modalThumbsGroup'), thumbsWrapper = document.getElementById('modalThumbsGroupWrapper');
    if (thumbsGroup) thumbsGroup.style.transform = 'translateX(0)';
    if (thumbsWrapper) thumbsWrapper.scrollLeft = 0;
    currentThumb = 0; isDraggingTrack = false; thumbsSuppressClick = false;
    if (thumbsSuppressTimer) clearTimeout(thumbsSuppressTimer);
}

function updateModalLang() {
    if (!currentSkin) return;
    const skin = skinData[currentSkin], modalDesc = document.getElementById('modalDesc'), modalDownload = document.getElementById('modalDownload');
    if (!skin || !modalDesc) return;
    modalDesc.textContent = skin.desc[getLang()] || skin.desc.en;
    if (modalDownload) {
        const t = modalDownload.querySelector('[data-i18n="download"]');
        if (t) t.textContent = i18n[getLang()]?.download || 'Download';
    }
}

function setTrackPosition(offset, animate) {
    const track = document.getElementById('modalTrack');
    if (!track) return;
    track.style.transition = animate ? 'transform 0.25s ease' : 'none';
    track.style.transform = `translateX(calc(-${currentTrackIndex * 100}% + ${offset}px))`;
}

function setMainShot(index) {
    if (!currentSkin || !currentImages.length) return;
    const track = document.getElementById('modalTrack');
    if (!track) return;
    const count = currentImages.length;
    const next = ((index % count) + count) % count;
    if (next === currentThumb) { syncVersionToThumb(next); return; }

    const targetTrack = (currentThumb === count - 1 && next === 0) ? count + 1 : (currentThumb === 0 && next === count - 1) ? 0 : next + 1;
    currentThumb = next;
    updateThumbs(next);
    syncVersionToThumb(next);
    currentTrackIndex = targetTrack;
    track.style.transition = 'transform 0.25s ease';
    track.style.transform = `translateX(-${targetTrack * 100}%)`;
}

const nextImage = () => currentSkin && currentImages.length > 1 && setMainShot((currentThumb + 1) % currentImages.length);
const prevImage = () => currentSkin && currentImages.length > 1 && setMainShot((currentThumb - 1 + currentImages.length) % currentImages.length);

function snapTrack(track, index) {
    track.style.transition = 'none';
    track.style.transform = `translateX(-${index * 100}%)`;
    currentTrackIndex = index;
    void track.offsetWidth;
    track.style.transition = 'transform 0.25s ease';
}

document.addEventListener('transitionend', e => {
    if (!currentSkin) return;
    const track = document.getElementById('modalTrack');
    if (track !== e.target) return;
    const count = currentImages.length;
    if (currentTrackIndex === 0) snapTrack(track, count);
    else if (currentTrackIndex === count + 1) snapTrack(track, 1);
}, { passive: true });

function initMainSwipe() {
    const wrapper = document.querySelector('.modal-main-wrapper');
    if (!wrapper) return;
    let startX = 0, startY = 0, active = false, isTouch = false, moved = false, locked = false;
    const begin = (x, y) => { startX = x; startY = y; active = true; moved = false; locked = false; isDraggingTrack = true; };
    const move = (x, y) => {
        if (!active || locked) return;
        const dx = x - startX, dy = y - startY;
        if (!moved && Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) { locked = true; active = false; isDraggingTrack = false; return; }
        if (Math.abs(dx) > 5) { moved = true; setTrackPosition(dx, false); }
    };
    const end = (x, y) => {
        if (!active) { isDraggingTrack = false; return; }
        active = false; isDraggingTrack = false;
        const dx = x - startX, dy = y - startY, count = currentImages.length;
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) && count > 1) {
            if (dx < 0) { currentTrackIndex++; setTrackPosition(0, true); setTimeout(() => { currentThumb = (currentThumb + 1) % count; updateThumbs(currentThumb); syncVersionToThumb(currentThumb); }, 250); }
            else { currentTrackIndex--; setTrackPosition(0, true); setTimeout(() => { currentThumb = (currentThumb - 1 + count) % count; updateThumbs(currentThumb); syncVersionToThumb(currentThumb); }, 250); }
            moved = true; setTimeout(() => moved = false, 220);
        } else { setTrackPosition(0, true); if (moved) setTimeout(() => moved = false, 220); }
    };
    wrapper.addEventListener('mousedown', e => { if (e.button !== 0) return; isTouch = false; e.preventDefault(); begin(e.clientX, e.clientY); wrapper.style.cursor = 'grabbing'; });
    window.addEventListener('mousemove', e => { if (!isTouch && active) move(e.clientX, e.clientY); });
    window.addEventListener('mouseup', e => { if (!isTouch) { wrapper.style.cursor = ''; end(e.clientX, e.clientY); } });
    wrapper.addEventListener('touchstart', e => { isTouch = true; const t = e.changedTouches[0]; begin(t.clientX, t.clientY); }, { passive: true });
    wrapper.addEventListener('touchmove', e => { if (!active) return; const t = e.changedTouches[0]; if (Math.abs(t.clientX - startX) > Math.abs(t.clientY - startY) && Math.abs(t.clientX - startX) > 8) { e.preventDefault(); move(t.clientX, t.clientY); } }, { passive: false });
    wrapper.addEventListener('touchend', e => end(e.changedTouches[0].clientX, e.changedTouches[0].clientY), { passive: true });
    wrapper.addEventListener('click', e => { if (moved || isDraggingTrack) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
    wrapper.addEventListener('dragstart', e => e.preventDefault());
}

function initThumbsSwipe() {
    const wrapper = document.getElementById('modalThumbsGroupWrapper'), group = document.getElementById('modalThumbsGroup');
    if (!wrapper || !group) return;
    let startX = 0, startScroll = 0, dragging = false, isTouch = false, didMove = false;
    
    const getScroll = () => { const m = group.style.transform.match(/translateX\(-?([\d.]+)px\)/); return m ? parseFloat(m[1]) : 0; };
    const getStep = () => { const items = group.querySelectorAll('.modal-thumb-item'); return items.length ? items[0].getBoundingClientRect().width + 10 : 0; };
    const getMax = () => { const items = group.querySelectorAll('.modal-thumb-item'), step = getStep(); return (step && items.length > 6) ? (items.length - 6) * step : 0; };
    const suppressClick = () => { thumbsSuppressClick = true; if (thumbsSuppressTimer) clearTimeout(thumbsSuppressTimer); thumbsSuppressTimer = setTimeout(() => { thumbsSuppressClick = false; thumbsSuppressTimer = null; }, 280); };
    
    const begin = x => { startX = x; startScroll = getScroll(); dragging = true; didMove = false; };
    const move = x => {
        if (!dragging) return;
        const max = getMax(); if (max <= 0) return;
        const diff = startX - x; if (!didMove && Math.abs(diff) > 4) didMove = true;
        group.style.transition = 'none';
        group.style.transform = `translateX(-${Math.round(Math.max(0, Math.min(startScroll + diff, max)))}px)`;
    };
    const finish = () => {
        if (!dragging) return;
        dragging = false; const step = getStep(), max = getMax();
        if (didMove) suppressClick();
        if (max <= 0) { group.style.transition = ''; group.style.transform = 'translateX(0)'; return; }
        let target = Math.round(getScroll() / step) * step;
        group.style.transition = ''; group.style.transform = `translateX(-${Math.max(0, Math.min(target, max))}px)`;
    };

    wrapper.addEventListener('mousedown', e => { if (e.button !== 0 || getMax() <= 0) return; isTouch = false; e.preventDefault(); begin(e.clientX); });
    window.addEventListener('mousemove', e => { if (!isTouch && dragging) move(e.clientX); });
    window.addEventListener('mouseup', e => { if (!isTouch && dragging) finish(); });
    wrapper.addEventListener('touchstart', e => { if (getMax() > 0) { isTouch = true; begin(e.changedTouches[0].clientX); } }, { passive: true });
    wrapper.addEventListener('touchmove', e => { if (dragging) move(e.changedTouches[0].clientX); }, { passive: true });
    wrapper.addEventListener('touchend', e => { if (isTouch) finish(); }, { passive: true });
}

function initMcCopy() {
    const btn = document.getElementById('mcCopyBtn'), input = document.getElementById('mcIp');
    if (!btn || !input) return;
    const tr = k => i18n[getLang()]?.[k] || '';
    const fallback = (v, cb) => { input.focus(); input.select(); try { document.execCommand('copy'); } catch {} cb(); };
    btn.addEventListener('click', () => {
        const val = input.value.trim();
        const done = () => { btn.textContent = tr('mcCopied'); setTimeout(() => btn.textContent = tr('mcCopy'), 1500); };
        if (navigator.clipboard?.writeText) navigator.clipboard.writeText(val).then(done, () => fallback(val, done));
        else fallback(val, done);
    });
    document.addEventListener('click', e => { if (e.target.closest('#langBtn')) setTimeout(() => btn.textContent = tr('mcCopy'), 50); });
}

let notifOpen = false;
const getLastReadNotifId = () => parseInt(safeGet('mimerik-notif-last-read')) || 0;
const setLastReadNotifId = id => safeSet('mimerik-notif-last-read', String(id));

function hasNewNotifications() {
    if (!notifications.length) return false;
    return notifications[notifications.length - 1].id > getLastReadNotifId();
}

function renderNotifications() {
    const list = document.getElementById('notifList');
    if (!list) return;
    const frag = document.createDocumentFragment();
    list.innerHTML = '';
    const lang = getLang();
    notifications.forEach(n => {
        const item = document.createElement('div');
        item.className = 'notif-item';
        item.innerHTML = `
            <div class="notif-date">${n.date}</div>
            <div class="notif-title">${n.title[lang] || n.title.en}</div>
            <div class="notif-desc">${n.desc[lang] || n.desc.en}</div>`;
        frag.appendChild(item);
    });
    list.appendChild(frag);
}

function toggleNotifications() {
    const panel = document.getElementById('notifPanel'), dot = document.getElementById('notifDot');
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
    if (!panel?.classList.contains('open')) return;
    notifOpen = false; panel.classList.remove('open'); panel.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function checkNotifications() {
    const dot = document.getElementById('notifDot');
    if (!dot) return;
    dot.classList.toggle('visible', hasNewNotifications() && !notifOpen);
}

let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const navbar = document.querySelector('.navbar');
            if (navbar) navbar.style.boxShadow = window.scrollY > 20 ? '0 8px 24px rgba(0,0,0,0.2)' : '0 4px 20px rgba(0,0,0,0.05)';
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const modal = document.getElementById('skinModal');
        if (currentSkin && modal?.classList.contains('open')) updateThumbs(currentThumb);
    }, 100);
}, { passive: true });

function init() {
    setTheme(getTheme()); setLang(getLang());
    renderNotifications(); checkNotifications();
    initMcCopy(); initFilter(); initCardTilt(); initMainSwipe(); initThumbsSwipe();

    document.getElementById('themeBtn')?.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'));
    document.getElementById('langBtn')?.addEventListener('click', () => setLang(getLang() === 'en' ? 'ru' : 'en'));
    document.getElementById('notifBtn')?.addEventListener('click', toggleNotifications);
    document.getElementById('notifPanelClose')?.addEventListener('click', closeNotifications);
    document.getElementById('modalBackdrop')?.addEventListener('click', closeModal);
    document.getElementById('modalClose')?.addEventListener('click', closeModal);

    document.querySelector('.modal-panel')?.addEventListener('click', e => {
        if (e.target.closest('#modalNavPrev')) { e.stopPropagation(); e.preventDefault(); prevImage(); }
        else if (e.target.closest('#modalNavNext')) { e.stopPropagation(); e.preventDefault(); nextImage(); }
    });

    document.getElementById('modalThumbsGroup')?.addEventListener('click', e => {
        if (thumbsSuppressClick) { e.stopPropagation(); e.preventDefault(); return; }
        const item = e.target.closest('.modal-thumb-item');
        if (item) { const idx = parseInt(item.dataset.index); if (!isNaN(idx)) setMainShot(idx); }
    }, true);

    document.addEventListener('keydown', e => {
        const modal = document.getElementById('skinModal');
        if (modal?.classList.contains('open')) {
            if (e.key === 'Escape') closeModal();
            else if (e.key === 'ArrowLeft') { e.preventDefault(); prevImage(); }
            else if (e.key === 'ArrowRight') { e.preventDefault(); nextImage(); }
            return;
        }
        if (e.key === 'Escape' && notifOpen) closeNotifications();
    });

    document.addEventListener('click', e => {
        if (!document.getElementById('customSelectWrapper')?.contains(e.target)) document.getElementById('customSelectWrapper')?.classList.remove('open');
        if (!document.getElementById('filterDropdownWrapper')?.contains(e.target)) document.getElementById('filterDropdownWrapper')?.classList.remove('open');
        if (notifOpen && !document.getElementById('notifPanel')?.contains(e.target) && !document.getElementById('notifBtn')?.contains(e.target)) closeNotifications();
    });
}

document.addEventListener('DOMContentLoaded', init);