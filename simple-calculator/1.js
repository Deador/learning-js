function diference(){
    var one,two,result
    one= document.getElementById("n1").value;
    one = parseInt(one);
    
    two= document.getElementById("n2").value;
     two = parseInt(two);
    
    result=one-two;
    document.getElementById("out").innerHTML=result;
}

function plus(){
    var one,two,result
    one= document.getElementById("n1").value;
    one = parseInt(one);
    
    two= document.getElementById("n2").value;
     two = parseInt(two);
    result=one+two;
    document.getElementById("out").innerHTML=result;
}

function multiply(){
    var one,two,result
    one= document.getElementById("n1").value;
    one = parseInt(one);
    
    two= document.getElementById("n2").value;
     two = parseInt(two);
    result=one*two;
    document.getElementById("out").innerHTML=result;
}

function divide(){
    var one,two,result
    one= document.getElementById("n1").value;
    one = parseInt(one);
    
    two= document.getElementById("n2").value;
     two = parseInt(two);
    result=one/two;
    document.getElementById("out").innerHTML=result;
}