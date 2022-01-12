var userData = [ 
    {  
        "emp_no":"10001",
        "fullname":"gomathi shankar",
        "mobile":"9600048330",
        "email": "gomsy@gmail.com"
     },
     {  
        "emp_no":"10002",
        "fullname":"samarth shankar",
        "mobile":"9600048331",
        "email": "samy@gmail.com"
     },
     {  
        "emp_no":"10003",
        "fullname":"akanksha shankar",
        "mobile":"9600048332",
        "email": "akay@gmail.com"
     },
     {  
        "emp_no":"10004",
        "fullname":"lakshman shankar",
        "mobile":"9600048333",
        "email": "laksh@gmail.com"
     },
]

let userdata_str = JSON.stringify(userData);
localStorage.setItem("userData", userdata_str);




function renderUSerCards() {
    var mainDiv = document.querySelector('.container');
    
    for(var i = 0; i < userData.length; i++){
        var cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'col-md-6', 'col-lg-4');
        var badges = document.createElement('p');
        badges.className = 'badge';
        var badgeText = userData[i].fullname.split(" ")[0].slice(0,1).toUpperCase() + userData[i].fullname.split(" ")[1].slice(0,1).toUpperCase();
        badges.innerHTML = badgeText;
        var emp_no = document.createElement('p');
        emp_no.className = 'emp_no';
        emp_no.innerHTML = userData[i].emp_no;
        var fullname = document.createElement('p');
        fullname.className = 'fullname';
        fullname.innerHTML = userData[i].fullname;
        var mobile = document.createElement('p');
        mobile.className = 'mobile';
        mobile.innerHTML = userData[i].mobile;
        var email = document.createElement('p');
        email.className = 'email';
        email.innerHTML = userData[i].email;
       
        var edit = document.createElement('button');
        edit.className = 'btn';
        edit.innerHTML = "EDIT"; 
        
        var del = document.createElement('button');
        del.className = 'btn';
        del.innerHTML = "DELETE";
       cardDiv.append(badges, emp_no, fullname, mobile, email, edit, del); 
        console.log(cardDiv);
        mainDiv.appendChild(cardDiv);
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
    userData.push(formData);
    renderUSerCards();
    return formData;
}

function createUSerCard(formData) {
    var mainDiv = document.querySelector('.container');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'col-md-6', 'col-lg-4');
    var emp_no = document.createElement('p');
    emp_no.className = 'emp_no';
    emp_no.innerHTML = formData.emp_no;
    var fullname = document.createElement('p');
    fullname.className = 'fullname';
    fullname.innerHTML = formData.fullname;
    var mobile = document.createElement('p');
    mobile.className = 'mobile';
     mobile.innerHTML = formData.mobile;
    var email = document.createElement('p');
    email.className = 'email';
    email.innerHTML = formData.email;
    cardDiv.append(emp_no, fullname, mobile, email); 
    console.log(cardDiv);
    mainDiv.appendChild(cardDiv);
}