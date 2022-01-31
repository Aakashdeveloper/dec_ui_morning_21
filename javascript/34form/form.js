const getId = () => {
    let id = Math.floor(Math.random() * 1000000);
    document.getElementById('eid').value = id
}

const validateFname = () => {
    let name = document.getElementById('firstname').value;
    if(name.trim().length == 0) {
        document.getElementById('fout').innerText="Please Enter FirstName"
    }else{
        document.getElementById('fout').innerText=""
    }
}

const validateEmail = () => {
    let email = document.getElementById('email').value;
    if(email.trim().length == 0){
        document.getElementById('eout').innerText="Please Enter Email"
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null){
            document.getElementById('eout').innerText="Please Enter Valid Email"  
        }else{
            document.getElementById('eout').innerText=""
        }
    }
}

const validatePassword = () => {
    let password = document.getElementById('password').value;
    if(password.trim().length < 15){
        if(password.trim().length < 8){
            document.getElementById('pout').innerText="Min Length of password is 8"
            document.getElementById('ppout').style.display="block"
            document.getElementById('ppout').style.backgroundColor="red"
        }else if(password.trim().length < 11){
            document.getElementById('pout').innerText=""
            document.getElementById('ppout').style.backgroundColor="orange"
        }
    }else{
        document.getElementById('ppout').style.backgroundColor="green"
    }
}

const showPassword = () => {
    let password = document.getElementById('password');
    if(password.type == 'password') {
        password.type="text"
    }else{
        password.type="password"
    }
}

const validateCPassword = () => {
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;
    if(password !== cpassword){
        document.getElementById('cpout').innerText="Password Does Not Match"
    }else{
        document.getElementById('cpout').innerText=""
    }
}

const getCity = () => {
    let city = document.getElementById('city').value;
    document.getElementById('cityOut').innerText=`Your city is ${city}`
}