$(document).ready(function () {
    $('.tab-btn').on('click', function () {
        $(this).addClass('btn-dark').removeClass('btn-outline-dark')
               .siblings().removeClass('btn-dark').addClass('btn-outline-dark');

        let targetId = $(this).attr('data-target');

        $('.tab-content-box').hide();
        $('#' + targetId).fadeIn(300);
    });

    $('#toggle-qvevri-btn').on('click', function () {
        $(this).next('#qvevri-more-text').slideToggle(300);
        if ($(this).text() === 'Read More') {
            $(this).text('Show Less');
        } else {
            $(this).text('Read More');
        }
    });

    $('.gallery-filter-btn').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');

        let category = $(this).attr('data-filter');

        if (category === 'all') {
            $('.gallery-card').fadeIn(300);
        } else {
            $('.gallery-card').hide();
            $('.gallery-card[data-category="' + category + '"]').fadeIn(300);
        }
    });

    $('.gallery-img').on('click', function () {
        let imgSrc = $(this).attr('src');
        let captionText = $(this).closest('.gallery-card').find('.card-title').text();

        $('#lightbox-img').attr('src', imgSrc);
        $('#lightbox-caption').text(captionText);

        $('#lightbox-modal').fadeIn(250);
    });

    $('#close-lightbox, #lightbox-modal').on('click', function (event) {
        if (event.target.id === 'lightbox-modal' || event.target.id === 'close-lightbox') {
            $('#lightbox-modal').fadeOut(250);
        }
    });

    $('.gallery-card').hover(
        function () {
            $(this).find('.card').addClass('shadow-lg border-dark');
        },
        function () {
            $(this).find('.card').removeClass('shadow-lg border-dark');
        }
    );

});