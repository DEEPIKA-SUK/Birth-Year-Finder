function copytoClipBoard(str){
    const textarea=document.createElement("textarea");
    textarea.value=str;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    document.getElementById("output").innerHTML="<h2>Content Copied</h2>"+textarea.value;
}
function copyText(){
    copytoClipBoard(document.getElementById("copyTxt").value);
}

function moveText(){
 var temp=document.getElementById("copyTxt").value;
 document.getElementById("finalTxt").innerHTML=temp;
}
document.getElementById("moverBtn").onclick=function(){ moveText() };
document.getElementById("copyBtn").onclick=function(){copyText()};

