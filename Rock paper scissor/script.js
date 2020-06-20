let game={"min":1,"max":3};
document.addEventListener("DOMContentLoaded",function(){
    game.rb=document.querySelector("#rb");
    game.pb=document.querySelector("#pb");
    game.sb=document.querySelector("#sb");
    game.output=document.querySelector(".output");
    game.rb.addEventListener("click",rock);
    game.pb.addEventListener("click",paper);
    game.sb.addEventListener("click",scissor);
    init();
})
function mr(){
    var x=document.createElement("img");
        x.setAttribute("src","rock.png");
        x.setAttribute("border-radius","50%");
        document.querySelector(".output").appendChild(x);
}
function mp(){
    var x=document.createElement("img");
        x.setAttribute("src","hand.jpg");
        x.setAttribute("border-radius","50%");
        document.querySelector(".output").appendChild(x);
}
function ms(){
    var x=document.createElement("img");
        x.setAttribute("src","scissor.jpg");
        x.setAttribute("border-radius","50%");
        document.querySelector(".output").appendChild(x);
}
function rock(){
    if(game.num==1){
        game.output.style.display="none";
        game.output.innerHTML="<h1>Tie</h1>"+"<h1>Computer chose </h1>";
        game.output.style.display="block";
        mr();
    }
    else if(game.num==2){
        game.output.style.display="none";
        game.output.innerHTML="<h1>You Lose</h1>"+"<h1>Computer chose</h1>";
        game.output.style.display="block";
        mp();
    }
    else{
        game.output.style.display="none";
        game.output.innerHTML="<h1>You Win</h1>"+"<h1>Computer chose</h1>";
        game.output.style.display="block";
        ms();
    }
    init();
}
function paper(){
    if(game.num==2){
        game.output.style.display="none";
        game.output.innerHTML="<h1>Tie</h1>"+"<h1>Computer chose</h1>";
        game.output.style.display="block";
        mp();
    }
    else if(game.num==3){
        game.output.style.display="none";
        game.output.innerHTML="<h1>You Lose</h1>"+"<h1>Computer chose</h1>";
        game.output.style.display="block";
        ms();
    }
    else{
        game.output.style.display="none";
        game.output.innerHTML="<h1>You Win</h1>"+"<h1>Computer chose</h1>";
        game.output.style.display="block";
        mr();
    }
    init();
}
function scissor(){
    if(game.num==3){
        game.output.style.display="none";
        game.output.innerHTML="<h1>Tie</h1>"+"<h1>Computer chose</h1>";
        game.output.style.display="block";
        ms();
    }
    else if(game.num==1){
        game.output.style.display="none";
        game.output.innerHTML="<h1>You Lose</h1>"+"<h1>Computer chose</h1>";
        game.output.style.display="block";
        mr();
    }
    else{
        game.output.style.display="none";
        game.output.innerHTML="<h1>You Win</h1>"+"<h1>Computer chose</h1>";
        game.output.style.display="block";
        mp();
    }
    init();
}
function init(){
    game.num=ranNum(game.min,game.max);
}
function ranNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
