$(function(){
    $('.js-modal-open').on('click',function(){
        $('.js-modal').fadeIn();
        var img_pass = $(this).children("img").attr('src')
        console.log(img_pass)
        $(".modal-img").attr("src",img_pass)
        $(this).children("img").fadeOut(3000);
        wait(3).done(function(){
        $('.js-modal').fadeOut();    
        });
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
    function wait(sec) {

        var objDef = new $.Deferred;
 
        setTimeout(function () {
            objDef.resolve(sec);
        }, sec*1000);
        return objDef.promise();
    };
});
