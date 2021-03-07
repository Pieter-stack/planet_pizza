$(function(){
    $(".options-showcase").hide();


    $(".icons").on("click",function(){
        if($(this).hasClass("size")){
            $(".options-showcase").hide();
            $(".size-showcase").fadeIn();

        }
    });

    $(".icons").on("click",function(){
        if($(this).hasClass("base")){
            $(".options-showcase").hide();
            $(".base-showcase").fadeIn();

        }
    });

    $(".icons").on("click",function(){
        if($(this).hasClass("cheese")){
            $(".options-showcase").hide();
            $(".cheese-showcase").fadeIn();

        }
    });

    $(".icons").on("click",function(){
        if($(this).hasClass("top1")){
            $(".options-showcase").hide();
            $(".top1-showcase").fadeIn();

        }
    });

    $(".icons").on("click",function(){
        if($(this).hasClass("top2")){
            $(".options-showcase").hide();
            $(".top2-showcase").fadeIn();

        }
    });


    $(".icons").on("click",function(){
        if($(this).hasClass("top3")){
            $(".options-showcase").hide();
            $(".top3-showcase").fadeIn();

        }
    });

    $(".icons").on("click",function(){
        if($(this).hasClass("top4")){
            $(".options-showcase").hide();
            $(".top4-showcase").fadeIn();

        }
    });


});
