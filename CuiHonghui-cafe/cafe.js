window.onload = function (){
    var total=0;
    var select = document.getElementById("order");
    document.getElementById("CUI1").onclick=function(){
    var options=document.createElement("option");
    options.appendChild(document.createTextNode("$1.95-Espresso"));
    select.appendChild(options);
    total=total+1.95;
    document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);
    }
    document.getElementById("CUI2").onclick=function(){
    var options=document.createElement("option");
    options.appendChild(document.createTextNode("$2.95-Latte"));
    select.appendChild(options);
    total=total+2.95;
    document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);    
    }
    document.getElementById("CUI3").onclick=function(){
    var options=document.createElement("option");
    options.appendChild(document.createTextNode("$3.45-Cappuccino"));
    select.appendChild(options)
    total=total+3.45;
    document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);    
    }
    document.getElementById("CUI4").onclick=function(){
    var options=document.createElement("option");
    options.appendChild(document.createTextNode("$1.75-Drip coffee"));
    select.appendChild(options)
    total=total+1.75;
    document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);    
    }
    document.getElementById("CUI5").onclick=function(){
    var options=document.createElement("option");
    options.appendChild(document.createTextNode("$1.95-Biscotti"));
    select.appendChild(options)
    total=total+1.95;
    document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);     
    }
    document.getElementById("CUI6").onclick=function(){
    var options=document.createElement("option");
    options.appendChild(document.createTextNode("$2.95-Scone"));
    select.appendChild(options)
    total=total+2.95;
    document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);   
    }
    document.getElementById("clear_order").onclick=function(){
        document.getElementById("order").options.length=0;
        document.getElementById("total").innerHTML="";
    }
}