function myFunction() {
    var r = confirm("Press a button!");
    if (r == true) {
        navigator.app.exitApp();
    } else {
        inAppBrowserAPI();
    }
}