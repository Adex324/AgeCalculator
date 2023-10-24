
$(document).ready(function(){


    $("#day").keyup(function(){
    if(validateDay()){
        $("#day").css("border" , "2px solid hsl(259, 100%, 65%)");
        $("#day").css( "background-color" , " white ") ;
        $(".day-text").html("");
          
        }else if(day.value === "" || day.value == null ){
            $(".day-text").html("This field is required");
            $(".day-text").css("color" , " hsl(4, 55%, 60%)");
            $("#day").css( "border" , "2px solid hsl(4, 55%, 60%) ");
        }
        else{
            $("#day").css( "border" , "2px solid hsl(4, 55%, 60%) ");
            $("#day").css( "background-color" , " white")
            $(".day-text").html("Must be a valid day");
            $(".day-text").css("color" , " hsl(4, 55%, 60%)");
           
        }
    });
    $("#dateM").keyup(function(){
        if(validatedateM()){
              
            $("#dateM").css("border" , "2px solid hsl(259, 100%, 65%)");
            $("#dateM").css( "background-color" , " white ") 
            $(".month-text").html("" );
            $(".month-text").css();
           
            
              
            }else if(dateM.value === "" || dateM.value == null ){
                $(".month-text").html("This field is required");
                $(".month-text").css("color" , " hsl(4, 55%, 60%)");
                $("#dateM").css( "border" , "2px solid hsl(4, 55%, 60%) ");
            }
            else{
                $("#dateM").css( "border" , "2px solid hsl(4, 55%, 60%) ");
                $("#dateM").css( "background-color" , " white");
                $(".month-text").html("Must be a valid month");
                $(".month-text").css("color" , " hsl(4, 55%, 60%)");
               
               
               }});

               $("#dateY").keyup(function(){
        
                if(validatedateY()){
                  $("#dateY").css("border" , "2px solid hsl(259, 100%, 65%)");
                  $("#dateY").css( "background-color" , " white ") ;
                  $(".year-text").html("" );
                  $(".year-text").css();
                
                 
                }else if(dateY.value === "" || dateY.value == null ){
                    $(".year-text").html("This field is required");
                    $(".year-text").css("color" , " hsl(4, 55%, 60%)");
                    $("#dateY").css( "border" , "2px solid hsl(4, 55%, 60%) ");
                }else{ 
                    $("#dateY").css( "border" , "2px solid hsl(4, 55%, 60%) ");
                    $("#dateY").css( "background-color" , " white");
                    $(".year-text").html("Must be in the past");
                    $(".year-text").css("color" , " hsl(4, 55%, 60%)");
                }
            
                
            });
               
            
});

function validateDay(){
    const act1 = document.getElementById("day")
    const day= act1.value;
    const reg = /^01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31$/;
if(reg.test(day)){
    return true;

}else{
    return false;
}
}
function validatedateM(){
    const act3 = document.getElementById("dateM")
    const dateM= act3.value;
    const reg3 = /^01|02|03|04|05|06|07|08|09|10|11|12$/;
if(reg3.test(dateM)){
    return true;

}else{
    return false;
}
};
function validatedateY(){
    const act4 = document.getElementById("dateY")
    const dateY= act4.value;
    const reg4 =/^(19[2-9]\d|20[0-1]\d|202[0-3])$/;
if(reg4.test(dateY)){
    return true;

}else{
    return false;
}
};

function calculateAge(){
    let act4 = document.getElementById("dateY")
    let act3 = document.getElementById("dateM")
    let act1 = document.getElementById("day")
    let dateY = act4.value
    let dateM = act3.value
    let day = act1.value
   
   let dYear= document.getElementById("year-val");
   let dMonth = document.getElementById("month-val");
   let dDay = document.getElementById("day-val");

    const birthDate = new Date(dateY , dateM-1 , day);
    const currentDate = new Date();

    const ageInMs= currentDate - birthDate ;
    const ageInY =Math.floor(ageInMs / 31536000000);
    const ageInM = Math.floor((ageInMs % 31536000000) / 2628000000);
    const ageInD = Math.floor((ageInMs % 2628000000) / 86400000);
 
    dYear.textContent = `${ageInY}`
    dMonth.textContent = `${ageInM}`
    dDay.textContent =`${ageInD}`


}























