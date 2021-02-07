$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".nav").css({"background-color":"white"});   
        }
        else{
            $(".nav").css({"background-color":"transparent"});
        }
  
    })
  })
  
  if (window.chrome)
    $("[type=video\\\/mp4]").each(function()
    {
        $(this).attr('src', $(this).attr('src').replace(".mp4", "_c.mp4"));
    });

  