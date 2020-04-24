let typeString = ["Nattapon","Developer","Entrepreneur"];
let i = 0;
let count = 0;
let selectedText = '';
let text = '';

(function type() {

    if(count == typeString.length){
        count = 0;
    }
    selectedText = typeString[count];
    text = selectedText.slice(0, ++i);
    document.getElementById('typing').innerHTML = text;
    if(text.length === selectedText.length) {
        count++;
        i = 0;
    }

    setTimeout(type,500);


}());
