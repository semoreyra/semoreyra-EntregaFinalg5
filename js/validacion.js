document.getElementById("formulario1").addEventListener("submit",function(event)
{
    event.preventDefault();
    var nombre=document.getElementById("nombre").value;
    var email=document.getElementById("email").value;
    var nombreError=document.getElementById("nombreError");
    var emailError=document.getElementById("emailError");
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    nombreError.textContent="";
    emailError.textContent="";

    if(nombre.trim()==="")
    {
        nombreError.textContent="No puede estar vacio este campo"; 
        return;
    }

    if(email.trim()==="")
    {
        emailError.textContent="No puede estar vacio este campo"; 
        return;
    }

    if(!regexEmail.test(email))
    {
        emailError.textContent="No cumple con el requisito";
        return;
    }

    alert("EL formulario fue enviado....");
});