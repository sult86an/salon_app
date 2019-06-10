document.addEventListener("deviceready", inAppBrowserAPI, false);


function inAppBrowserAPI() {
    var optionArr = [
        'location=no',
        'hidden=yes',
        'clearcache=no',
        'clearsessioncache=no',
        'transitionstyle=fliphrizontal',
        'toolbar=no',
        'closebuttoncaption=Exit',
        'toolbarposition=bottom',
        'disallowoverscroll=yes',
        'enableViewportScale=yes',
        'mediaPlaybackRequireUserAction=yes',
        'allowInlineMediaPlayback=yes',
        'keyboardDisplayRequiresUserAction=no',
        'suppressesIncrementRendering=yes',
        'presentationstle=formsheet',
        'zoom=no',
        'hardwareback=yes',
        'fullscreen=yes'
    ]

    var options = optionArr.join();

    if (navigator.connection.type == Connection.NONE) {
        navigator.notification.alert('لا يوجد اتصال بالانترنت يرجى التحقق من ذالك');
    } else {
        var browserOptions = window.open('https://mobile.skbah.com/','_blank', options);
        browserOptions.addEventListener('loadstart', loadStartCallBack);
        browserOptions.addEventListener('loadstop', loadStopCallBack);
        browserOptions.addEventListener('loaderror', loadErrorCallBack);
        function loadStartCallBack() {
            browserOptions.show();
        }

        function loadStopCallBack() {
            if (browserOptions != undefined) {
                $('.loader-wrapper').html("");
                browserOptions.show();
            }
        };
        function loadErrorCallBack() {

            var scriptErrorMesssage = "alert('لا يوجد اتصال بالانترنت يرجى التحقق من ذالك ');";
            browserOptions.executeScript({ code: scriptErrorMesssage }, executeScriptCallBack);

            browserOptions.close();

            browserOptions = undefined;
        }

        function executeScriptCallBack() {
            $('.loader-wrapper').html("");
            navigator.app.exitApp();
        }
    }
}
