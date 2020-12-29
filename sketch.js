var clock,plus ;
function preload(){
    clock =loadImage("clock 1.png")
    plus =loadImage("plus.png")
}


function setup(){
createCanvas(windowWidth,windowHeight)
}




function draw(){
background("turquoise")
var title =createElement("h1");

title.html("Reminder App");
title.position(windowWidth/2-99,50)
imageMode(CENTER) 
push()
tint(255,100)
image(clock,windowWidth/2,windowHeight/2,500,500) ;
pop()

image(plus,windowWidth-80,80,70,70) ;
var addbutton=createButton("ADD")
addbutton.position(windowWidth-100,65)
//addbutton.hide()
addbutton.style.visibility="hidden"
addbutton.mousePressed(function(){

 var input =createInput("Reminder Name")
 input.position(windowWidth/2,windowHeight/2)
 

 var input =createInput("HOUR")
 input.position(windowWidth/2,windowHeight/2+20)


 var input =createInput("MINUTE")
 input.position(windowWidth/2,windowHeight/2+30)


 var input =createInput("Reminder Name")
 input.position(windowWidth/2,windowHeight/2+40)


 var input =createInput("Reminder Name")
 input.position(windowWidth/2,windowHeight/2+50)


 var input =createButton("Reminder Name")
 input.position(windowWidth/2,windowHeight/2+60)


 var input =createButton("Reminder Name")
 input.position(windowWidth/2,windowHeight/2+70)

 
})

}