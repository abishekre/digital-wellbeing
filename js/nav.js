let homebtn =  document.getElementById("home-btn");
let btn1 =  document.getElementById("btn-mod-1");
let btn2 =  document.getElementById("btn-mod-2");
let btn3 =  document.getElementById("btn-mod-3");
let btn4 =  document.getElementById("btn-mod-4");
let navarea = document.getElementById("navarea");

const nav1 = document.getElementById("nav1");
console.log(nav1);
// let nav2 = document.querySelector("#nav2");
// let nav3 = document.querySelector("#nav3");
const nav4 = document.getElementById("nav4");

// nav1.style.display = 'none';
// nav2.style.display = 'none';
// nav3.style.display = 'none';
// nav4.style.display = 'none';

nav1.remove();
nav4.remove();
// navarea.remove();

// while (nav1.hasChildNodes()) {
//   nav1.removeChild(nav1.firstChild);
// }

// while (nav4.hasChildNodes()) {
//     nav4.removeChild(nav4.firstChild);
//   }

homebtn.addEventListener('click',function(){
    console.log('home-btn');
    navarea.innerHTML = '';
    navarea.innerHTML = '<div id="top">    <form id="newSessionForm">        <div class="newses">            <input id="newSessionName" class="newSessionName" type="text" placeholder="Name of the Session">            <input class="submit-btn" type="submit" value="Save">        </div>    </form></div><div class="mid" id="mid">    </div>'
});

btn1.addEventListener('click',function(){
    console.log('btn-1-dif');
    // navarea.innerHTML='<div id="top">    <form id="newSessionForm">        <div class="newses">            <input id="newSessionName" class="newSessionName" type="text" placeholder="Name of the Session">            <button id="submit-btn" class="submit-btn" value="Save"> Save</button>       </div>    </form></div><div class="mid" id="mid">    </div>';

});

btn2.addEventListener('click',function(){
    console.log('btn-2');
    navarea.innerHTML = '';
});

btn3.addEventListener('click',function(){
    console.log('btn-3');
    navarea.innerHTML = '';
});

btn4.addEventListener('click',function(){
    console.log('btn-4');
    // navarea.innerHTML='<div class="option1"><label class="option-text" for="auto_skip_ads">Disable Ads</label><div class="check"><label class="switch"> <input type="checkbox" id="auto_skip_ads" class="auto_skip_ads" value="auto_skip_ads" unchecked />    <span class="slider round"></span></label></div></div>  <div class="option2">    <label class="option-text" for="remove_entire_sidebar">      Center contents    </label>    <div class="check">      <label class="switch">        <input type="checkbox" id="remove_entire_sidebar" class="remove_entire_sidebar" value="remove_entire_sidebar" unchecked />        <span class="slider round"></span>      </label>    </div>  </div>    <div class="option3">    <label class="option-text" for="remove_comments">      Disable Comments    </label>    <div class="check">      <label class="switch">        <input type="checkbox" id="remove_comments" class="remove_comments" value="remove_comments" unchecked />        <span class="slider round"></span>      </label>    </div>  </div>  <div class="manage_history-btn" id="manage_history_container">    <a id="manage_history" href="https://myactivity.google.com/product/youtube" target="_blank"><label class="manage_history-text">Manage YouTube History</label> </a>  </div>'
});