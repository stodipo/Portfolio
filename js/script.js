$(Document).ready(function(){
    $("#btn1").click(function(){
        $("img").hide();
    });
    $("#btn2").click(function(){
        $("img").show();
    });
    $("#btn1").dblclick(function(){
        $("img").show();
    });
});

var name="Stephen";
var age=21;
console.log(name);
//alert(name);
//prompt("What is your name?");

function firstFunction(){
    console.log(name+" "+age);
};
//firstFunction();
function displayText(){
    document.getElementById("quote").innerHTML="Only the Paranoid Survive.";
}