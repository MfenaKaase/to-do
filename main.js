'use strict';

let myNodeList = document.getElementsByTagName('li');
for(let i = 0; i < myNodeList.length; i++) {
    let span = document.createElement('span');
    let txt = document.createTextNode('\u00d7');
    span.className = 'close';
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
};

let close = document.getElementsByClassName('close');
let i = 0;
for(i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = 'none';
    }
}

let list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
            ev.target.classList.toggle('checked');
}, false);    

function newActivity() {
    let listItem = document.createElement('li');
    let inputValue = document.getElementById('myInput').value;
    let activity = document.createTextNode(inputValue);

    listItem.appendChild(activity);
    if (inputValue === '') {
        alert("Quit playing around, type something!");
    } else {
        document.getElementById('myUl').appendChild(listItem);
    }
    document.getElementById('myInput').value = "";
    let span = document.createElement('span');
    let txt = document.createTextNode('\u00d7');
    span.className = 'close';
    span.appendChild(txt);
    listItem.appendChild(span);

    for(i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = 'none';
        }
    }
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>{
        navigator.serviceWorker.register('./sw.js')
        .then(reg => {
            console.log('Registered! ' + reg);
        }).catch(err =>  {
            console.log('Registration failed! ' + err);
        });
    });
}