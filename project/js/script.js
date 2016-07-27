
$(document).ready(function(){


    $('.btn').on('click', function(event){
        var targetElem = $(this),
            targetProduct = targetElem.closest('.product-tile');
        $(targetElem).prop('disabled', true);
        $(targetProduct).addClass('to-cart').append('<p>Added to bag</p>');
    });


<<<<<<< HEAD

=======
>>>>>>> master
});