$(function(){
    $(".pizza-choices-block").hide();
    $(".tomato-sauce-img").hide();
    $(".creme-fraiche-sauce-img").hide();
    $(".chedder-cheese-img").hide();
    $(".more-chedder-cheese-img").hide();
    $(".chicken-img").hide();
    $(".bacon-img").hide();
    $(".peperoni-img").hide();
    $(".olives-img").hide();
    $(".onions-img").hide();
    $(".mushrooms-img").hide();
    $(".chicken-img2").hide();
    $(".bacon-img2").hide();
    $(".peperoni-img2").hide();
    $(".olives-img2").hide();
    $(".onions-img2").hide();
    $(".mushrooms-img2").hide();
    $(".chicken-img3").hide();
    $(".bacon-img3").hide();
    $(".peperoni-img3").hide();
    $(".olives-img3").hide();
    $(".onions-img3").hide();
    $(".mushrooms-img3").hide();
    $(".chicken-img4").hide();
    $(".bacon-img4").hide();
    $(".peperoni-img4").hide();
    $(".olives-img4").hide();
    $(".onions-img4").hide();
    $(".mushrooms-img4").hide();
    $(".shopping-cart").hide();


    $(".icons").on("click",function(){
        if($(this).hasClass("icons")){
            $(".icons").removeClass("icon-active");
                $(this).toggleClass("icon-active");


        }
    });


    $(".icons").on("click",function(){
        if($(this).hasClass("size")){
            $(".pizza-choices-block1").hide();
            $(".pizza-choices-block").hide();
            $(".sizes-choice").fadeIn();

        }
    });

    $(".icons").on("click",function(){
        if($(this).hasClass("base")){
            $(".pizza-choices-block1").hide();
            $(".pizza-choices-block").hide();
            $(".base-choice").fadeIn();

        }
    });

    $(".icons").on("click",function(){
        if($(this).hasClass("cheese")){
            $(".pizza-choices-block1").hide();
            $(".pizza-choices-block").hide();
            $(".cheese-choice").fadeIn();

        }
    });

    $(".icons").on("click",function(){
        if($(this).hasClass("top1")){
            $(".pizza-choices-block1").hide();
            $(".pizza-choices-block").hide();
            $(".topping-1-choice").fadeIn();

        }
    });

    $(".icons").on("click",function(){
        if($(this).hasClass("top2")){
            $(".pizza-choices-block1").hide();
            $(".pizza-choices-block").hide();
            $(".topping-2-choice").fadeIn();

        }
    });


    $(".icons").on("click",function(){
        if($(this).hasClass("top3")){
            $(".pizza-choices-block1").hide();
            $(".pizza-choices-block").hide();
            $(".topping-3-choice").fadeIn();

        }
    });

    $(".icons").on("click",function(){
        if($(this).hasClass("top4")){
            $(".pizza-choices-block1").hide();
            $(".pizza-choices-block").hide();
            $(".topping-4-choice").fadeIn();

        }
    });




    


   
    $(".type").on("click",function(){
        if($(this).hasClass("margherita")){
            $(".type").removeClass("active2");
            $(this).toggleClass("active2");
            $(".pizza-1").css("filter","grayscale(0%)");
            $(".pizza-2").css("filter","grayscale(60%)");
            $(".pizza-3").css("filter","grayscale(60%)");
            $(".pizza-4").css("filter","grayscale(60%)");
            $(".margherita-text").css("opacity","100%");
            $(".vegetarian-text").css("opacity","50%");
            $(".hawaiian-text").css("opacity","50%");
            $(".pollo-text").css("opacity","50%");
            newPizza()
            $(".pizza-container-space").append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Type</div><div class='item-description '>"+type+"</div><div class='price col-3'>"+0+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");



        }
    });


    $(".type").on("click",function(){
        if($(this).hasClass("vegetarian")){
            $(".type").removeClass("active2");
            $(this).toggleClass("active2");
            $(".pizza-1").css("filter","grayscale(60%)");
            $(".pizza-2").css("filter","grayscale(0%)");
            $(".pizza-3").css("filter","grayscale(60%)");
            $(".pizza-4").css("filter","grayscale(60%)");
            $(".margherita-text").css("opacity","50%");
            $(".vegetarian-text").css("opacity","100%");
            $(".hawaiian-text").css("opacity","50%");
            $(".pollo-text").css("opacity","50%");
            newPizza() 
            $(".pizza-container-space").append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Type</div><div class='item-description '>"+type+"</div><div class='price col-3'>"+0+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");




//make  new  class add css effect remove unwanted saves space then use toggle class
        }
    });

    
    $(".type").on("click",function(){
        if($(this).hasClass("hawaiian")){
            $(".type").removeClass("active2");
            $(this).toggleClass("active2");    
            $(".pizza-1").css("filter","grayscale(60%)");
            $(".pizza-2").css("filter","grayscale(60%)");
            $(".pizza-3").css("filter","grayscale(0%)");
            $(".pizza-4").css("filter","grayscale(60%)");
            $(".margherita-text").css("opacity","50%");
            $(".vegetarian-text").css("opacity","50%");
            $(".hawaiian-text").css("opacity","100%");
            $(".pollo-text").css("opacity","50%");
            newPizza()
            $(".pizza-container-space").append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Type</div><div class='item-description '>"+type+"</div><div class='price col-3'>"+0+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");




        }
    });

    
    $(".type").on("click",function(){
        if($(this).hasClass("pollo")){
            $(".type").removeClass("active2");
            $(this).toggleClass("active2");
            $(".pizza-1").css("filter","grayscale(60%)");
            $(".pizza-2").css("filter","grayscale(60%)");
            $(".pizza-3").css("filter","grayscale(60%)");
            $(".pizza-4").css("filter","grayscale(0%)");
            $(".margherita-text").css("opacity","50%");
            $(".vegetarian-text").css("opacity","50%");
            $(".hawaiian-text").css("opacity","50%");
            $(".pollo-text").css("opacity","100%");
            newPizza()
            $(".pizza-container-space").append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Type</div><div class='item-description '>"+type+"</div><div class='price col-3'>"+0+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");




        }
    });



    $(".select1").on("click",function(){  
        $(".select1").removeClass("active");
        $(this).toggleClass("active");
        newPizza()
        $(".pizza-container-space").append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Size</div><div class='item-description '>"+size+"</div><div class='price col-3'>"+0+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");


    });

    
    $(".select2").on("click",function(){  
        $(".select2").removeClass("active");
        $(this).toggleClass("active");
        newPizza()
        $(".pizza-container-space").append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Base</div><div class='item-description '>"+base+"</div><div class='price col-3'>"+0+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");


    });

    
    $(".select3").on("click",function(){  
        $(".select3").removeClass("active");
        $(this).toggleClass("active");
        newPizza()
        $(".pizza-container-space").append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Extra Cheese</div><div class='item-description '>"+cheese+"</div><div class='price col-3'>"+0+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");


    });

    
    $(".select4").on("click",function(){  
        $(".select4").removeClass("active");
        $(this).toggleClass("active");
        newPizza()
        $(".pizza-container-space").append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Topping 1</div><div class='item-description '>"+topping1+"</div><div class='price col-3'>"+0+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");


    });

    
    $(".select5").on("click",function(){  
        $(".select5").removeClass("active");
        $(this).toggleClass("active");
        newPizza()
        $(".pizza-container-space").append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Topping 2</div><div class='item-description '>"+topping2+"</div><div class='price col-3'>"+0+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");


    });

    
    $(".select6").on("click",function(){  
        $(".select6").removeClass("active");
        $(this).toggleClass("active");
        newPizza()
        $(".pizza-container-space").append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Topping 3</div><div class='item-description '>"+topping3+"</div><div class='price col-3'>"+0+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");


    });

    
    $(".select7").on("click",function(){  
        $(".select7").removeClass("active");
        $(this).toggleClass("active");
        newPizza()
        $(".pizza-container-space").append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Topping 4</div><div class='item-description '>"+topping4+"</div><div class='price col-3'>"+0+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");


    });





    $(".size-pluto").on("click",function(){
        if($(this).hasClass("size-pluto")){
            $(".top3").addClass("disabledbutton");
            $(".top4").addClass("disabledbutton");
        }
    });

    $(".size-neptune").on("click",function(){
        if($(this).hasClass("size-neptune")){
            $(".top3").removeClass("disabledbutton");
            $(".top4").addClass("disabledbutton");

        }
    });

    $(".size-jupiter").on("click",function(){
        if($(this).hasClass("size-jupiter")){
            $(".top3").removeClass("disabledbutton");
            $(".top4").removeClass("disabledbutton");

        }
    });

    $(".base-tomato").on("click",function(){
        if($(this).hasClass("base-tomato")){
            $(".tomato-sauce-img").fadeIn();
            $(".creme-fraiche-sauce-img").hide();

        }
    });



    $(".base-creme").on("click",function(){
        if($(this).hasClass("base-creme")){
            $(".tomato-sauce-img").hide();
            $(".creme-fraiche-sauce-img").fadeIn();

        }
    });


    $(".cheese-yes").on("click",function(){
        if($(this).hasClass("cheese-yes")){
            $(".chedder-cheese-img").hide();
            $(".more-chedder-cheese-img").fadeIn();

        }
    });


    $(".cheese-no").on("click",function(){
        if($(this).hasClass("cheese-no")){
            $(".chedder-cheese-img").fadeIn();
            $(".more-chedder-cheese-img").hide();

        }
    });

    $(".top1-chicken").on("click",function(){
        if($(this).hasClass("top1-chicken")){
            $(".chicken-img").fadeIn();
            $(".bacon-img").hide();
            $(".peperoni-img").hide();
            $(".olives-img").hide();
            $(".onions-img").hide();
            $(".mushrooms-img").hide();


            $(".top2-chicken").addClass("disabledbutton");
            $(".top3-chicken").addClass("disabledbutton");
            $(".top4-chicken").addClass("disabledbutton");

            $(".top1-bacon").removeClass("disabledbutton");
            $(".top1-peperoni").removeClass("disabledbutton");
            $(".top1-olives").removeClass("disabledbutton");
            $(".top1-onions").removeClass("disabledbutton");
            $(".top1-mushroom").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");


            

        }
    });

    $(".top1-bacon").on("click",function(){
        if($(this).hasClass("top1-bacon")){
            $(".chicken-img").hide();
            $(".bacon-img").fadeIn();
            $(".peperoni-img").hide();
            $(".olives-img").hide();
            $(".onions-img").hide();
            $(".mushrooms-img").hide();

                        
            $(".top2-bacon").addClass("disabledbutton");
            $(".top3-bacon").addClass("disabledbutton");
            $(".top4-bacon").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");
        }
    });

    $(".top1-peperoni").on("click",function(){
        if($(this).hasClass("top1-peperoni")){
            $(".chicken-img").hide();
            $(".bacon-img").hide();
            $(".peperoni-img").fadeIn();
            $(".olives-img").hide();
            $(".onions-img").hide();
            $(".mushrooms-img").hide();

            $(".top2-peperoni").addClass("disabledbutton");
            $(".top3-peperoni").addClass("disabledbutton");
            $(".top4-peperoni").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");

        }
    });

    $(".top1-olives").on("click",function(){
        if($(this).hasClass("top1-olives")){
            $(".chicken-img").hide();
            $(".bacon-img").hide();
            $(".peperoni-img").hide();
            $(".olives-img").fadeIn();
            $(".onions-img").hide();
            $(".mushrooms-img").hide();


            $(".top2-olives").addClass("disabledbutton");
            $(".top3-olives").addClass("disabledbutton");
            $(".top4-olives").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");
        }
    });

    $(".top1-onions").on("click",function(){
        if($(this).hasClass("top1-onions")){
            $(".chicken-img").hide();
            $(".bacon-img").hide();
            $(".peperoni-img").hide();
            $(".olives-img").hide();
            $(".onions-img").fadeIn();
            $(".mushrooms-img").hide();

            $(".top2-onions").addClass("disabledbutton");
            $(".top3-onions").addClass("disabledbutton");
            $(".top4-onions").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");

        }
    });

    $(".top1-mushroom").on("click",function(){
        if($(this).hasClass("top1-mushroom")){
            $(".chicken-img").hide();
            $(".bacon-img").hide();
            $(".peperoni-img").hide();
            $(".olives-img").hide();
            $(".onions-img").hide();
            $(".mushrooms-img").fadeIn();

            $(".top2-mushroom").addClass("disabledbutton");
            $(".top3-mushroom").addClass("disabledbutton");
            $(".top4-mushroom").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");


        }
    });

    $(".top2-chicken").on("click",function(){
        if($(this).hasClass("top2-chicken")){
            $(".chicken-img2").fadeIn();
            $(".bacon-img2").hide();
            $(".peperoni-img2").hide();
            $(".olives-img2").hide();
            $(".onions-img2").hide();
            $(".mushrooms-img2").hide();

            $(".top1-chicken").addClass("disabledbutton");
            $(".top3-chicken").addClass("disabledbutton");
            $(".top4-chicken").addClass("disabledbutton");

            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");

        }
    });

    $(".top2-bacon").on("click",function(){
        if($(this).hasClass("top2-bacon")){
            $(".chicken-img2").hide();
            $(".bacon-img2").fadeIn();
            $(".peperoni-img2").hide();
            $(".olives-img2").hide();
            $(".onions-img2").hide();
            $(".mushrooms-img2").hide();

            $(".top1-bacon").addClass("disabledbutton");
            $(".top3-bacon").addClass("disabledbutton");
            $(".top4-bacon").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");

        }
    });

    $(".top2-peperoni").on("click",function(){
        if($(this).hasClass("top2-peperoni")){
            $(".chicken-img2").hide();
            $(".bacon-img2").hide();
            $(".peperoni-img2").fadeIn();
            $(".olives-img2").hide();
            $(".onions-img2").hide();
            $(".mushrooms-img2").hide();

            $(".top1-peperoni").addClass("disabledbutton");
            $(".top3-peperoni").addClass("disabledbutton");
            $(".top4-peperoni").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");

        }
    });

    $(".top2-olives").on("click",function(){
        if($(this).hasClass("top2-olives")){
            $(".chicken-img2").hide();
            $(".bacon-img2").hide();
            $(".peperoni-img2").hide();
            $(".olives-img2").fadeIn();
            $(".onions-img2").hide();
            $(".mushrooms-img2").hide();

            $(".top1-olives").addClass("disabledbutton");
            $(".top3-olives").addClass("disabledbutton");
            $(".top4-olives").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");

        }
    });

    $(".top2-onions").on("click",function(){
        if($(this).hasClass("top2-onions")){
            $(".chicken-img2").hide();
            $(".bacon-img2").hide();
            $(".peperoni-img2").hide();
            $(".olives-img2").hide();
            $(".onions-img2").fadeIn();
            $(".mushrooms-img2").hide();

            $(".top1-onions").addClass("disabledbutton");
            $(".top3-onions").addClass("disabledbutton");
            $(".top4-onions").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");

        }
    });

    $(".top2-mushroom").on("click",function(){
        if($(this).hasClass("top2-mushroom")){
            $(".chicken-img2").hide();
            $(".bacon-img2").hide();
            $(".peperoni-img2").hide();
            $(".olives-img2").hide();
            $(".onions-img2").hide();
            $(".mushrooms-img2").fadeIn();

            $(".top1-mushroom").addClass("disabledbutton");
            $(".top3-mushroom").addClass("disabledbutton");
            $(".top4-mushroom").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");

        }
    });

    $(".top3-chicken").on("click",function(){
        if($(this).hasClass("top3-chicken")){
            $(".chicken-img3").fadeIn();
            $(".bacon-img3").hide();
            $(".peperoni-img3").hide();
            $(".olives-img3").hide();
            $(".onions-img3").hide();
            $(".mushrooms-img3").hide();

            $(".top2-chicken").addClass("disabledbutton");
            $(".top1-chicken").addClass("disabledbutton");
            $(".top4-chicken").addClass("disabledbutton");

            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");

        }
    });

    $(".top3-bacon").on("click",function(){
        if($(this).hasClass("top3-bacon")){
            $(".chicken-img3").hide();
            $(".bacon-img3").fadeIn();
            $(".peperoni-img3").hide();
            $(".olives-img3").hide();
            $(".onions-img3").hide();
            $(".mushrooms-img3").hide();

            $(".top2-bacon").addClass("disabledbutton");
            $(".top1-bacon").addClass("disabledbutton");
            $(".top4-bacon").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");

        }
    });

    $(".top3-peperoni").on("click",function(){
        if($(this).hasClass("top3-peperoni")){
            $(".chicken-img3").hide();
            $(".bacon-img3").hide();
            $(".peperoni-img3").fadeIn();
            $(".olives-img3").hide();
            $(".onions-img3").hide();
            $(".mushrooms-img3").hide();

            $(".top2-peperoni").addClass("disabledbutton");
            $(".top1-peperoni").addClass("disabledbutton");
            $(".top4-peperoni").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");

        }
    });

    $(".top3-olives").on("click",function(){
        if($(this).hasClass("top3-olives")){
            $(".chicken-img3").hide();
            $(".bacon-img3").hide();
            $(".peperoni-img3").hide();
            $(".olives-img3").fadeIn();
            $(".onions-img3").hide();
            $(".mushrooms-img3").hide();

            $(".top2-olives").addClass("disabledbutton");
            $(".top1-olives").addClass("disabledbutton");
            $(".top4-olives").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");

        }
    });

    $(".top3-onions").on("click",function(){
        if($(this).hasClass("top3-onions")){
            $(".chicken-img3").hide();
            $(".bacon-img3").hide();
            $(".peperoni-img3").hide();
            $(".olives-img3").hide();
            $(".onions-img3").fadeIn();
            $(".mushrooms-img3").hide();

            $(".top2-onions").addClass("disabledbutton");
            $(".top1-onions").addClass("disabledbutton");
            $(".top4-onions").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");

        }
    });

    $(".top3-mushroom").on("click",function(){
        if($(this).hasClass("top3-mushroom")){
            $(".chicken-img3").hide();
            $(".bacon-img3").hide();
            $(".peperoni-img3").hide();
            $(".olives-img3").hide();
            $(".onions-img3").hide();
            $(".mushrooms-img3").fadeIn();

            $(".top2-mushroom").addClass("disabledbutton");
            $(".top1-mushroom").addClass("disabledbutton");
            $(".top4-mushroom").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");

        }
    });

    $(".top4-chicken").on("click",function(){
        if($(this).hasClass("top4-chicken")){
            $(".chicken-img4").fadeIn();
            $(".bacon-img4").hide();
            $(".peperoni-img4").hide();
            $(".olives-img4").hide();
            $(".onions-img4").hide();
            $(".mushrooms-img4").hide();

            $(".top2-chicken").addClass("disabledbutton");
            $(".top3-chicken").addClass("disabledbutton");
            $(".top1-chicken").addClass("disabledbutton");

            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");

        }
    });

    $(".top4-bacon").on("click",function(){
        if($(this).hasClass("top4-bacon")){
            $(".chicken-img4").hide();
            $(".bacon-img4").fadeIn();
            $(".peperoni-img4").hide();
            $(".olives-img4").hide();
            $(".onions-img4").hide();
            $(".mushrooms-img4").hide();

            $(".top2-bacon").addClass("disabledbutton");
            $(".top1-bacon").addClass("disabledbutton");
            $(".top4-bacon").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");

        }
    });

    $(".top4-peperoni").on("click",function(){
        if($(this).hasClass("top4-peperoni")){
            $(".chicken-img4").hide();
            $(".bacon-img4").hide();
            $(".peperoni-img4").fadeIn();
            $(".olives-img4").hide();
            $(".onions-img4").hide();
            $(".mushrooms-img4").hide();

            $(".top2-peperoni").addClass("disabledbutton");
            $(".top3-peperoni").addClass("disabledbutton");
            $(".top1-peperoni").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");

        }
    });

    $(".top4-olives").on("click",function(){
        if($(this).hasClass("top4-olives")){
            $(".chicken-img4").hide();
            $(".bacon-img4").hide();
            $(".peperoni-img4").hide();
            $(".olives-img4").fadeIn();
            $(".onions-img4").hide();
            $(".mushrooms-img4").hide();

            $(".top2-olives").addClass("disabledbutton");
            $(".top3-olives").addClass("disabledbutton");
            $(".top1-olives").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");

        }
    });

    $(".top4-onions").on("click",function(){
        if($(this).hasClass("top4-onions")){
            $(".chicken-img4").hide();
            $(".bacon-img4").hide();
            $(".peperoni-img4").hide();
            $(".olives-img4").hide();
            $(".onions-img4").fadeIn();
            $(".mushrooms-img4").hide();

            $(".top2-onions").addClass("disabledbutton");
            $(".top3-onions").addClass("disabledbutton");
            $(".top1-onions").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-mushroom").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-mushroom").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-mushroom").removeClass("disabledbutton");

        }
    });

    $(".top4-mushroom").on("click",function(){
        if($(this).hasClass("top4-mushroom")){
            $(".chicken-img4").hide();
            $(".bacon-img4").hide();
            $(".peperoni-img4").hide();
            $(".olives-img4").hide();
            $(".onions-img4").hide();
            $(".mushrooms-img4").fadeIn();

            $(".top2-mushroom").addClass("disabledbutton");
            $(".top3-mushroom").addClass("disabledbutton");
            $(".top1-mushroom").addClass("disabledbutton");

            $(".top2-chicken").removeClass("disabledbutton");
            $(".top2-bacon").removeClass("disabledbutton");
            $(".top2-peperoni").removeClass("disabledbutton");
            $(".top2-olives").removeClass("disabledbutton");
            $(".top2-onions").removeClass("disabledbutton");
            $(".top3-chicken").removeClass("disabledbutton");
            $(".top3-bacon").removeClass("disabledbutton");
            $(".top3-peperoni").removeClass("disabledbutton");
            $(".top3-olives").removeClass("disabledbutton");
            $(".top3-onions").removeClass("disabledbutton");
            $(".top4-chicken").removeClass("disabledbutton");
            $(".top4-bacon").removeClass("disabledbutton");
            $(".top4-peperoni").removeClass("disabledbutton");
            $(".top4-olives").removeClass("disabledbutton");
            $(".top4-onions").removeClass("disabledbutton");

        }
    });



    $(function(){
 
        $("#cart").on("click", function() {
          $(".shopping-cart").fadeToggle("fast");
        });
        
      });
});


var toppingArray =[

];

class Pizza{
    constructor(type,size,base,cheese,toppings){
        this.type = type;
        this.size =size;
        this.base = base;
        this.cheese = cheese;
        this.toppings = toppings;



    }
    
}


// use canva for video. use artboard studio and rotato for nice animated mockups

function newPizza(){

    type = $('.type.active2').attr('value');
    size = $('.select1.active').attr('value');
    base = $('.select2.active').attr('value');
    cheese = $('.select3.active').attr('value');
    
     topping = [
         topping1 =  $('.select4.active').attr('value'),
         topping2 =  $('.select5.active').attr('value'),
         topping3 =  $('.select6.active').attr('value'),
         topping4 =  $('.select7.active').attr('value')
    ];
    
    
       
    
    // if(topping1 || topping2 || topping3 || topping4 == "chicken"){
    
    // topping1 = "chickenlisous";
    
    // }else if(topping1 || topping2 || topping3 || topping4 == "bacon"){
    
    //     topping1 = "1";
        
    // }else if(topping1 || topping2 || topping3 || topping4 == "peperoni"){
    
    //     topping1 = "2";
    
    // }else if(topping1 || topping2 || topping3 || topping4 == "olives"){
    
    //     topping1 = "3";    
    
    // }else if(topping1 || topping2 || topping3 || topping4 == "onions"){
    
    //     topping1 = "4";

    // }else if(topping1 || topping2 || topping3 || topping4 == "mushroom"){
    
    //     topping1 = "5";
    // }
    
    
      



    var PricesforType = document.getElementsByClassName("active2");
    var PricesforTop = document.getElementsByClassName("active");
    var calcPrice = 0;
        
    for (var i = 0, len = PricesforTop.length; i < len; i++) {
           console.log(PricesforTop[i].getAttribute("pricevalue"));
            calcPrice = calcPrice + +PricesforTop[i].getAttribute("pricevalue");

        }//for

        for (var i = 0, len = PricesforType.length; i < len; i++) {
            console.log(PricesforType[i].getAttribute("pricevalue"));
             calcPrice = calcPrice + +PricesforType[i].getAttribute("pricevalue");
 
         }//for


         console.log(calcPrice)





    $(".pizza-generate-h1").remove();
    $(".pizza-name-generate").append("<h1 class='pizza-generate-h1' >"+ size + " "+ type +" " + base +" " + topping1 +"</h1>");




    console.log(type);
    console.log(size);
    console.log(base);
    console.log(cheese);
    console.log(topping1);
    console.log(topping2);
    console.log(topping3);
    console.log(topping4);




}
finalTotal = 0;
function Discount(){
    var discountCode =  $('#employee').val();
    if (discountCode === "SpaceX"){
    var discount= calcPrice*0.3;
    var finalTotal=calcPrice-(discount);
    // document.getElementById("employee").value;
    // document.getElementById("total-price").innerHTML = "R "+finalTotal;
    }
    console.log(finalTotal)
}
