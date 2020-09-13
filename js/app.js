function login(){
    let emailinput = document.getElementById('email-input').value;
    let passwordinput = document.getElementById('password').value

    let dataobject = {
        email : emailinput,
        password : passwordinput
    }
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200 ){
            document.getElementById('login-status').innerHTML = 'LOGIN SUCCESS'
            let tokenObject = JSON.parse(this.responseText)
            console.log(tokenObject)
            Cookies.set('username', dataobject.email)
            Cookies.set('userToken', tokenObject.token)
            window.open('home.html', '_self')
        }
        else if (this.readyState != 4){
            document.getElementById('login-status').innerHTML = 'Loading'
        }
        else{
            document.getElementById('login-status').innerHTML = 'LOGIN Failed'
        }
    };
    ajax.open('POST', 'https://reqres.in/api/login', true);
    ajax.setRequestHeader('Content-Type', 'application/JSON')
    ajax.send(JSON.stringify(dataobject));
}


document.getElementById('login-user').addEventListener('click', login)