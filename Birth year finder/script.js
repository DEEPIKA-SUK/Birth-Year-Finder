function calculate(){
    var num=document.getElementById("number").value;
    if(num==" "||num==0||num<0){
        window.alert("Please type your correct age!");
        return;
    }
    else{
        var dt=new Date().getFullYear();
        var birthyear= dt-num;
        document.getElementById("year").style.display="block";
        document.getElementById("year").innerHTML="Year of birth is "+birthyear;
    }
}
document.getElementById("year").style.display="none";
document.getElementById("button").onclick=function(){calculate()};
