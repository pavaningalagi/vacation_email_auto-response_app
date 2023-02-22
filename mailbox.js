const logout = document.getElementById('logout');
const container = document.getElementById('container');


let params = {};

let regex = /([^&=]+)=([^&]*)/g, m
let d = location.href;
console.log(d);

while(m = regex.exec(location.href)) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2])
}


if(Object.keys(params).length>0){
    localStorage.setItem('authInfo',JSON.stringify(params));
}

window.history.pushState({}, document.title,'/'+'mailbox.html');

let info = JSON.parse(localStorage.getItem('authInfo'));
console.log(info);
console.log(info['access_token']);
console.log(info['expires_in']);

fetch('https://mail.google.com/',{
    headers: { 
        'Authorization':`Bearer ${info['access_token']}`
    }
})
.then((data)=> data.json())
.then((info)=> {
    console.log(info);
    // const name = document.getElementById('name');
    //       name.innerHTML = info.name;
    
})

