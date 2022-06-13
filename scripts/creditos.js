function crear(){
    var boton=document.getElementById("boton");
    boton.innerHTML='<input class="btn btn-outline-secondary" type="button" value="Mostrar Creditos" onclick="creditos()">';
}
function creditos(){
    boton.innerHTML=
    `<p>Javier Martín Arroyo</p>
    <p>Desarrollador de Aplicaciones Multiplataforma</p>
    <p>Correo Electrónico: marroyojavier@gmail.com</p>
    <p>Teléfono:633957979</p>
    <p><a href="https://www.infojobs.net/candidate/cv/view/index.xhtml?dgv=8791302244575683916" target="blank">Infojobs</a></p>
    <p><a href="https://github.com/JaviMartinA" target="blank">Github</a></p>
    <p><a href="https://www.linkedin.com/in/javier-mart%C3%ADn-arroyo-387960225/" target="blank">Linkedin</a></p>`
    boton.innerHTML+='<input class="btn btn-outline-secondary" type="button" value="Borrar Creditos" onclick="borrar()">';
}
function borrar(){
    boton.innerHTML='<input class="btn btn-outline-secondary" type="button" value="Mostrar Creditos" onclick="creditos()">';
}