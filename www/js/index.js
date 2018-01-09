var webView, osVersion;


function onDeviceReady(){
    console.log("deviceready");

    osVersion = parseFloat(device.version);

    if(window.webkit && window.webkit.messageHandlers ) {
            webView = "WKWebView" ;
        }else{
            webView = "UIWebView" ;
        }

    $('#platform').html(device.platform + " " + device.version);
    $('#webview').html(webView);
}

$(document).on('deviceready', onDeviceReady);
