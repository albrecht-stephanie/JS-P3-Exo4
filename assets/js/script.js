document.querySelector('button').addEventListener('click', function controle(){// applique évènement click au bouton
    var password = document.getElementById('password');// récupère le champ password
    var confirmPassword = document.getElementById('confirmPassword');//récupère le champ confirmPassword

     if(password.value == confirmPassword.value){//comparaison des 2 champs, si vrai encadre les 2 champs en vert
        password.style.borderColor='green';
        confirmPassword.style.borderColor='green';
    } 
    else{
        password.style.borderColor='red';//si comparaison ko, encadre les 2 champs en rouge
        confirmPassword.style.borderColor='red';
    }
}); 

