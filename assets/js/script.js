function onFormSubmit() {
    var formData = getFormData();
    createUSerCard();
}

function getFormData() {
    var formData = {};
    formData["emp_no"] = document.getElementById("emp_no").value
    formData["fullname"] = document.getElementById("fname").value + " " + document.getElementById("fname").value
    formData["mobile"] = document.getElementById("mobile").value
    formData["emaail"] = document.getElementById("email").value
    return formData;
}

function createUSerCard() {
    
}