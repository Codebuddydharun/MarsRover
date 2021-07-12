rover_height=90;
rover_width=100;
roverX=10;
roverY=10;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image_array=["mars.jpg","mars 2.jpg","mars3.jpg","mars4.jpg"];
randomnumber=Math.floor(Math.random()*4);
background_image=background_image_array[randomnumber];
rover_image="rover.png";

function add(){
    background_img_tag=new Image();
    background_img_tag.onload=upload_background;
    background_img_tag.src=background_image;
    rover_img_tag=new Image();
    rover_img_tag.onload=upload_rover;
    rover_img_tag.src=rover_image;
}

function upload_background(){
ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);    
}
function upload_rover(){
    ctx.drawImage(rover_img_tag,roverX,roverY,rover_width,rover_height);    
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keypress=e.keyCode;
if(keypress=='38'){
    up();
    console.log("up");
}
if(keypress=='40'){
    down();
    console.log("down");
}
if(keypress=='37'){
    left();
    console.log("left");
}
if(keypress=='39'){
    right();
    console.log("right");
}
}

function up(){
    if(roverY>=0){
        roverY=roverY-10;
        console.log("roverY"+roverY);
        upload_background();
        upload_rover();
    }
}
function down(){
    if(roverY<=500){
        roverY=roverY+10;
        console.log("roverY"+roverY);
        upload_background();
        upload_rover();
    }
}
function left(){
    if(roverX>=0){
        roverX=roverX-10;
        console.log("roverX"+roverX);
        upload_background();
        upload_rover();
    }
}
function right(){
    if(roverX<=700){
        roverX=roverX+10;
        console.log("roverX"+roverX);
        upload_background();
        upload_rover();
    }
}