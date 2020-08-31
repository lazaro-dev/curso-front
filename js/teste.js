const nameIn = document.getElementById("name");
const emailIn = document.getElementById("email");
const sizeIn = document.getElementById("large");
const btnForm = document.getElementById("btnForm");

function stopDefAction(evt) {
    evt.preventDefault();
}
    
document.getElementById('btnForm').addEventListener(
    'click', stopDefAction, false
);

(function(){

    btnForm.addEventListener("click", function () {
        const cadastro = {
            name: nameIn.value,
            emailIn: emailIn.value,
            sizeIn: sizeIn.value,
        };

        return firebase.database().ref().child('cadastro').push(cadastro).key;
    });

})()