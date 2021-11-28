$(function(){
    var count=0;
    $('.js-modal-open').one('click',function(){
        count+=1;
        console.log(count)
        $('.js-modal').fadeIn();
        var img_pass = $(this).children("img").attr('src')
        $(".modal-img").attr("src",img_pass)
        $(this).children("img").animate(
            {"opacity":0},3000, 'swing'
        );
        wait(3).done(function(){
        $('.js-modal').fadeOut();    
        });
        $(this).removeClass('js-modal-open').addClass('clicked')
        if (count==3) {
            wait(3).done(function(){
                $('clicked').removeClass('clicked').addClass('.js-modal2-open')
                $('.hide').fadeIn(3000)

                $('.hide').children('p').fadeIn(4000)
            });
        };
        return false
    });
    $('.hide').on('click',function(){
        $(this).css("z-index",1).animate(
            {"width": "100vw"},3000,"swing"
        );
        var color=$(this).css("background-color")
        console.log(color)
        $(this).children("p").fadeOut(3000)
        $("body").css("background-color",color)
        wait(4).done(function(){
            $(".hide").css("width","0vw")
            $(".img-item").hide()
            $('.img-item').children("a").children("img").css("opacity",1)
            if  ("rgb(0, 0, 0)"==color) {
                $('.after-img').fadeIn(1000)
                return false
            } else {
                $('.trace-img').fadeIn(1000)
                return false
            }
        })
    });
    $("body").on('click','.clicked',function() {
        return false
    })
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
