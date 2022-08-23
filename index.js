let str="";

(pressed = (vari) => {
    var dis=document.getElementById('display');
    str=str+vari;
    dis.innerHTML=str;
})
equal =() =>{
    //var result=eval(str);
    str=eval(str);
    str=str.toString();
    //console.log(typeof(str));
    document.getElementById('display').innerHTML=str;
}

del = () => {
    //document.getElementById('display').innerHTML="deleting";
    str=str.slice(0,-1);
    //console.log(str);
    //document.getElementById('checker').innerHTML="deleting";
    document.getElementById('display').innerHTML=str;
}

clearing = () => {
    //window.location.reload();
    //document.getElementById('display').innerHTML="clear";
    str="";
    //console.log(str);
    document.getElementById('display').innerHTML=str;
}