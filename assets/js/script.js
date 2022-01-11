var userData = [ 
    {  
        "emp_no":"10001",
        "fullname":"gomathi shankar",
        "mobile":"9600048330",
        "email": "gomsy@gmail.com"
     },
     {  
        "emp_no":"10002",
        "fullname":"gomathi shankar",
        "mobile":"9600048330",
        "email": "gomsy@gmail.com"
     },
     {  
        "emp_no":"10003",
        "fullname":"gomathi shankar",
        "mobile":"9600048330",
        "email": "gomsy@gmail.com"
     },
     {  
        "emp_no":"10004",
        "fullname":"gomathi shankar",
        "mobile":"9600048330",
        "email": "gomsy@gmail.com"
     },
]

function renderUSerCards() {
    for(var i = 0; i < userData.length; i++){
        var cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        var emp_no = document.createElement('p');
        emp_no.className = 'emp_no';
        emp_no.innerHTML = userData[i].emp_no;
        cardDiv.append(emp_no); 
        console.log(document.getElementsByClassName("usercards").childNode[0]);
    }
    
}
function onFormSubmit() {
    var formData = getFormData();
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