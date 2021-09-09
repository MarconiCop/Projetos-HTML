$("document").ready(function(){
    
    $(".teste").hide();
    //$("#primeira").hide();
    //$("#segunda").hide();
    //$("#terceira").hide();
    //$("#quarta").hide();

    //$("#terceira").show();

    //$("#primeira").fadeIn(2000);

    $("#primeira").fadeIn(1000, function(){
        $("#segunda").fadeIn(1000, function(){
            $("#terceira").fadeIn(1000, function(){
                $("#quarta").fadeIn(1000)
            });
        });
    });

    var segunda=true;

    $("#primeira").click(function(){
        if(segunda){
            $("#segunda").fadeOut(1000);
            segunda=false;
        }
        else{
            $("#segunda").fadeIn(1000);
            segunda=true;
        }
        
    });


    $(".texto").hide();
    $("#texto4").show();
    $("#texto1").fadeIn(1000, function(){
        $("#texto2").fadeIn(1000, function(){
            $("#texto3").fadeIn(1000);
        });
    });

    $("#texto4").css("cursor","pointer");
    $("#texto4").css("border","2px solid #a8dadc");
    $("#texto4").css("width","170px");
    $("#texto4").css("background-color","#f1faee");


    
    $("#texto4").click(function(){
        $("#central").css("left","25%");
    });
});

