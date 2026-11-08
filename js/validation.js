$(function(){
    const $bookingForm = $('#booking-form');

    if (!$bookingForm.length) {
        return;
    }

    const $successMessage = $('#booking-success');
    const $fields = $bookingForm.find('[data-validate="true"]');
    const $dateInput = $('#date');

    if ($dateInput.length) {
        $dateInput.attr('min', getTodayAsString());
    }

    $bookingForm.on('submit', function(event){
        event.preventDefault();
        hideSuccessMessage();

        let formIsValid = true;
        let firstInvalidField = null;

        $fields.each(function (){
            if (!validateField(this)){
                formIsValid = false;

                if (!firstInvalidField){
                    firstInvalidField = this;
                }
            }
        });

        if (!formIsValid){
            $(firstInvalidField).trigger('focus');
            return;
        }


        $bookingForm.trigger('reset');
        $fields.each(function(){
            clearError(this);
        });
        $dateInput.attr('min', getTodayAsString());

        $successMessage
            .text('Thank you! Your reservation request has been submitted successfully. We will contact you soon.')
            .removeClass('d-none');
    });

    $bookingForm.on('change', '[data-validate="true"]', function () {
        validateField(this);
        hideSuccessMessage();
    });

    $bookingForm.on('input', '[data-validate="true"]', function () {
        if (hasError(this)) {
            validateField(this);
        }
        hideSuccessMessage();
    });

    $bookingForm.on('keydown', '#guests', function (event) {
        if (['e', 'E', '+', '-', '.', ','].includes(event.key)) {
            event.preventDefault();
        }
    });
});

function validateField(inputElement) {
    const $input = $(inputElement);
    const value = String($input.val() || '').trim();
    let errorMessage = '';

    switch ($input.attr('id')) {
        case 'name':
            if (value.length < 2) {
                errorMessage = 'Please enter a name with at least 2 characters.';
            }
            break;

        case 'email':
            if (!validateEmail(value)) {
                errorMessage = 'Please enter a valid email address (example: name@example.com).';
            }
            break;

        case 'phone':
            if (!validatePhone(value)) {
                errorMessage = 'Please enter a valid phone number with at least 7 digits.';
            }
            break;

        case 'guests':
            if (value === '') {
                errorMessage = 'Please enter the number of guests.';
            } else {
                const guestCount = Number(value);
                if (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 20) {
                    errorMessage = 'The number of guests must be a whole number from 1 to 20.';
                }
            }
            break;

        case 'date':
            if (value === '') {
                errorMessage = 'Please choose a booking date.';
            } else if (value < getTodayAsString()) {
                errorMessage = 'The booking date cannot be in the past.';
            }
            break;

        case 'time':
            if (value === '') {
                errorMessage = 'Please choose a booking time.';
            }
            break;

        case 'occasion':
            if (value === '') {
                errorMessage = 'Please select the occasion for your visit.';
            }
            break;
    }

    if (errorMessage) {
        showError(inputElement, errorMessage);
        return false;
    }

    clearError(inputElement);
    return true;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^\+?[0-9\s()-]+$/;
    const digitCount = phone.replace(/\D/g, '').length;
    return phonePattern.test(phone) && digitCount >= 7 && digitCount <= 15;
}

function showError(inputElement, message) {
    const $input = $(inputElement);
    clearError(inputElement);

    const errorId = $input.attr('id') + '-error';
    const $errorElement = $('<small>', {
        class: 'field-error',
        id: errorId,
        text: message
    });

    $input
        .addClass('is-invalid')
        .attr('aria-invalid', 'true')
        .attr('aria-describedby', errorId)
        .after($errorElement);
}

function clearError(inputElement) {
    const $input = $(inputElement);
    const errorId = $input.attr('id') + '-error';

    $('#' + errorId).remove();
    $input
        .removeClass('is-invalid')
        .removeAttr('aria-invalid')
        .removeAttr('aria-describedby');
}

function hasError(inputElement) {
    return $(inputElement).hasClass('is-invalid');
}

function hideSuccessMessage() {
    $('#booking-success').addClass('d-none').text('');
}

function getTodayAsString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return year + '-' + month + '-' + day;
}
