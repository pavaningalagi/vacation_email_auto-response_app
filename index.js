
const login = ()=>{
    let url = `https://accounts.google.com/o/oauth2/v2/auth`

    let form = document.createElement('form')
    form.setAttribute('method', 'GET');
    form.setAttribute('action',url);

    let params = {
        'client_id':"734587669626-akevlpl16ukr6fmtg5um154oiagc2rof.apps.googleusercontent.com",
        'redirect_uri':"http://127.0.0.1:5500/mailbox.html",
        'esponse_type':"token",
        'scope':"https://mail.google.com/",
        'include_grant_scopes':true,
        'state':'pass-through-value'
    };
}