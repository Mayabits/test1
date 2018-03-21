 var posicion = 0;
 var imagenes = new Array();
 $(document).ready(function() {
   //alert(jQuery('.texto').html());
   var numeroImgs = 6;
   if(numeroImgs<=3){
       $('.flechadcha').css('display','none');
    $('.flechaizqda').css('display','none');
   }

     $('.flechaizqda').live('click',function(){
         if(posicion>0){
            posicion = posicion-1;
        }else{
            posicion = numeroImgs-3;
        }
        $(".micarrousel").animate({"left": -($('#product_'+posicion).position().left)}, 600);
        return false;
     });

     $('.flechaizqda').hover(function(){
         $(this).css('opacity','0.5');
     },function(){
         $(this).css('opacity','1');
     });

     $('.flechadcha').hover(function(){
         $(this).css('opacity','0.5');
     },function(){
         $(this).css('opacity','1');
     });

     $('.flechadcha').live('click',function(){
        if(numeroImgs>posicion+3){
            posicion = posicion+1;
        }else{
            posicion = 0;
        }
        $(".micarrousel").animate({"left": -($('#product_'+posicion).position().left)}, 600);
        return false;
     });

 });
