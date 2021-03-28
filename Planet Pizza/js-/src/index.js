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



   pizzatype = "";
   pizzasize = "";
   pizzabase = "";
   pizzacheese = "";
  
   pizzatoppings = [
       topping1 =  "",
       topping2 =  "",
       topping3 =  "",
       topping4 =  ""
  ];



  typeprice = 0;
  sizeprice = 0;
  baseprice = 0;
  cheeseprice = 0;
  topping1price = 0;
  topping2price =  0;
  topping3price =  0;
  topping4price =  0;

  calcPrice = 0;

typeinfo = "";
sizeinfo = "";
baseinfo = "";
cheeseinfo = ""; 
topping1info = "";
topping2info =  "";
topping3info =  "";
topping4info =  "";






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
            $(".margherita-text1").css("opacity","100%");
            $(".vegetarian-text1").css("opacity","50%");
            $(".hawaiian-text1").css("opacity","50%");
            $(".pollo-text1").css("opacity","50%");
            pizzatype = $('.type.active2').attr('value');     
            typeprice = $('.type.active2').attr('pricevalue'); 
            $(".container-pizza").remove();
            typeinfo = $(".pizza-container-space").append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Type:</div><div class='item-description '>"+pizzatype+"</div><div class='price col-3'>R"+typeprice+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");

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
            $(".margherita-text1").css("opacity","50%");
            $(".vegetarian-text1").css("opacity","100%");
            $(".hawaiian-text1").css("opacity","50%");
            $(".pollo-text1").css("opacity","50%");
            pizzatype = $('.type.active2').attr('value');
            typeprice = $('.type.active2').attr('pricevalue');
            $(".container-pizza").remove();
            typeinfo = $(".pizza-container-space").append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Type:</div><div class='item-description '>"+pizzatype+"</div><div class='price col-3'>R"+typeprice+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");

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
            $(".margherita-text1").css("opacity","50%");
            $(".vegetarian-text1").css("opacity","50%");
            $(".hawaiian-text1").css("opacity","100%");
            $(".pollo-text1").css("opacity","50%")
            pizzatype = $('.type.active2').attr('value');
            typeprice = $('.type.active2').attr('pricevalue');
            $(".container-pizza").remove();
            typeinfo = $(".pizza-container-space").append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Type:</div><div class='item-description '>"+pizzatype+"</div><div class='price col-3'>R"+typeprice+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");
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
            $(".margherita-text1").css("opacity","50%");
            $(".vegetarian-text1").css("opacity","50%");
            $(".hawaiian-text1").css("opacity","50%");
            $(".pollo-text1").css("opacity","100%");
            pizzatype = $('.type.active2').attr('value');
            typeprice = $('.type.active2').attr('pricevalue');
            $(".container-pizza").remove();
            $(".far fa-times-circle").remove(".container-pizza");
            typeinfo = $(".pizza-container-space").append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Type:</div><div class='item-description '>"+pizzatype+"</div><div class='price col-3'>R"+typeprice+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");

        }
    });



    $(".select1").on("click",function(){  
        $(".select1").removeClass("active");
        $(this).toggleClass("active");
        pizzasize = $('.select1.active').attr('value');
        sizeprice = $('.select1.active').attr('pricevalue');
        $(".container-pizza1").remove();
        $(".far fa-times-circle").remove(".container-pizza");
        sizeinfo = $(".pizza-container-space").append("<div class='container-pizza1'><div class='pizza-info-option'><div class='option-description '>Size:</div><div class='item-description '>"+pizzasize+"</div><div class='price col-3'>R"+sizeprice+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");

    });

    
    $(".select2").on("click",function(){  
        $(".select2").removeClass("active");
        $(this).toggleClass("active");
        pizzabase = $('.select2.active').attr('value');
        baseprice = $('.select2.active').attr('pricevalue');
        $(".container-pizza2").remove();
        $(".far fa-times-circle").remove(".container-pizza");
        baseinfo = $(".pizza-container-space").append("<div class='container-pizza2'><div class='pizza-info-option'><div class='option-description '>Base:</div><div class='item-description '>"+pizzabase+"</div><div class='price col-3'>R"+baseprice+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");

    });

    
    $(".select3").on("click",function(){  
        $(".select3").removeClass("active");
        $(this).toggleClass("active");
        pizzacheese = $('.select3.active').attr('value');
        cheeseprice = $('.select3.active').attr('pricevalue');
        $(".container-pizza3").remove();
        cheeseinfo = $(".pizza-container-space").append("<div class='container-pizza3'><div class='pizza-info-option'><div class='option-description '>Extra Cheese :</div><div class='item-description '>"+pizzacheese+"</div><div class='price col-3'>R"+cheeseprice+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");

    });

    
    $(".select4").on("click",function(){  
        $(".select4").removeClass("active");
        $(this).toggleClass("active");
        topping1 =  $('.select4.active').attr('value');
        topping1price = $('.select4.active').attr('pricevalue');
        $(".container-pizza4").remove()
        topping1info = $(".pizza-container-space").append("<div class='container-pizza4'><div class='pizza-info-option'><div class='option-description '>Topping 1:</div><div class='item-description '>"+topping1+"</div><div class='price col-3'>R"+topping1price+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");

    });

    
    $(".select5").on("click",function(){  
        $(".select5").removeClass("active");
        $(this).toggleClass("active");
        topping2 =  $('.select5.active').attr('value');
        topping2price = $('.select5.active').attr('pricevalue');
        $(".container-pizza5").remove()
        topping2info = $(".pizza-container-space").append("<div class='container-pizza5'><div class='pizza-info-option'><div class='option-description '>Topping 2:</div><div class='item-description '>"+topping2+"</div><div class='price col-3'>R"+topping2price+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");

    });

    
    $(".select6").on("click",function(){  
        $(".select6").removeClass("active");
        $(this).toggleClass("active");
        topping3 =  $('.select6.active').attr('value');
        topping3price = $('.select6.active').attr('pricevalue');
        $(".container-pizza6").remove()
        topping3info = $(".pizza-container-space").append("<div class='container-pizza6'><div class='pizza-info-option'><div class='option-description '>Topping 3:</div><div class='item-description '>"+topping3+"</div><div class='price col-3'>R"+topping3price+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");

    });

    
    $(".select7").on("click",function(){  
        $(".select7").removeClass("active");
        $(this).toggleClass("active");
        topping4 =  $('.select7.active').attr('value');
        topping4price = $('.select7.active').attr('pricevalue');
        $(".container-pizza7").remove()
        topping4info = $(".pizza-container-space").append("<div class='container-pizza7'><div class='pizza-info-option'><div class='option-description '>Topping 4:</div><div class='item-description '>"+topping4+"</div><div class='price col-3'>R"+topping4price+"</div><div class='delete-item '><i class='far fa-times-circle'></i></div></div></div>");

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

        }
    });

    $(function(){
 
        $("#cart").on("click", function() {
          $(".shopping-cart").fadeToggle("fast");
        });
        
      });





      $(".name-btn").on("click",function(){
        if($('.select4.active').attr('value') == "chicken"){
        
            topping1 = "chickenlisous";
            
            }else if($('.select4.active').attr('value') == "bacon"){
            
                topping1 = "baconroni";
                
            }else if($('.select4.active').attr('value') == "peperoni"){
            
                topping1 = "peperonilisous";
            
            }else if($('.select4.active').attr('value') == "olives"){
            
                topping1 = "olivetastic";    
            
            }else if($('.select4.active').attr('value') == "onions"){
            
                topping1 = "onionmatic";
        
            }else if($('.select4.active').attr('value') == "mushroom"){
            
                topping1 = "mushroommastic";
            }
            PizzaName();
    });
    
    $(".item").on("click",function(){
        calcPrice = +typeprice + +sizeprice + +baseprice + +cheeseprice + +topping1price + +topping2price + +topping3price + +topping4price;
        PizzaPrice()
        PizzaDiscount()
    });
});

var PizzaArray = [];

class Pizza{
    constructor(type,size,base,cheese,toppings,price){
        this.type = type;
        this.size = size;
        this.base = base;
        this.cheese = cheese;
        this.toppings = toppings;
        this.price = price;
    }
    //method
}

class cheff extends Pizza{
    //method
}

var PizzaName = () => { $(".pizza-generate-h1").remove();  $(".pizza-name-generate").append("<h1 class='pizza-generate-h1' style= 'font-family: 'Montserrat', sans-serif;' >"+ pizzasize + " "+ pizzatype +" "+ topping1 +"</h1>");};

var PizzaPrice = () => {$("#total-price").html("R "+ calcPrice.toFixed(2));};

function PizzaDiscount(){
    var discountCode =  $('#employee').val();
    if (discountCode === "SpaceX"){ 
    var discountPrice = calcPrice*0.3;
    discountPrice = calcPrice - discountPrice;
    $("#total-price").html("R "+ discountPrice.toFixed(2));
    console.log(discountPrice)
    }
}

var Total = 0;
function PizzaPlaceOrder(){
    pizzatoppings = [
        topping1 =  $('.select4.active').attr('value'),
        topping2 =  $('.select5.active').attr('value'),
        topping3 =  $('.select6.active').attr('value'),
        topping4 =  $('.select7.active').attr('value')
   ];

    PizzaArray.push(new Pizza(pizzatype,pizzasize,pizzabase,pizzacheese,pizzatoppings,calcPrice));
    console.log(PizzaArray);
    $(".item-container-cart").append("<div class='cart-conatianer'><div class='pizza-name-cart'>"+ $(".pizza-generate-h1").text() +"</div></div><div class='pizza-price-cart'>R"+calcPrice.toFixed(2)+"</div></div>");
    Total = Total + calcPrice
    $(".total-h2").text("R" + Total.toFixed(2));
    $(".shopping-cart").fadeIn();
}