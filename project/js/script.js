
$(document).ready(function(){


    $('.btn').on('click', function(event){
        var targetElem = $(event.target);
        var targetProduct = targetElem.closest('.product-tile');
        $(targetElem).prop('disabled', true);
        offProduct(targetProduct);
    });


    function offProduct(targetField){
        targetField.addClass('to-cart');
        targetField.append('<p>Added to bag</p>');
    }


});