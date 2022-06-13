function calcular1(){
    let total=document.getElementById("total").value;
    let acer=document.getElementById("acertadas").value;
    let valor=document.getElementById("valor").value;
    let error=document.getElementById("erradas").value;
    let pen=document.getElementById("pen").value;
    if(total<0 || acer<0 || valor<0 || error<0 || pen<0){
        document.getElementById("respuesta").innerHTML="";
        document.getElementById("respuesta").innerHTML+='No has introducido los datos correctamente';
    }else if(total<(parseInt(acer)+parseInt(error))){
        document.getElementById("respuesta").innerHTML="";
        document.getElementById("respuesta").innerHTML+='No has introducido los datos correctamente';
    }else{
        let max=(total*valor);
        let nota=((acer*valor)-(error*pen));
        document.getElementById("respuesta").innerHTML="";
        document.getElementById("respuesta").innerHTML+='<p>Tu nota en el test ha sido de '+nota+' puntos sobre '+max+'</p>';
        document.getElementById("respuesta").innerHTML+='<p>'+textoNota(nota,max)+'</p>'
    }
    crear();
    }
function textoNota(nota,max){
    var por=(nota*100)/max
    if(por<30){
        return "Muy mal, tienes que mejorar"
    }else if(por>=30 && por<50){
        return "No has aprobado, pero sigue esforzandote"
    }else if(por>=50 && por<60){
        return "Aprobado justito, seguro que puedes más"
    }else if(por>=60 && por<70){
       return  "Un bien, no está mal"
    }else if(por>=70 && por<90){
        return "Notable, así me gusta"
    }else if(por>=90){
        return "Sobresaliente, el trabajo se vio recompensado"
    }
}