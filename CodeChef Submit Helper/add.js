function addSubmitButton () {
    var pathArray = window.location.pathname.split( '/' );
    if ( pathArray[pathArray.length-2] == "problems" ) {
        var ul = document.getElementsByClassName("button-list");
        if(ul[0].childNodes.length==5){
            var content = ul[0].innerHTML;
            var problemId = pathArray[pathArray.length-1];
            ul[0].innerHTML = "<li><a href=\"/submit/" + problemId + "\">Submit</a></li>" + content;
        }
    }
}
addSubmitButton();