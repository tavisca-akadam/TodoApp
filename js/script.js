function changeTab(params) {

    console.log(params);
    var home = document.getElementById('home');
    var profile = document.getElementById('profile');
    var login = document.getElementById('login');

    var nav_home = document.getElementById('nav-home');
    var nav_profile = document.getElementById('nav-profile');
    var nav_login = document.getElementById('nav-login');
    switch(params)
    {
        
        case "home":
            home.style.display = '';
            profile.style.display = 'none';
            login.style.display = 'none';

            nav_home.classList.add('active');
            nav_profile.classList.remove('active');
            nav_login.classList.remove('active');
        break;

        case "profile":
            home.style.display = 'none';
            profile.style.display = '';
            login.style.display = 'none';
            nav_home.classList.remove('active');
            nav_profile.classList.add('active');
            nav_login.classList.remove('active');
        break;

        case "login":
            home.style.display = 'none';
            profile.style.display = 'none';
            login.style.display = '';
            nav_home.classList.remove('active');
            nav_profile.classList.remove('active');
            nav_login.classList.add('active');
        break;
    }
}

function addTask() {
    var title = document.getElementById('title');
    console.log(title.value);
}