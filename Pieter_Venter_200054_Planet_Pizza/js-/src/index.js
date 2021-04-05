$(function(){
    $('.pizza-choices-block').hide();
    $('.tomato-sauce-img').hide();
    $('.creme-fraiche-sauce-img').hide();
    $('.chedder-cheese-img').hide();
    $('.more-chedder-cheese-img').hide();
    $('.chicken-img').hide();
    $('.bacon-img').hide();
    $('.peperoni-img').hide();
    $('.olives-img').hide();
    $('.onions-img').hide();
    $('.mushrooms-img').hide();
    $('.chicken-img2').hide();
    $('.bacon-img2').hide();
    $('.peperoni-img2').hide();
    $('.olives-img2').hide();
    $('.onions-img2').hide();
    $('.mushrooms-img2').hide();
    $('.chicken-img3').hide();
    $('.bacon-img3').hide();
    $('.peperoni-img3').hide();
    $('.olives-img3').hide();
    $('.onions-img3').hide();
    $('.mushrooms-img3').hide();
    $('.chicken-img4').hide();
    $('.bacon-img4').hide();
    $('.peperoni-img4').hide();
    $('.olives-img4').hide();
    $('.onions-img4').hide();
    $('.mushrooms-img4').hide();
    $('.shopping-cart').hide();
    $('.successful-checkout').hide()
    $('.backgroundblur').hide(); 
    $('.backgroundblur-dark').hide();
    progressbarAnimate() 
    $(".heading-content").hide();
    $(".body-content").hide();
    $(".heading-1").fadeIn();
    $(".heading-1").css("margin-top", "-2px");
    $(".body-1").fadeIn();
    $(".body-1").css("margin-left", "0px");



    $('.icons').on('click',function(){
        if($(this).hasClass('icons')){
            $('.icons').removeClass('icon-active');
                $(this).toggleClass('icon-active');


        }
    });

    $('.icons').on('click',function(){
        if($(this).hasClass('size')){
            $('.pizza-choices-block1').hide();
            $('.pizza-choices-block').hide();
            $('.sizes-choice').fadeIn();

        }
    });

    $('.icons').on('click',function(){
        if($(this).hasClass('base')){
            $('.pizza-choices-block1').hide();
            $('.pizza-choices-block').hide();
            $('.base-choice').fadeIn();

        }
    });

    $('.icons').on('click',function(){
        if($(this).hasClass('cheese')){
            $('.pizza-choices-block1').hide();
            $('.pizza-choices-block').hide();
            $('.cheese-choice').fadeIn();

        }
    });

    $('.icons').on('click',function(){
        if($(this).hasClass('top1')){
            $('.pizza-choices-block1').hide();
            $('.pizza-choices-block').hide();
            $('.topping-1-choice').fadeIn();

        }
    });

    $('.icons').on('click',function(){
        if($(this).hasClass('top2')){
            $('.pizza-choices-block1').hide();
            $('.pizza-choices-block').hide();
            $('.topping-2-choice').fadeIn();

        }
    });


    $('.icons').on('click',function(){
        if($(this).hasClass('top3')){
            $('.pizza-choices-block1').hide();
            $('.pizza-choices-block').hide();
            $('.topping-3-choice').fadeIn();

        }
    });

    $('.icons').on('click',function(){
        if($(this).hasClass('top4')){
            $('.pizza-choices-block1').hide();
            $('.pizza-choices-block').hide();
            $('.topping-4-choice').fadeIn();

        }
    });


   pizzatype = '';
   pizzasize = '';
   pizzabase = '';
   pizzacheese = '';
  
   pizzatoppings = [
       topping1 =  '',
       topping2 =  '',
       topping3 =  '',
       topping4 =  ''
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

typeinfo = '';
sizeinfo = '';
baseinfo = '';
cheeseinfo = ''; 
topping1info = '';
topping2info =  '';
topping3info =  '';
topping4info =  '';


    $('.type').on('click',function(){
        if($(this).hasClass('margherita')){
            $('.type').removeClass('active2');
            $(this).toggleClass('active2');
            $('.pizza-1').css('filter','grayscale(0%)');
            $('.pizza-2').css('filter','grayscale(60%)');
            $('.pizza-3').css('filter','grayscale(60%)');
            $('.pizza-4').css('filter','grayscale(60%)');
            $('.margherita-text').css('opacity','100%');
            $('.vegetarian-text').css('opacity','50%');
            $('.hawaiian-text').css('opacity','50%');
            $('.pollo-text').css('opacity','50%');
            $('.margherita-text1').css('opacity','100%');
            $('.vegetarian-text1').css('opacity','50%');
            $('.hawaiian-text1').css('opacity','50%');
            $('.pollo-text1').css('opacity','50%');
            pizzatype = $('.type.active2').attr('value');     
            typeprice = $('.type.active2').attr('pricevalue'); 
            $('.container-pizza').remove();
            typeinfo = $('.pizza-container-space').append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Type:</div><div class='item-description '>"+pizzatype+"</div><div class='price col-3'>R"+typeprice+"</div><div class='delete-item item0'></div></div></div>");

        }
    });

    $('.type').on('click',function(){
        if($(this).hasClass('vegetarian')){
            $('.type').removeClass('active2');
            $(this).toggleClass('active2');
            $('.pizza-1').css('filter','grayscale(60%)');
            $('.pizza-2').css('filter','grayscale(0%)');
            $('.pizza-3').css('filter','grayscale(60%)');
            $('.pizza-4').css('filter','grayscale(60%)');
            $('.margherita-text').css('opacity','50%');
            $('.vegetarian-text').css('opacity','100%');
            $('.hawaiian-text').css('opacity','50%');
            $('.pollo-text').css('opacity','50%');
            $('.margherita-text1').css('opacity','50%');
            $('.vegetarian-text1').css('opacity','100%');
            $('.hawaiian-text1').css('opacity','50%');
            $('.pollo-text1').css('opacity','50%');
            pizzatype = $('.type.active2').attr('value');
            typeprice = $('.type.active2').attr('pricevalue');
            $('.container-pizza').remove();
            typeinfo = $('.pizza-container-space').append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Type:</div><div class='item-description '>"+pizzatype+"</div><div class='price col-3'>R"+typeprice+"</div><div class='delete-item item0'></div></div></div>");
        }
    });

    $('.type').on('click',function(){
        if($(this).hasClass('hawaiian')){
            $('.type').removeClass('active2');
            $(this).toggleClass('active2');    
            $('.pizza-1').css('filter','grayscale(60%)');
            $('.pizza-2').css('filter','grayscale(60%)');
            $('.pizza-3').css('filter','grayscale(0%)');
            $('.pizza-4').css('filter','grayscale(60%)');
            $('.margherita-text').css('opacity','50%');
            $('.vegetarian-text').css('opacity','50%');
            $('.hawaiian-text').css('opacity','100%');
            $('.pollo-text').css('opacity','50%');
            $('.margherita-text1').css('opacity','50%');
            $('.vegetarian-text1').css('opacity','50%');
            $('.hawaiian-text1').css('opacity','100%');
            $('.pollo-text1').css('opacity','50%')
            pizzatype = $('.type.active2').attr('value');
            typeprice = $('.type.active2').attr('pricevalue');
            $('.container-pizza').remove();
            typeinfo = $('.pizza-container-space').append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Type:</div><div class='item-description '>"+pizzatype+"</div><div class='price col-3'>R"+typeprice+"</div><div class='delete-item item0'></div></div></div>");
        }
    });

    $('.type').on('click',function(){
        if($(this).hasClass('pollo')){
            $('.type').removeClass('active2');
            $(this).toggleClass('active2');
            $('.pizza-1').css('filter','grayscale(60%)');
            $('.pizza-2').css('filter','grayscale(60%)');
            $('.pizza-3').css('filter','grayscale(60%)');
            $('.pizza-4').css('filter','grayscale(0%)');
            $('.margherita-text').css('opacity','50%');
            $('.vegetarian-text').css('opacity','50%');
            $('.hawaiian-text').css('opacity','50%');
            $('.pollo-text').css('opacity','100%');
            $('.margherita-text1').css('opacity','50%');
            $('.vegetarian-text1').css('opacity','50%');
            $('.hawaiian-text1').css('opacity','50%');
            $('.pollo-text1').css('opacity','100%');
            pizzatype = $('.type.active2').attr('value');
            typeprice = $('.type.active2').attr('pricevalue');
            $('.container-pizza').remove();
            typeinfo = $('.pizza-container-space').append("<div class='container-pizza'><div class='pizza-info-option'><div class='option-description '>Type:</div><div class='item-description '>"+pizzatype+"</div><div class='price col-3'>R"+typeprice+"</div><div class='delete-item item0'></div></div></div>");

        }
    });

    $('.select1').on('click',function(){  
        $('.select1').removeClass('active');
        $(this).toggleClass('active');
        pizzasize = $('.select1.active').attr('value');
        sizeprice = $('.select1.active').attr('pricevalue');
        $('.container-pizza1').remove();
        sizeinfo = $('.pizza-container-space').append("<div class='container-pizza1'><div class='pizza-info-option'><div class='option-description '>Size:</div><div class='item-description '>"+pizzasize+"</div><div class='price col-3'>R"+sizeprice+"</div><div class='delete-item item1'></i></div></div></div>");

    });

    
    $('.select2').on('click',function(){  
        $('.select2').removeClass('active');
        $(this).toggleClass('active');
        pizzabase = $('.select2.active').attr('value');
        baseprice = $('.select2.active').attr('pricevalue');
        $('.container-pizza2').remove();
        baseinfo = $('.pizza-container-space').append("<div class='container-pizza2'><div class='pizza-info-option'><div class='option-description '>Base:</div><div class='item-description '>"+pizzabase+"</div><div class='price col-3'>R"+baseprice+"</div><div class='delete-item item2'></i></div></div></div>");

    });

    
    $('.select3').on('click',function(){  
        $('.select3').removeClass('active');
        $(this).toggleClass('active');
        pizzacheese = $('.select3.active').attr('value');
        cheeseprice = $('.select3.active').attr('pricevalue');
        $('.container-pizza3').remove();
        cheeseinfo = $('.pizza-container-space').append("<div class='container-pizza3'><div class='pizza-info-option'><div class='option-description '>Extra Cheese :</div><div class='item-description '>"+pizzacheese+"</div><div class='price col-3'>R"+cheeseprice+"</div><div class='delete-item item3'></i></div></div></div>");

    });

    
    $('.select4').on('click',function(){  
        $('.select4').removeClass('active');
        $(this).toggleClass('active');
        topping1 =  $('.select4.active').attr('value');
        topping1price = $('.select4.active').attr('pricevalue');
        $('.container-pizza4').remove()
        topping1info = $('.pizza-container-space').append("<div class='container-pizza4'><div class='pizza-info-option'><div class='option-description '>Topping 1:</div><div class='item-description '>"+topping1+"</div><div class='price col-3'>R"+topping1price+"</div><div class='delete-item item4'></i></div></div></div>");

    });

    
    $('.select5').on('click',function(){  
        $('.select5').removeClass('active');
        $(this).toggleClass('active');
        topping2 =  $('.select5.active').attr('value');
        topping2price = $('.select5.active').attr('pricevalue');
        $('.container-pizza5').remove()
        topping2info = $('.pizza-container-space').append("<div class='container-pizza5'><div class='pizza-info-option'><div class='option-description '>Topping 2:</div><div class='item-description '>"+topping2+"</div><div class='price col-3'>R"+topping2price+"</div><div class='delete-item item5'></div></div></div>");

    });

    
    $('.select6').on('click',function(){  
        $('.select6').removeClass('active');
        $(this).toggleClass('active');
        topping3 =  $('.select6.active').attr('value');
        topping3price = $('.select6.active').attr('pricevalue');
        $('.container-pizza6').remove()
        topping3info = $('.pizza-container-space').append("<div class='container-pizza6'><div class='pizza-info-option'><div class='option-description '>Topping 3:</div><div class='item-description '>"+topping3+"</div><div class='price col-3'>R"+topping3price+"</div><div class='delete-item item6'></i></div></div></div>");

    });

    
    $('.select7').on('click',function(){  
        $('.select7').removeClass('active');
        $(this).toggleClass('active');
        topping4 =  $('.select7.active').attr('value');
        topping4price = $('.select7.active').attr('pricevalue');
        $('.container-pizza7').remove()
        topping4info = $('.pizza-container-space').append("<div class='container-pizza7'><div class='pizza-info-option'><div class='option-description '>Topping 4:</div><div class='item-description '>"+topping4+"</div><div class='price col-3'>R"+topping4price+"</div><div class='delete-item item7'></div></div></div>");

    });

    newPrice = 0;

$(document).on('click', '.item0', function() {
    $('.container-pizza').remove();
    newPrice = +$('#total-price').text() - +$('.type.active2').attr('pricevalue');
    $('#total-price').html(newPrice.toFixed(2));

});

$(document).on('click', '.item1', function() {
    $('.container-pizza1').remove();
});

$(document).on('click', '.item2', function() {
    $('.container-pizza2').remove();
});

$(document).on('click', '.item3', function() {
    $('.container-pizza3').remove();
});

$(document).on('click', '.item4', function() {
    $('.container-pizza4').remove();
});

$(document).on('click', '.item5', function() {
    $('.container-pizza5').remove();
});

$(document).on('click', '.item6', function() {
    $('.container-pizza6').remove();
});

$(document).on('click', '.item7', function() {
    $('.container-pizza7').remove();
});

    $('.size-pluto').on('click',function(){
        if($(this).hasClass('size-pluto')){
            $('.top3').addClass('disabledbutton');
            $('.top4').addClass('disabledbutton');
        }
    });

    $('.size-neptune').on('click',function(){
        if($(this).hasClass('size-neptune')){
            $('.top3').removeClass('disabledbutton');
            $('.top4').addClass('disabledbutton');

        }
    });

    $('.size-jupiter').on('click',function(){
        if($(this).hasClass('size-jupiter')){
            $('.top3').removeClass('disabledbutton');
            $('.top4').removeClass('disabledbutton');

        }
    });

    $('.base-tomato').on('click',function(){
        if($(this).hasClass('base-tomato')){
            $('.tomato-sauce-img').fadeIn();
            $('.creme-fraiche-sauce-img').hide();

        }
    });


    $('.base-creme').on('click',function(){
        if($(this).hasClass('base-creme')){
            $('.tomato-sauce-img').hide();
            $('.creme-fraiche-sauce-img').fadeIn();

        }
    });


    $('.cheese-yes').on('click',function(){
        if($(this).hasClass('cheese-yes')){
            $('.chedder-cheese-img').hide();
            $('.more-chedder-cheese-img').fadeIn();

        }
    });


    $('.cheese-no').on('click',function(){
        if($(this).hasClass('cheese-no')){
            $('.chedder-cheese-img').fadeIn();
            $('.more-chedder-cheese-img').hide();

        }
    });

    $('.top1-chicken').on('click',function(){
        if($(this).hasClass('top1-chicken')){
            $('.chicken-img').fadeIn();
            $('.bacon-img').hide();
            $('.peperoni-img').hide();
            $('.olives-img').hide();
            $('.onions-img').hide();
            $('.mushrooms-img').hide();
        }
    });

    $('.top1-bacon').on('click',function(){
        if($(this).hasClass('top1-bacon')){
            $('.chicken-img').hide();
            $('.bacon-img').fadeIn();
            $('.peperoni-img').hide();
            $('.olives-img').hide();
            $('.onions-img').hide();
            $('.mushrooms-img').hide();

        }
    });

    $('.top1-peperoni').on('click',function(){
        if($(this).hasClass('top1-peperoni')){
            $('.chicken-img').hide();
            $('.bacon-img').hide();
            $('.peperoni-img').fadeIn();
            $('.olives-img').hide();
            $('.onions-img').hide();
            $('.mushrooms-img').hide();

        }
    });

    $('.top1-olives').on('click',function(){
        if($(this).hasClass('top1-olives')){
            $('.chicken-img').hide();
            $('.bacon-img').hide();
            $('.peperoni-img').hide();
            $('.olives-img').fadeIn();
            $('.onions-img').hide();
            $('.mushrooms-img').hide();
        }
    });

    $('.top1-onions').on('click',function(){
        if($(this).hasClass('top1-onions')){
            $('.chicken-img').hide();
            $('.bacon-img').hide();
            $('.peperoni-img').hide();
            $('.olives-img').hide();
            $('.onions-img').fadeIn();
            $('.mushrooms-img').hide();

        }
    });

    $('.top1-mushroom').on('click',function(){
        if($(this).hasClass('top1-mushroom')){
            $('.chicken-img').hide();
            $('.bacon-img').hide();
            $('.peperoni-img').hide();
            $('.olives-img').hide();
            $('.onions-img').hide();
            $('.mushrooms-img').fadeIn();
        }
    });

    $('.top2-chicken').on('click',function(){
        if($(this).hasClass('top2-chicken')){
            $('.chicken-img2').fadeIn();
            $('.bacon-img2').hide();
            $('.peperoni-img2').hide();
            $('.olives-img2').hide();
            $('.onions-img2').hide();
            $('.mushrooms-img2').hide();

        }
    });

    $('.top2-bacon').on('click',function(){
        if($(this).hasClass('top2-bacon')){
            $('.chicken-img2').hide();
            $('.bacon-img2').fadeIn();
            $('.peperoni-img2').hide();
            $('.olives-img2').hide();
            $('.onions-img2').hide();
            $('.mushrooms-img2').hide();


        }
    });

    $('.top2-peperoni').on('click',function(){
        if($(this).hasClass('top2-peperoni')){
            $('.chicken-img2').hide();
            $('.bacon-img2').hide();
            $('.peperoni-img2').fadeIn();
            $('.olives-img2').hide();
            $('.onions-img2').hide();
            $('.mushrooms-img2').hide();

        }
    });

    $('.top2-olives').on('click',function(){
        if($(this).hasClass('top2-olives')){
            $('.chicken-img2').hide();
            $('.bacon-img2').hide();
            $('.peperoni-img2').hide();
            $('.olives-img2').fadeIn();
            $('.onions-img2').hide();
            $('.mushrooms-img2').hide();

        }
    });

    $('.top2-onions').on('click',function(){
        if($(this).hasClass('top2-onions')){
            $('.chicken-img2').hide();
            $('.bacon-img2').hide();
            $('.peperoni-img2').hide();
            $('.olives-img2').hide();
            $('.onions-img2').fadeIn();
            $('.mushrooms-img2').hide();

        }
    });

    $('.top2-mushroom').on('click',function(){
        if($(this).hasClass('top2-mushroom')){
            $('.chicken-img2').hide();
            $('.bacon-img2').hide();
            $('.peperoni-img2').hide();
            $('.olives-img2').hide();
            $('.onions-img2').hide();
            $('.mushrooms-img2').fadeIn();

        }
    });

    $('.top3-chicken').on('click',function(){
        if($(this).hasClass('top3-chicken')){
            $('.chicken-img3').fadeIn();
            $('.bacon-img3').hide();
            $('.peperoni-img3').hide();
            $('.olives-img3').hide();
            $('.onions-img3').hide();
            $('.mushrooms-img3').hide();
        }
    });

    $('.top3-bacon').on('click',function(){
        if($(this).hasClass('top3-bacon')){
            $('.chicken-img3').hide();
            $('.bacon-img3').fadeIn();
            $('.peperoni-img3').hide();
            $('.olives-img3').hide();
            $('.onions-img3').hide();
            $('.mushrooms-img3').hide();

        }
    });

    $('.top3-peperoni').on('click',function(){
        if($(this).hasClass('top3-peperoni')){
            $('.chicken-img3').hide();
            $('.bacon-img3').hide();
            $('.peperoni-img3').fadeIn();
            $('.olives-img3').hide();
            $('.onions-img3').hide();
            $('.mushrooms-img3').hide();

        }
    });

    $('.top3-olives').on('click',function(){
        if($(this).hasClass('top3-olives')){
            $('.chicken-img3').hide();
            $('.bacon-img3').hide();
            $('.peperoni-img3').hide();
            $('.olives-img3').fadeIn();
            $('.onions-img3').hide();
            $('.mushrooms-img3').hide();
        }
    });

    $('.top3-onions').on('click',function(){
        if($(this).hasClass('top3-onions')){
            $('.chicken-img3').hide();
            $('.bacon-img3').hide();
            $('.peperoni-img3').hide();
            $('.olives-img3').hide();
            $('.onions-img3').fadeIn();
            $('.mushrooms-img3').hide();

        }
    });

    $('.top3-mushroom').on('click',function(){
        if($(this).hasClass('top3-mushroom')){
            $('.chicken-img3').hide();
            $('.bacon-img3').hide();
            $('.peperoni-img3').hide();
            $('.olives-img3').hide();
            $('.onions-img3').hide();
            $('.mushrooms-img3').fadeIn();
        }
    });

    $('.top4-chicken').on('click',function(){
        if($(this).hasClass('top4-chicken')){
            $('.chicken-img4').fadeIn();
            $('.bacon-img4').hide();
            $('.peperoni-img4').hide();
            $('.olives-img4').hide();
            $('.onions-img4').hide();
            $('.mushrooms-img4').hide();

        }
    });

    $('.top4-bacon').on('click',function(){
        if($(this).hasClass('top4-bacon')){
            $('.chicken-img4').hide();
            $('.bacon-img4').fadeIn();
            $('.peperoni-img4').hide();
            $('.olives-img4').hide();
            $('.onions-img4').hide();
            $('.mushrooms-img4').hide();


        }
    });

    $('.top4-peperoni').on('click',function(){
        if($(this).hasClass('top4-peperoni')){
            $('.chicken-img4').hide();
            $('.bacon-img4').hide();
            $('.peperoni-img4').fadeIn();
            $('.olives-img4').hide();
            $('.onions-img4').hide();
            $('.mushrooms-img4').hide();

        }
    });

    $('.top4-olives').on('click',function(){
        if($(this).hasClass('top4-olives')){
            $('.chicken-img4').hide();
            $('.bacon-img4').hide();
            $('.peperoni-img4').hide();
            $('.olives-img4').fadeIn();
            $('.onions-img4').hide();
            $('.mushrooms-img4').hide();

        }
    });

    $('.top4-onions').on('click',function(){
        if($(this).hasClass('top4-onions')){
            $('.chicken-img4').hide();
            $('.bacon-img4').hide();
            $('.peperoni-img4').hide();
            $('.olives-img4').hide();
            $('.onions-img4').fadeIn();
            $('.mushrooms-img4').hide();

        }
    });

    $('.top4-mushroom').on('click',function(){
        if($(this).hasClass('top4-mushroom')){
            $('.chicken-img4').hide();
            $('.bacon-img4').hide();
            $('.peperoni-img4').hide();
            $('.olives-img4').hide();
            $('.onions-img4').hide();
            $('.mushrooms-img4').fadeIn();

        }
    });

        $('#cart').on('click', function() {
          $('.shopping-cart').fadeToggle('fast');
        });
    
        $('.checkout').on('click', function() {
            $('.successful-checkout').fadeIn('fast');
            $('.backgroundblur').fadeIn('fast');    
            $('.shopping-cart').hide();
            $('.successful-checkout').fadeTo(400000).fadeOut(5000);
            $('.backgroundblur').fadeTo(400000).fadeOut(5000);
          });

          $('.btn-dark').on('click', function() {
            $('.backgroundblur-dark').hide('fast'); 
            $('.menu').css('background-color', '#333333');
            $('.menu-title').css('background-color', '#333333');
            $('.pizza-choices-block1').css('background-color', '#090909');
            $('.pizza-choices-block').css('background-color', '#090909');
            $('.pizza-info-block').css('background-color', '#090909');
            $('.red-line-menu').css('background-color', '#333333');
            $('.pizza-1').css('background-color', '#333333');
            $('.pizza-2').css('background-color', '#333333');
            $('.pizza-3').css('background-color', '#333333');
            $('.pizza-4').css('background-color', '#333333');
            $('.pizza-customize').css('background-color', '#222222');
            $('.red-line-pizza').css('background-color', '#222222');
            $('.about-us').css('background-color', '#111111');
            $('.red-line-about-us').css('background-color', '#111111');
            $('footer').css('background-color', '#000000');
            $('.mode-text').css('color', '#FFFFFF');
            $('.pizza-container-space').css('color', '#FFFFFF');
            $('.pizza-name-generate').css('color', '#FFFFFF');
            $('#dark-mode-h1').text('Dark Mode');
            $('#dark-mode').replaceWith("<i  id='dark-mode' class='fas fa-moon'></i>");
            $('.progress_slider').css('background-color', '#111111');
            localStorage.setItem('dark-mode','dark');


          });

          $('.btn-light').on('click', function() {
            $('.backgroundblur-dark').hide('fast');
            $('.menu').css('background-color', '#FCFCFC');
            $('.menu-title').css('background-color', '#FCFCFC');
            $('.pizza-choices-block1').css('background-color', '#FCFCFC');
            $('.pizza-choices-block').css('background-color', '#FCFCFC');
            $('.pizza-info-block').css('background-color', '#FCFCFC');
            $('.red-line-menu').css('background-color', '#FCFCFC');
            $('.pizza-1').css('background-color', '#FCFCFC');
            $('.pizza-2').css('background-color', '#FCFCFC');
            $('.pizza-3').css('background-color', '#FCFCFC');
            $('.pizza-4').css('background-color', '#FCFCFC');
            $('.pizza-customize').css('background-color', '#EBEBEB');
            $('.red-line-pizza').css('background-color', '#EBEBEB');
            $('.about-us').css('background-color', '#D2D2D2');
            $('.red-line-about-us').css('background-color', '#D2D2D2');
            $('footer').css('background-color', '#111111');
            $('.mode-text').css('color', '#000000');
            $('.pizza-container-space').css('color', '#000000');
            $('.pizza-name-generate').css('color', '#000000');
            $('#dark-mode-h1').text('Light Mode');
            $('#dark-mode').replaceWith("<i  id='dark-mode' class='fas fa-sun'></i>");
            $('.progress_slider').css('background-color', '#555555');
            localStorage.setItem('dark-mode','light'); 
          });


          $('.dark-mode-btn').on('click', function() {
            $('.backgroundblur-dark').fadeToggle('fast'); 
        });

      $('.name-btn').on('click',function(){
        if($('.select4.active').attr('value') == 'chicken'){
        
            topping1 = 'chickenlisous';
            
            }else if($('.select4.active').attr('value') == 'bacon'){
            
                topping1 = 'baconroni';
                
            }else if($('.select4.active').attr('value') == 'peperoni'){
            
                topping1 = 'peperonilisous';
            
            }else if($('.select4.active').attr('value') == 'olives'){
            
                topping1 = 'olivetastic';    
            
            }else if($('.select4.active').attr('value') == 'onions'){
            
                topping1 = 'onionmatic';
        
            }else if($('.select4.active').attr('value') == 'mushroom'){
            
                topping1 = 'mushroommastic';
            }
            PizzaName();
    });
    
    $('.item').on('click',function(){
        calcPrice = +typeprice + +sizeprice + +baseprice + +cheeseprice + +topping1price + +topping2price + +topping3price + +topping4price;
        PizzaPrice()
        PizzaDiscount()
    });

   
var darkmode;

if (localStorage.getItem('dark-mode')){
    darkmode = localStorage.getItem('dark-mode');
}else{
    darkmode = 'light';
}

localStorage.setItem('dark-mode',darkmode);

if (localStorage.getItem('dark-mode') =='dark') {
    $( '.btn-dark' ).trigger( 'click' );
}else if(localStorage.getItem('dark-mode') =='light'){
    $( '.btn-light' ).trigger( 'click' );
}

setInterval(function(){

    if($('.dot-1').hasClass('active-slide')){
        $('.dot-1').removeClass('active-slide');
        $('.dot-2').addClass('active-slide');
        $('.img-slider').hide();
        $('.img-slider').fadeIn(1000).attr('src','assets/slide-2.jpg');
        $('.progress_slider_timer').stop();
        progressbarAnimate()
        $(".heading-content").hide();
        $(".body-content").hide();
        $(".heading-2").fadeIn();
        $(".heading-2").css("margin-top", "-2px");
        $(".body-2").fadeIn();
        $(".body-2").css("margin-left", "0px");


    } else if($('.dot-2').hasClass('active-slide')){
        $('.dot-2').removeClass('active-slide');
        $('.dot-3').addClass('active-slide');
        $('.img-slider').hide();
        $('.img-slider').fadeIn(1000).attr('src','assets/slide-3.png');
        $('.progress_slider_timer').stop();
        progressbarAnimate()
        $(".heading-content").hide();
        $(".body-content").hide();
        $(".heading-3").fadeIn();
        $(".heading-3").css("margin-top", "-10px");
        $(".body-3").fadeIn();
        $(".body-3").css("margin-left", "0px");



    } else if($('.dot-3').hasClass('active-slide')){
        $('.dot-3').removeClass('active-slide');
        $('.dot-4').addClass('active-slide');
        $('.img-slider').hide();
        $('.img-slider').fadeIn(1000).attr('src','assets/slide-4.png');
        $('.progress_slider_timer').stop();
        progressbarAnimate()
        $(".heading-content").hide();
        $(".body-content").hide();
        $(".heading-4").fadeIn();
        $(".heading-4").css("margin-top", "-2px");
        $(".body-4").fadeIn();
        $(".body-4").css("margin-left", "0px");



    } else if($('.dot-4').hasClass('active-slide')){
        $('.dot-4').removeClass('active-slide');
        $('.dot-1').addClass('active-slide');
        $('.img-slider').hide();
        $('.img-slider').fadeIn(1000).attr('src','assets/slide-1.png');
        $('.progress_slider_timer').stop();
        progressbarAnimate()
        $(".heading-content").hide();
        $(".body-content").hide();
        $(".heading-1").fadeIn();
        $(".heading-1").css("margin-top", "-2px");
        $(".body-1").fadeIn();
        $(".body-1").css("margin-left", "0px");



    }
},5000);

$('.dot-slide').on('click', function(){
    
    if($(this).hasClass('dot-1')){
        $('.dot-slide').removeClass('active-slide');
        $(this).addClass('active-slide');
        $('.img-slider').hide();
        $('.img-slider').fadeIn(1000).attr('src','assets/slide-1.png');
        $('.progress_slider_timer').stop();
        progressbarAnimate()
        $(".heading-content").hide();
        $(".body-content").hide();
        $(".heading-1").fadeIn();
        $(".heading-1").css("margin-top", "-2px");
        $(".body-1").fadeIn();
        $(".body-1").css("margin-left", "0px");


        
    } else if($(this).hasClass('dot-2')){
        $('.dot-slide').removeClass('active-slide');
        $(this).addClass('active-slide');
        $('.img-slider').hide();
        $('.img-slider').fadeIn(1000).attr('src','assets/slide-2.jpg');
        $('.progress_slider_timer').stop();
        progressbarAnimate()
        $(".heading-content").hide();
        $(".body-content").hide();
        $(".heading-2").fadeIn();
        $(".heading-2").css("margin-top", "-2px");
        $(".body-2").fadeIn();
        $(".body-2").css("margin-left", "0px");


    } else if($(this).hasClass('dot-3')){
        $('.dot-slide').removeClass('active-slide');
        $(this).addClass('active-slide');
        $('.img-slider').hide();
        $('.img-slider').fadeIn(1000).attr('src','assets/slide-3.png');
        $('.progress_slider_timer').stop();
        progressbarAnimate()
        $(".heading-content").hide();
        $(".body-content").hide();
        $(".heading-3").fadeIn();
        $(".heading-3").css("margin-top", "-10px");
        $(".body-3").fadeIn();
        $(".body-3").css("margin-left", "0px");


    } else if($(this).hasClass('dot-4')){
        $('.dot-slide').removeClass('active-slide');
        $(this).addClass('active-slide');
        $('.img-slider').hide();
        $('.img-slider').fadeIn(1000).attr('src','assets/slide-4.png');
        $('.progress_slider_timer').stop();
        progressbarAnimate()
        $(".heading-content").hide();
        $(".body-content").hide();
        $(".heading-4").fadeIn();
        $(".heading-4").css("margin-top", "-2px");
        $(".body-4").fadeIn();
        $(".body-4").css("margin-left", "0px");


    }

    });



function progressbarAnimate(){
    $('.progress_slider_timer').animate({width: '0%'}, 0);
    $('.progress_slider_timer').animate({width: '100%'}, 5000);
    $('.progress_slider_timer').animate({width: '0%'}, 0);
}
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
    // PizzaDiscount(){
    //     var discountCode =  $('#employee').val();
    //     if (discountCode === 'SpaceX'){ 
    //     // var discountPrice = calcPrice*0.3;
    //     this.price = price*0.3;
    //     discountPrice = calcPrice - discountPrice;
    //     $('#total-price').html(discountPrice.toFixed(2)); 
    // }
}

class chef extends Pizza{
    //method
}

var PizzaName = () => { $('.pizza-generate-h1').remove();  $('.pizza-name-generate').append("<h1 class='pizza-generate-h1 ' style= 'font-family: 'Montserrat', sans-serif;' >"+ pizzasize +" "+ pizzatype +" "+ topping1 +"</h1>");};

var PizzaPrice = () => {$('#total-price').html(calcPrice.toFixed(2));};

function PizzaDiscount(){
    var discountCode =  $('#employee').val();
    if (discountCode === 'SpaceX'){ 
    var discountPrice = calcPrice*0.3;
    discountPrice = calcPrice - discountPrice;
    $('#total-price').html(discountPrice.toFixed(2));
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
   finalprice = $('#total-price').text();
   PizzaDiscount();

    PizzaArray.push(new Pizza(pizzatype,pizzasize,pizzabase,pizzacheese,pizzatoppings,finalprice));
    console.log(PizzaArray);
    $('.item-container-cart').append("<div class='cart-conatianer'><div class='pizza-name-cart'>"+ $('.pizza-generate-h1').text() +"</div></div><div class='pizza-price-cart'>R"+$('#total-price').text()+"</div></div>");
    Total = Total + +$('#total-price').text();
    $('.total-h2').text('R' + Total.toFixed(2));
    $('.shopping-cart').fadeIn();

    $('.pizza-choices-block1').fadeIn();
    $('.pizza-choices-block').hide();
    $('.tomato-sauce-img').hide();
    $('.creme-fraiche-sauce-img').hide();
    $('.chedder-cheese-img').hide();
    $('.more-chedder-cheese-img').hide();
    $('.chicken-img').hide();
    $('.bacon-img').hide();
    $('.peperoni-img').hide();
    $('.olives-img').hide();
    $('.onions-img').hide();
    $('.mushrooms-img').hide();
    $('.chicken-img2').hide();
    $('.bacon-img2').hide();
    $('.peperoni-img2').hide();
    $('.olives-img2').hide();
    $('.onions-img2').hide();
    $('.mushrooms-img2').hide();
    $('.chicken-img3').hide();
    $('.bacon-img3').hide();
    $('.peperoni-img3').hide();
    $('.olives-img3').hide();
    $('.onions-img3').hide();
    $('.mushrooms-img3').hide();
    $('.chicken-img4').hide();
    $('.bacon-img4').hide();
    $('.peperoni-img4').hide();
    $('.olives-img4').hide();
    $('.onions-img4').hide();
    $('.mushrooms-img4').hide();
    $('.pizza-1').css('filter','grayscale(0%)');
    $('.pizza-2').css('filter','grayscale(0%)');
    $('.pizza-3').css('filter','grayscale(0%)');
    $('.pizza-4').css('filter','grayscale(0%)');
    $('.margherita-text').css('opacity','100%');
    $('.vegetarian-text').css('opacity','100%');
    $('.hawaiian-text').css('opacity','100%');
    $('.pollo-text').css('opacity','100%');
    $('.margherita-text1').css('opacity','100%');
    $('.vegetarian-text1').css('opacity','100%');
    $('.hawaiian-text1').css('opacity','100%');
    $('.pollo-text1').css('opacity','100%');
    $('.container-pizza').hide();
    $('.container-pizza1').hide();
    $('.container-pizza2').hide();
    $('.container-pizza3').hide();
    $('.container-pizza4').hide();
    $('.container-pizza5').hide();
    $('.container-pizza6').hide();
    $('.container-pizza7').hide();
    $('.pizza-generate-h1').remove();
    $('#total-price').text('0.00');
}


  






















