function copyToClipboard() {
    var text = document.getElementById("txt-content").innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}

document.getElementById("copy-button").onclick =  function (){
    copyToClipboard()
};