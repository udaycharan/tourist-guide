
const signUpBtn = document.querySelector("#signup-btn");
const formGet = document.querySelector(".form-container");



signUpBtn.addEventListener("click", (event) => {

    event.preventDefault();
    let signUpData = [];

    const firstName = document.querySelector("#firstname").value;
    const lastName = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const newPassword = document.querySelector("#password-1").value;
    const confirmPassword = document.querySelector("#password-2").value;

    if (firstName) {
        signUpData.push(firstName);
    }

    else {
        alert("fields cannot be empty!!");
    }

    if (lastName) {
        signUpData.push(lastName);
    }

    else {
        alert("fields cannot be empty!!");
    }

    if (email) {
        signUpData.push(email);
    }

    else {
        alert("fields cannot be empty!!");
    }

    if (newPassword) {
        signUpData.push(newPassword);
    }

    else {
        alert("fields cannot be empty!!");
    }

    if (confirmPassword) {
        signUpData.push(confirmPassword);
    }

    else {
        alert("fields cannot be empty!!");
    }




    appendData(signUpData);
    location.reload();


});


function appendData(array) {


    //checking if the  key(data) is null and if it is null, adding empty array to it
    if (localStorage.getItem("data") == null) {
        localStorage.setItem("data", '[]');

    }
    //getting data object and push the new data into it to append teh data to the array.
    let oldData = JSON.parse(localStorage.getItem("data"));
    oldData.push(array);

    //finally setting the object with appended data

    localStorage.setItem("data", JSON.stringify(oldData));
}





