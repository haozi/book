define("reader/modules/hide_addressbar",function(){function hideAddressBar(isPad){screen.width>980||screen.height>980||win.navigator.standalone!==!0&&(win.innerWidth-docElement.clientWidth>1||(isPad===!0&&docElement.scrollHeight<=docElement.clientHeight&&(bodyTag=doc.getElementsByTagName("body")[0],bodyTag.style.height=docElement.clientWidth/screen.width*screen.height+"px"),setTimeout(function(){0===win.pageYOffset&&(win.scrollTo(0,1),void 0!==bodyTag&&(bodyTag.style.height=win.innerHeight+"px"),win.scrollTo(0,0))},0)))}var bodyTag,win=window,doc=document,docElement=doc.documentElement;return win.addEventListener&&win.addEventListener("orientationchange",hideAddressBar),hideAddressBar});