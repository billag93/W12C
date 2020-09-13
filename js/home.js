
let token = Cookies.get('userToken');
let user = Cookies.get('username');
document.getElementById('welcome').innerHTML = '<h2> Welcome ' + user + '</h2>'

if(user == undefined){
    document.getElementById('welcome').innerHTML = 'Invalid Login'
}

function colordisplay() {

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            allcolors = JSON.parse(this.responseText)
            console.log(allcolors)

            for (var index = 0; index < allcolors.data.length; index++) {
        
             document.getElementById('colors').innerHTML += '<h3> Name: ' + allcolors.data[index].name + '</h3>';
             document.getElementById('colors').innerHTML += '<h3> Year: ' + allcolors.data[index].year + '</h3>';
             document.getElementById('colors').innerHTML += '<div style= "width :300px; height:300px; background:' + allcolors.data[index].color + ' " > </div>';
            
            }
        }
        else if (this.readyState != 4) { console.log("Loading") }

        else {
            console.log("something went wrong")
            console.log(this.status)
        }
    }
    ajax.open("GET", 'https://reqres.in/api/unknown', true)
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}

colordisplay();

function logout(){
    Cookies.remove('userToken')
    Cookies.remove('username')
    window.open('index.html' , '_self')
}

document.getElementById('logout').addEventListener('click', logout)