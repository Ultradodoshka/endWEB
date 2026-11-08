//Special Dish display
$(function(){
    initDailySpecial();
});


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
