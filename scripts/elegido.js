function calcular2(){
    let total=document.getElementById("total").value;
    let acer=document.getElementById("acertadas").value;
    let valor=document.getElementById("valor").value;
    let error=document.getElementById("erradas").value;
    let pen=document.getElementById("pen").value;
    let per=document.getElementById("percent").value;
    if(per>0 && per<1){
        per=per*100;
    }
    if(total<0 || acer<0 || valor<0 || error<0 || pen<0){
        document.getElementById("respuesta").innerHTML="";
        document.getElementById("respuesta").innerHTML+='No has introducido los datos correctamente';
    }else if(total<(parseInt(acer)+parseInt(error))){
        document.getElementById("respuesta").innerHTML="";
        document.getElementById("respuesta").innerHTML+='No has introducido los datos correctamente';
    }else if(parseInt(per)<=0 || parseInt(per)>=100){
        document.getElementById("respuesta").innerHTML="";
        document.getElementById("respuesta").innerHTML+='No has introducido los datos correctamente';
    }else{
        let max=(total*valor);
        let nota=((acer*valor)-(error*pen));
        document.getElementById("respuesta").innerHTML="";
        document.getElementById("respuesta").innerHTML+='<p>Tu nota en el test ha sido de '+nota+' puntos sobre '+max+'</p>';
        document.getElementById("respuesta").innerHTML+='<p>'+textoNota2(nota,max,per)+'</p>'
    }
    crear();
    }
    function textoNota2(nota,max,per){
        let por=nota*100/max;
        if (por>=per){
            return "Aprobado"
        }else{
            return "Has suspendido"
        }
    }