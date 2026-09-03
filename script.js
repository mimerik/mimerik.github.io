// ========================================
// ЛОКАЛИЗАЦИЯ — все переводы в одном месте
// ========================================
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
        mcSection1Desc: 'My private fully-vanilla server. buy access to get your invite, then copy the ip below and join in',
        mcBuy: 'Buy access',
        mcCopy: 'Copy',
        mcCopied: 'Copied!',
        mcSection2Title: 'Modpack',
        mcSection2Desc: 'The modpack for optimisation and server-compability. download the pack and drop it in your mods folder or import with modrinth app',

        osuTitle: 'Osu! skins',
        osuSubtitle: 'Custom self-maded skins collection',
        osuDesc: 'Custom minimalistic and light skins',

        soonTitle: 'Coming soon...',
        soonDesc: '...',

        // Skin titles and descriptions
        cursors_Title: 'Cursors',
        cursors_Desc: 'My cursors',

        silenthill_Title: 'silenthill',
        silenthill_Desc: 'Silenthill themed skin',

        silenthill_small_Title: 'silenthill small',
        silenthill_small_Desc: 'Smaller circlesize for easier reading',

        ryan_Title: 'ryan',
        ryan_Desc: 'Ryuk skin remake',

        vv_idke_Title: 'vv_idke',
        vv_idke_Desc: 'vv_idke_trail skin remake',

        kuruench_Title: 'kuruench',
        kuruench_Desc: 'Kururuchi x enchant collab',

        zavoevatel_Title: 'zavoevatel',
        zavoevatel_Desc: 'Zavoevatel skin',
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
        mcSection1Desc: 'Мой приватный и полностью ванильный сервер. купи доступ, чтобы получить инвайт и присоединяйся',
        mcBuy: 'Купить доступ',
        mcCopy: 'Скопировать',
        mcCopied: 'Скопировано!',
        mcSection2Title: 'Сборка модов',
        mcSection2Desc: 'Модпак для оптимизации и совместимости с сервером. скачай пак и помести его в папку mods или импортируй с помощью лаунчера modprinth',

        osuTitle: 'Osu! скины',
        osuSubtitle: 'Коллекция моих кастомных скинов',
        osuDesc: 'Кастомные скины для osu - минималистичные и лёгкие',

        soonTitle: 'Скоро',
        soonDesc: '...',
        
        // Skin titles and descriptions
        cursors_Title: 'Курсоры',
        cursors_Desc: 'Мои курсоры',

        silenthill_Title: 'silenthill',
        silenthill_Desc: 'Скин по тематике silent hill',

        silenthill_small_Title: 'silenthill small',
        silenthill_small_Desc: 'Уменьшенные круги для лёгкого чтения',

        ryan_Title: 'ryan',
        ryan_Desc: 'Ремейк скина ryuk',

        vv_idke_Title: 'vv_idke',
        vv_idke_Desc: 'Ремейк скина vv_idke_trail',

        kuruench_Title: 'kuruench',
        kuruench_Desc: 'Коллаба легенд kururuchi x enchant',

        zavoevatel_Title: 'zavoevatel',
        zavoevatel_Desc: 'Скин zavoevatel',
    }
};

// ========================================
// ДАННЫЕ СКИНОВ — все скины в одном месте
// ========================================
const skinData = {
    Cursors: {
        title: 'Cursors',
        versions: [
            {
                version: 'green',
                download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/green/green.zip'
            },
            {
                version: 'hexagon',
                download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/hexagon/hexagon.zip'
            },
            {
                version: 'hexagon cyan',
                download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/hexagon_cyan/hexagon_cyan.zip'
            },
            {
                version: 'hexagon green',
                download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/hexagon_green/hexagon_green.zip'
            },
            {
                version: 'hexagon white',
                download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/hexagon_white/hexagon_white.zip'
            },
            {
                version: 'hexagon yellow',
                download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/hexagon_yellow/hexagon_yellow.zip'
            },
            {
                version: 'rafis',
                download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/rafis/rafis.zip'
            },
            {
                version: 'rektygon',
                download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/rektygon/rektygon.zip'
            },
            {
                version: 'ryan',
                download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/ryan/ryan.zip'
            },
            {
                version: 'vv_idke',
                download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/vv_idke/vv_idke.zip'
            },
            {
                version: 'white dot',
                download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/cursors/white_dot/white_dot.zip'
            }
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
        versions: [
            { version: 'v1.0', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/ryan/-%20mrk%20-%20ryan%201.0.osk' }
        ],
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
        versions: [
            { version: 'v1.0', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/vv_idke/-%20mrk%20-%20vv_idke%201.0.osk' }
        ],
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
        versions: [
            { version: 'v1.0', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/kuruench/-%20mrk%20-%20kuruench%201.0.osk' }
        ],
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
        versions: [
            { version: 'v1.0', download: 'https://github.com/mimerik/mimerik.github.io/raw/refs/heads/main/osu/skins/zavoevatel/-%20mrk%20-%20zavoevatel%201.0.osk' }
        ],
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
        versions: [
            { version: 'v0.0' }
        ],
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

// ========================================
// УВЕДОМЛЕНИЯ
// ========================================
const notifications = [
    {
        id: 14,
        date: '03-09-2026',
        title: { en: 'Redesign and Fixes!', ru: 'Редизайн и фиксы!' },
        desc: { en: 'New site theme again 🤡 and bug fixes!', ru: 'Новая тема на сайте снова 🤡 и фиксы багов!' }
    },
    {
        id: 13,
        date: '02-09-2026',
        title: { en: 'Added new skin version!', ru: 'Добавлена новая версия скина!' },
        desc: { en: 'Added new skin version: silenthill small 1.0', ru: 'Добавлена новая версия скина: silenthill small 1.0' }
    },
    {
        id: 12,
        date: '02-09-2026',
        title: { en: 'Added new skin version!', ru: 'Добавлена новая версия скина!' },
        desc: { en: 'Added new skin version: silenthill 1.0', ru: 'Добавлена новая версия скина: silenthill 1.0' }
    },
    {
        id: 11,
        date: '02-09-2026',
        title: { en: 'Tags and sorting!', ru: 'Теги и сортировка!' },
        desc: { en: 'Now you can sort skins by categories!', ru: 'Теперь вы можете сортировать скины по категориям!' }
    },
    {
        id: 10,
        date: '01-09-2026',
        title: { en: 'Cursors added!', ru: 'Добавлены мои курсоры!' },
        desc: { en: 'Added my cursor collection!', ru: 'Была добавлена моя коллекция курсоров!' }
    },
    {
        id: 9,
        date: '01-09-2026',
        title: { en: 'New theme there!', ru: 'Новая тема на сайте!' },
        desc: { en: 'The interface has been refined, and the site color palette has been changed!', ru: 'Был доработан интерфейс и изменена цветовая палитра сайта!' }
    },
    {
        id: 8,
        date: '01-09-2026',
        title: { en: 'Versions!', ru: 'Версии!' },
        desc: { en: 'Added the ability to select a skin version!', ru: 'Добавлена возможность выбора версии скина!' }
    },
    {
        id: 7,
        date: '31-08-2026',
        title: { en: 'Added new skin!', ru: 'Добавлен новый скин!' },
        desc: { en: 'Added new skin: zavoevatel 1.0', ru: 'Добавлен новый скин: zavoevatel 1.0' }
    },
    {
        id: 6,
        date: '31-08-2026',
        title: { en: 'A lot of updates', ru: 'Очень много нового' },
        desc: { en: '- Notification button to keep you up to date with new features! \n- Bug fixes \n- Site optimization \n- Site redesign \n- Revamped screenshot scrolling \n- Added even more bugs so theres something to fix!', ru: '- Кнопка уведомлений чтобы вы были в курсе нововведений! \n- Исправление старых багов \n- Оптимизация сайта \n- Редизайн сайта \n- Переработанная прокрутка скриншотов \n- Добавил ещё больше багов чтобы было что фиксить!' }
    },
    {
        id: 5,
        date: '29-08-2026',
        title: { en: 'Added new skin!', ru: 'Добавлен новый скин!' },
        desc: { en: 'Added new skin: kuruench 1.0', ru: 'Добавлен новый скин: kuruench 1.0' }
    },
    {
        id: 4,
        date: '27-08-2026',
        title: { en: 'Added new skin!', ru: 'Добавлен новый скин!' },
        desc: { en: 'Added new skin: vv_idke 1.0', ru: 'Добавлен новый скин: vv_idke 1.0' }
    },
    {
        id: 3,
        date: '27-08-2026',
        title: { en: 'Added new skin!', ru: 'Добавлен новый скин!' },
        desc: { en: 'Added new skin: ryan 1.0', ru: 'Добавлен новый скин: ryan 1.0' }
    },
    {
        id: 2,
        date: '27-08-2026',
        title: { en: 'Added new skin!', ru: 'Добавлен новый скин!' },
        desc: { en: 'Added new skin: silenthill small 1.1', ru: 'Добавлен новый скин: silenthill small 1.1' }
    },
    {
        id: 1,
        date: '27-08-2026',
        title: { en: 'Added new skin!', ru: 'Добавлен новый скин!' },
        desc: { en: 'Added new skin: silenthill 1.1', ru: 'Добавлен новый скин: silenthill 1.1' }
    }
];

// ========================================
// КАТЕГОРИИ СКИНОВ
// ========================================
const skinCategories = {
    all: ['incoming'],
    cursors: ['Cursors'],
    personal: ['silenthill', 'silenthill_small'],
    remakes: ['ryan', 'vv_idke'],
    streamers: ['kuruench', 'zavoevatel']
};

// ========================================
// ОТРИСОВКА КАРТОЧЕК СКИНОВ
// ========================================

// Полностью перестраивает сетку карточек из skinData на текущем языке.
// Вызывается при загрузке страницы и при каждой смене языка (setLang).
function renderSkinCards() {
    const grid = document.getElementById('skinsGrid');
    if (!grid) return;

    grid.innerHTML = '';

    Object.keys(skinData).forEach(skinKey => {
        const skin = skinData[skinKey];
        const lang = getLang();
        const titleKey = skinKey + '_Title';
        const descKey = skinKey + '_Desc';
        const title = i18n[lang]?.[titleKey] || skin.title;
        const desc = i18n[lang]?.[descKey] || skin.desc[lang] || skin.desc.en || '';
        const version = skin.versions[0]?.version || 'v1.0';
        const previewImg = skin.images[0] || 'https://placehold.co/800x450/000000/6c6c6c?text=No+preview';

        const card = document.createElement('div');
        card.className = 'skin-card';
        card.setAttribute('data-skin', skinKey);
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Open ${title} details`);

        card.innerHTML = `
            <div class="skin-glass">
                <div class="skin-preview">
                    <img 
                        src="${previewImg}" 
                        alt="${title} preview" 
                        class="skin-preview-img" 
                        width="800" 
                        height="450" 
                        loading="lazy"
                    >
                    <div class="skin-overlay"></div>
                    <div class="skin-badge">${version}</div>
                </div>
                <div class="skin-info">
                    <h3 data-i18n="${titleKey}">${title}</h3>
                    <div class="skin-divider"></div>
                    <p data-i18n="${descKey}">${desc}</p>
                </div>
            </div>
        `;

        card.addEventListener('click', function(e) {
            const key = this.getAttribute('data-skin');
            if (key) openModal(key);
        });

        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const key = this.getAttribute('data-skin');
                if (key) openModal(key);
            }
        });

        grid.appendChild(card);
    });
}

// ========================================
// ФИЛЬТРАЦИЯ СКИНОВ
// ========================================
let currentFilter = 'all';

// Обновляет заголовок и активный чип фильтра, показывает/скрывает карточки по категории
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
        const skinKey = card.getAttribute('data-skin');
        if (!skinKey) return;
        
        let show = false;
        if (filter === 'all') {
            show = true;
        } else {
            const categories = skinCategories[filter] || [];
            show = categories.includes(skinKey);
        }
        
        card.style.display = show ? '' : 'none';
    });
    
    currentFilter = filter;
}

// Навешивает обработчики на выпадающий список фильтра: открытие/закрытие,
// выбор категории, закрытие по клику вне области
function initFilter() {
    const trigger = document.getElementById('filterTrigger');
    const dropdown = document.getElementById('filterDropdown');
    const options = dropdown?.querySelectorAll('.filter-option');
    
    if (!trigger || !dropdown || !options) return;
    
    trigger.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('open');
        dropdown.classList.toggle('open');
    });
    
    options.forEach(option => {
        option.addEventListener('click', function() {
            const filter = this.dataset.filter;
            if (!filter) return;
            
            options.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            trigger.classList.remove('open');
            dropdown.classList.remove('open');
            
            filterSkins(filter);
        });
    });
    
    document.addEventListener('click', function(e) {
        const wrapper = document.querySelector('.filter-wrapper');
        if (wrapper && !wrapper.contains(e.target)) {
            trigger.classList.remove('open');
            dropdown.classList.remove('open');
        }
    });
}

// ========================================
// ЯЗЫК
// ========================================

// Текущий язык хранится в localStorage, по умолчанию — английский
function getLang() {
    return localStorage.getItem('mimerik-lang') || 'en';
}

// Применяет переводы i18n[l] ко всем элементам с data-i18n,
// обновляет флаг, атрибут lang и перерисовывает языкозависимые блоки
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
    });

    const flagImg = document.getElementById('flagImg');
    if (flagImg && t.flag) flagImg.src = t.flag;

    document.documentElement.lang = l === 'ru' ? 'ru' : 'en';
    localStorage.setItem('mimerik-lang', l);

    updateModalLang();
    renderNotifications();
    renderSkinCards();
    filterSkins(currentFilter);
}

// ========================================
// ТЕМА
// ========================================

// Тема берётся из localStorage, иначе — из системных настроек (prefers-color-scheme)
function getTheme() {
    const saved = localStorage.getItem('mimerik-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

// Переключает [data-theme="light"] на <html> и сохраняет выбор
function setTheme(t) {
    const html = document.documentElement;
    if (t === 'light') {
        html.setAttribute('data-theme', 'light');
    } else {
        html.removeAttribute('data-theme');
    }
    localStorage.setItem('mimerik-theme', t);
}

// ========================================
// МОДАЛЬНОЕ ОКНО — ПРОКРУТКА ПО ОДНОЙ КАРТИНКЕ
// ========================================
// Состояние открытой модалки: какой скин показан, какой кадр активен,
// текущая позиция бесконечной ленты (currentTrackIndex), идёт ли анимация
let currentSkin = null;
let currentThumb = 0;
let currentTrackIndex = 1;
let currentImages = [];
let currentLabels = [];
let isTransitioning = false;

// Строит ряд миниатюр под основным кадром для выбранного скина
function createThumbItems(images, labels) {
    const container = document.getElementById('modalThumbsGroup');
    if (!container) return;

    container.innerHTML = '';
    currentImages = images;
    currentLabels = labels;

    // Создаем все миниатюры в один ряд
    images.forEach((src, index) => {
        const item = document.createElement('div');
        item.className = 'modal-thumb-item' + (index === 0 ? ' active' : '');
        item.dataset.index = index;

        const thumb = document.createElement('div');
        thumb.className = 'modal-thumb';

        const img = document.createElement('img');
        img.className = 'modal-thumb-img';
        img.src = src;
        img.alt = labels[index] || 'Screenshot ' + (index + 1);
        img.loading = 'lazy';

        thumb.appendChild(img);

        const label = document.createElement('div');
        label.className = 'modal-thumb-label';
        label.textContent = labels[index] || 'Screenshot ' + (index + 1);

        item.appendChild(thumb);
        item.appendChild(label);

        item.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            setMainShot(index);
        });

        container.appendChild(item);
    });
}

function updateThumbs(index) {
    const items = document.querySelectorAll('.modal-thumb-item');
    const container = document.getElementById('modalThumbsGroup');
    const totalItems = items.length;

    if (totalItems === 0 || !container) return;

    // Обновляем активный класс
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });

    // Если элементов 6 или меньше - не двигаем
    if (totalItems <= 6) {
        container.style.transform = 'translateX(0)';
        return;
    }

    // Получаем ширину одного элемента
    const wrapper = document.getElementById('modalThumbsGroupWrapper');
    const containerWidth = wrapper ? wrapper.clientWidth : 696;
    const itemWidth = containerWidth / 6;
    
    // Максимальный сдвиг - чтобы последний элемент был на 6-й позиции
    const maxScroll = (totalItems - 6) * itemWidth;
    
    let targetScroll = 0;
    
    // Если дошли до конца - показываем последние 6 элементов
    if (index >= totalItems - 3) {
        targetScroll = maxScroll;
    }
    // Если в начале - показываем первые 6 элементов
    else if (index <= 2) {
        targetScroll = 0;
    }
    // Иначе - активный элемент на 3-й позиции (по центру)
    else {
        targetScroll = (index - 2) * itemWidth;
    }
    
    // Округляем
    targetScroll = Math.round(targetScroll);
    container.style.transform = 'translateX(-' + targetScroll + 'px)';
}

function buildTrack(skin, track) {
    if (!track || !currentImages.length) return;

    track.innerHTML = '';

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

    const firstClone = document.createElement('img');
    firstClone.className = 'modal-main-img';
    firstClone.alt = '';
    firstClone.draggable = false;
    firstClone.setAttribute('aria-hidden', 'true');
    firstClone.src = currentImages[0];
    track.appendChild(firstClone);

    currentTrackIndex = 1;
    track.style.transition = 'none';
    track.style.transform = 'translateX(-100%)';
    void track.offsetWidth;
    track.style.transition = 'transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)';
}

function handleCustomSelectOutsideClick(e) {
    const wrapper = document.querySelector('.custom-select-wrapper');
    const trigger = document.getElementById('customSelectTrigger');
    const dropdown = document.getElementById('customSelectDropdown');
    if (wrapper && !wrapper.contains(e.target) && trigger && dropdown) {
        trigger.classList.remove('open');
        dropdown.classList.remove('open');
    }
}

function openModal(skinKey) {
    const skin = skinData[skinKey];
    if (!skin) return;

    currentSkin = skinKey;
    currentThumb = 0;
    currentTrackIndex = 1;
    isTransitioning = false;
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
        
        const customOption = document.createElement('div');
        customOption.className = 'custom-select-option' + (index === 0 ? ' active' : '');
        customOption.dataset.index = index;
        customOption.dataset.value = v.version;

        const textSpan = document.createElement('span');
        textSpan.textContent = v.version;
        customOption.appendChild(textSpan);

        customOption.addEventListener('click', function() {
            const selectedIndex = parseInt(this.dataset.index);
            const selectedVersion = skin.versions[selectedIndex];
            if (selectedVersion) {
                customSelectValue.textContent = selectedVersion.version;
                modalDownload.href = selectedVersion.download;
                modalVersionSelect.value = selectedIndex;
                
                if (modalVersion) {
                    modalVersion.textContent = selectedVersion.version;
                }
                
                document.querySelectorAll('.custom-select-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                this.classList.add('active');

                customSelectTrigger.classList.remove('open');
                customSelectDropdown.classList.remove('open');
            }
        });

        customSelectDropdown.appendChild(customOption);
    });
    
    modalDownload.href = skin.versions[0]?.download || '#';
    customSelectValue.textContent = skin.versions[0]?.version || 'v1.0';
    
    customSelectDropdown.style.bottom = 'calc(100% + 6px)';
    customSelectDropdown.style.top = 'auto';
    customSelectDropdown.style.transformOrigin = 'bottom center';
    
    customSelectTrigger.onclick = function(e) {
        e.stopPropagation();
        this.classList.toggle('open');
        customSelectDropdown.classList.toggle('open');
    };

    document.removeEventListener('click', handleCustomSelectOutsideClick);
    document.addEventListener('click', handleCustomSelectOutsideClick);

    buildTrack(skin, modalTrack);
    createThumbItems(currentImages, currentLabels);

    // Сбрасываем прокрутку при открытии
    const container = document.getElementById('modalThumbsGroup');
    const thumbsWrapper = document.getElementById('modalThumbsGroupWrapper');
    if (container) {
        container.style.transform = 'translateX(0)';
    }
    if (thumbsWrapper) {
        thumbsWrapper.scrollLeft = 0;
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('skinModal');
    const thumbsWrapper = document.getElementById('modalThumbsGroupWrapper');
    const container = document.getElementById('modalThumbsGroup');

    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentSkin = null;

    // Сбрасываем прокрутку при закрытии
    if (container) {
        container.style.transform = 'translateX(0)';
    }
    if (thumbsWrapper) {
        thumbsWrapper.scrollLeft = 0;
    }
    
    // Сбрасываем индекс на 0
    currentThumb = 0;
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
    if (!currentSkin || isTransitioning) return;
    const count = currentImages.length;
    if (!count) return;
    const track = document.getElementById('modalTrack');
    if (!track) return;

    const next = ((index % count) + count) % count;
    if (next === currentThumb) return;

    let targetTrack;
    if (currentThumb === count - 1 && next === 0) {
        targetTrack = count + 1;
    } else if (currentThumb === 0 && next === count - 1) {
        targetTrack = 0;
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
    if (!currentSkin || !currentImages.length || isTransitioning) return;
    const count = currentImages.length;
    if (count <= 1) return;
    const next = (currentThumb + 1) % count;
    setMainShot(next);
}

function prevImage() {
    if (!currentSkin || !currentImages.length || isTransitioning) return;
    const count = currentImages.length;
    if (count <= 1) return;
    const prev = (currentThumb - 1 + count) % count;
    setMainShot(prev);
}
function snapTrack(track, index) {
    track.style.transition = 'none';
    track.style.transform = 'translateX(-' + (index * 100) + '%)';
    currentTrackIndex = index;
    void track.offsetWidth;
    track.style.transition = 'transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)';
}

document.addEventListener('transitionend', function(e) {
    if (!currentSkin) return;
    const track = document.getElementById('modalTrack');
    if (!track || e.target !== track) return;
    const count = currentImages.length;
    if (!count) return;

    isTransitioning = false;
    if (currentTrackIndex === 0) {
        snapTrack(track, count);
    } else if (currentTrackIndex === count + 1) {
        snapTrack(track, 1);
    }
});

// ========================================
// SWIPE SUPPORT
// ========================================
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

// ========================================
// MC SERVER: COPY IP
// ========================================
function initMcCopy() {
    const btn = document.getElementById('mcCopyBtn');
    const input = document.getElementById('mcIp');
    if (!btn || !input) return;

    function tr(key) {
        const l = getLang();
        return (i18n[l] && i18n[l][key]) || '';
    }

    function restore() {
        btn.textContent = tr('mcCopy');
        btn.classList.remove('copied');
    }

    function fallback(value, done) {
        input.focus();
        input.select();
        try { document.execCommand('copy'); } catch (e) {}
        done();
    }

    btn.addEventListener('click', function() {
        const value = (input.value || '').trim();
        const done = function() {
            btn.textContent = tr('mcCopied');
            btn.classList.add('copied');
            setTimeout(restore, 1500);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(value).then(done, function() { fallback(value, done); });
        } else {
            fallback(value, done);
        }
    });

    document.addEventListener('click', function(e) {
        if (e.target.closest('#langBtn')) setTimeout(restore, 50);
    });
}

// ========================================
// УВЕДОМЛЕНИЯ
// ========================================
let notifOpen = false;
let notifCheckTimeout = null;

function getLastReadNotifId() {
    const saved = localStorage.getItem('mimerik-notif-last-read');
    return saved ? parseInt(saved) : 0;
}

function setLastReadNotifId(id) {
    localStorage.setItem('mimerik-notif-last-read', String(id));
}

function hasNewNotifications() {
    const lastRead = getLastReadNotifId();
    if (notifications.length === 0) return false;
    const latestId = notifications[notifications.length - 1].id;
    return latestId > lastRead;
}

function renderNotifications() {
    const list = document.getElementById('notifList');
    if (!list) return;

    const lang = getLang();
    list.innerHTML = '';

    notifications.forEach(notif => {
        const item = document.createElement('div');
        item.className = 'notif-item';

        const date = document.createElement('div');
        date.className = 'notif-date';
        date.textContent = notif.date;

        const title = document.createElement('div');
        title.className = 'notif-title';
        title.textContent = notif.title[lang] || notif.title.en;

        const desc = document.createElement('div');
        desc.className = 'notif-desc';
        desc.textContent = notif.desc[lang] || notif.desc.en;

        item.appendChild(date);
        item.appendChild(title);
        item.appendChild(desc);
        list.appendChild(item);
    });
}

function toggleNotifications() {
    const panel = document.getElementById('notifPanel');
    const dot = document.getElementById('notifDot');

    if (!panel) return;

    notifOpen = !notifOpen;
    panel.classList.toggle('open', notifOpen);
    panel.setAttribute('aria-hidden', String(!notifOpen));

    if (notifOpen) {
        if (notifications.length > 0) {
            setLastReadNotifId(notifications[notifications.length - 1].id);
        }
        if (dot) {
            dot.classList.remove('visible');
            dot.classList.add('hidden');
        }
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

function showNotificationDot() {
    const dot = document.getElementById('notifDot');
    if (!dot) return;
    dot.classList.remove('hidden');
    dot.classList.add('visible');
}

function hideNotificationDot() {
    const dot = document.getElementById('notifDot');
    if (!dot) return;
    dot.classList.remove('visible');
    dot.classList.add('hidden');
}

function checkNotifications() {
    const dot = document.getElementById('notifDot');
    if (!dot) return;

    if (hasNewNotifications() && !notifOpen) {
        dot.classList.remove('hidden');
        dot.classList.add('visible');
    } else {
        dot.classList.remove('visible');
        dot.classList.add('hidden');
    }
}

function delayedCheckNotifications() {
    hideNotificationDot();

    if (notifCheckTimeout) {
        clearTimeout(notifCheckTimeout);
        notifCheckTimeout = null;
    }

    notifCheckTimeout = setTimeout(function() {
        checkNotifications();
        notifCheckTimeout = null;
    }, 2000);
}

function loadNotifications() {
    const saved = localStorage.getItem('mimerik-notifications');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
                parsed.forEach(notif => {
                    if (!notifications.find(n => n.id === notif.id)) {
                        notifications.push(notif);
                    }
                });
            }
        } catch (e) {}
    }
}

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const html = document.documentElement;
    const themeBtn = document.getElementById('themeBtn');
    const langBtn = document.getElementById('langBtn');

    loadNotifications();

    setTheme(getTheme());

    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            setTheme(html.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
        });
    }

    const currentLang = getLang();
    setLang(currentLang);

    if (langBtn) {
        langBtn.addEventListener('click', function() {
            setLang(getLang() === 'en' ? 'ru' : 'en');
        });
    }

    renderSkinCards();

    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalClose = document.getElementById('modalClose');

    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    if (modalClose) modalClose.addEventListener('click', closeModal);

    const modalPanel = document.querySelector('.modal-panel');
    if (modalPanel) {
        modalPanel.addEventListener('click', function(e) {
            const prevBtn = e.target.closest('#modalNavPrev');
            const nextBtn = e.target.closest('#modalNavNext');
            
            if (prevBtn) {
                e.stopPropagation();
                e.preventDefault();
                prevImage();
            } else if (nextBtn) {
                e.stopPropagation();
                e.preventDefault();
                nextImage();
            }
        });
    }

    const modalMainWrapper = document.querySelector('.modal-main-wrapper');
    if (modalMainWrapper) {
        modalMainWrapper.addEventListener('touchstart', handleTouchStart, { passive: true });
        modalMainWrapper.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

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

    const modalThumbsGroup = document.getElementById('modalThumbsGroup');
    if (modalThumbsGroup) {
        modalThumbsGroup.addEventListener('click', function(e) {
            const item = e.target.closest('.modal-thumb-item');
            if (!item) return;
            const index = parseInt(item.dataset.index);
            if (!isNaN(index)) setMainShot(index);
        });
    }

    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            if (currentSkin && document.getElementById('skinModal').classList.contains('open')) {
                updateThumbs(currentThumb);
            }
        }, 200);
    });

    const notifBtn = document.getElementById('notifBtn');
    const notifPanelClose = document.getElementById('notifPanelClose');
    const notifPanel = document.getElementById('notifPanel');

    if (notifBtn) {
        notifBtn.addEventListener('click', toggleNotifications);
    }

    if (notifPanelClose) {
        notifPanelClose.addEventListener('click', closeNotifications);
    }

    document.addEventListener('click', function(e) {
        if (!notifOpen) return;
        const panel = document.getElementById('notifPanel');
        const btn = document.getElementById('notifBtn');
        if (!panel || !btn) return;
        if (!panel.contains(e.target) && !btn.contains(e.target)) {
            closeNotifications();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && notifOpen) {
            closeNotifications();
        }
    });

    renderNotifications();
    hideNotificationDot();
    delayedCheckNotifications();

    initMcCopy();
    initFilter();
    filterSkins('all');

    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const sentinel = document.createElement('div');
        sentinel.style.cssText = 'position:absolute;top:0;height:1px;width:100%;pointer-events:none;';
        document.body.prepend(sentinel);

        const observer = new IntersectionObserver(
            ([entry]) => {
                navbar.style.backdropFilter = !entry.isIntersecting ?
                    'blur(44px) saturate(160%)' :
                    'blur(28px) saturate(160%)';
            }, { threshold: [0, 1], rootMargin: '-10px 0px 0px 0px' }
        );
        observer.observe(sentinel);
    }
});