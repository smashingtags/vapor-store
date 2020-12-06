//Adjust page height for mobile devices running a chromium webbrowser
function setPageHeight() {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the body of the document
    document.body.style.setProperty('--vh', `${vh}px`);

    var topAppBarHeight = document.getElementById('app-bar').offsetHeight;
    var mainContent = document.getElementById('main-content');
    mainContent.style.height = 'calc(' + document.body.offsetHeight + 'px - ' + topAppBarHeight + 'px)';
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setPageHeight();

//Updates pageheight if user scrolls page
window.addEventListener('resize', function (event) {
    setPageHeight();
});

const path = require('path');



//Function for dynamically loading the page content
window.goto = function goto(event = 'Home', page = event) {
    if (event != 'Home') {
        if (event.path[0].children[0].className != 'mdc-list-item__ripple') return;
        page = event.path[0].children[2].innerHTML;
    }

    //Set the app bar title to the page name
    document.getElementById('top-app-bar-title').innerHTML = page;

    //Jquery function that dynamically loads x.html into the main content of the page by id
    $(function () {
        $('#main-content').load(path.join('..', `${page.toLowerCase().replace(/ /g, '_')}.html`));
    });
}
goto()

//Checks the theme from localstorage and updates the theme switch button
function checkTheme() {
    if (localStorage.getItem('darkmode') == 'true') {
        document.documentElement.setAttribute('data-theme', 'dark');
        try {
            document.getElementById('theme').childNodes[3].innerHTML = `brightness_high`;
            document.getElementById('theme').childNodes[5].innerHTML = `Light mode`;
        } catch (e) {
            /*Error expected*/
        }
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('darkmode', false);
        try {
            document.getElementById('theme').childNodes[3].innerHTML = `nights_stay`;
            document.getElementById('theme').childNodes[5].innerHTML = `Dark mode`;
        } catch (e) {
            /*Error expected*/
        }
    }
}

//check s the theme on startup
checkTheme();