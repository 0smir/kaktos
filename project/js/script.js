
$(document).ready(function(){


    $('.btn').click(function(){
        $(this).prop('disabled', true);
    });


    function offProduct(targetField){
        targetField.addClass('to-cart');
        targetField.html('<p>Added to bag</p>');
    }

    var productList = document.getElementsByClassName('product-list');

    productList.onclick = function (event){
        var targetElem = event.target;
        var targetProduct = target.closest('product-tile');
            if(targetElem.is('button')){
                offProduct(targetProduct);
            }
    }

});