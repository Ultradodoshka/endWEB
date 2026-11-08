
$(function(){
    initDailySpecial();
    initThemeSwitcher();
});

//Special Dish display
function initDailySpecial(){
    const $specialImage = $('#special-image');
    const $specialName = $('#special-name');
    const $specialDescription = $('#special-description');
    const $nextButton = $('#next-special');

    if (!$specialImage.length || !$specialName.length || !$specialDescription.length || !$nextButton.length) {
        return;
    }

    const dishes = [
        {
            name: 'Khinkali',
            description: 'Juicy Georgian dumplings filled with seasoned meat and fragrant broth.',
            image: 'images/khinkalimid.jpg',
            alt: 'Khinkali, Georgian dumplings'
        },
        {
            name: 'Adjarian Khachapuri',
            description: 'Warm boat-shaped cheese bread topped with butter and a golden egg yolk.',
            image: 'images/khachapurimid.jpg',
            alt: 'Adjarian khachapuri cheese bread'
        },
        {
            name: 'Mtsvadi',
            description: 'Juicy grilled pork skewers served with traditional tkemali plum sauce.',
            image: 'images/mtsvadimid.png',
            alt: 'Mtsvadi grilled skewers'
        }
    ];

    let currentDish = 0;

    $nextButton.on('click', function () {
        currentDish = (currentDish + 1) % dishes.length;
        const dish = dishes[currentDish];

        $specialImage.attr({
            src: dish.image,
            alt: dish.alt,
        });
        $specialName.text(dish.name);
        $specialDescription.text(dish.description);
    });
}

//Theme Switcher
function initThemeSwitcher(){
    const $themeButton = $('#theme-toggle');
    let savedTheme = 'light';

    try {
        savedTheme = localStorage.getItem('supra-theme') || 'light';
    } catch (error) {
        savedTheme = 'light';
    }

    applyTheme(savedTheme === 'dark' ? 'dark' : 'light');
    $themeButton.on('click', function () {
        const nextTheme = $('body').attr('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);

        try {
            localStorage.setItem('supra-theme', nextTheme);
        } catch (error) {
        }
    });
    function applyTheme(theme) {
        $('body').attr('data-theme', theme);

        if ($themeButton.length) {
            const isDark = theme === 'dark';
            $themeButton
                .text(isDark ? 'Light mode' : 'Dark mode')
                .attr('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode')
                .attr('aria-pressed', String(isDark));
        }
    }
}