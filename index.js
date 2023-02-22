const login = document.getElementById('login');

login.onclick = ()=>{
    let url = `https://accounts.google.com/o/oauth2/v2/auth`

    let form = document.createElement('form')
    form.setAttribute('method', 'GET');
    form.setAttribute('action',url);

    let params = {
        'client_id':"",
        'redirect_uri':"http://127.0.0.1:5500/mailbox.html",
        'response_type':"token",
        'scope':"https://mail.google.com/",
        'include_grant_scopes':true,
        'state':'pass-through-value'
    };

    for(let key in params) {
        let input = document.createElement('input');
        input.setAttribute('type','hidden');
        input.setAttribute('name', key);
        input.setAttribute('value', params[key]);
        form.appendChild(input);
    };
    document.body.appendChild(form);
    form.submit();
}
