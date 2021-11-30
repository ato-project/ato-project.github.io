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

        if (count==12) {
            wait(3).done(function(){
                $('.clicked').attr("id","js-modal2-open").removeClass('clicked')
                $('.hide').fadeIn(2000)
                $('.hide').children('p').fadeIn(4000)
            });
        };
        return false
    });
    $(document).on(
        {
            'mouseenter': function(){
                $(this).children('img').css('filter', 'brightness(30%)')
                color=$('body').css("background-color")
                if ("rgb(0, 0, 0)"==color) {
                    var text=$(this).children('img').attr('text')
                } else {
                    var text=$(this).children('img').attr('text1')
                }
                console.log(text)
                $(this).children('p').text(text)
            },
            'mouseleave': function(){
                $(this).children('img').css('filter', 'brightness(100%)')
                var text=''
                $(this).children('p').text(text) 
            }
        }, "#js-modal2-open"
    );
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

