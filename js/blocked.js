const block_button = document.getElementById("blocked-text");
const block_subtext = document.getElementById("blocked-subtext");
const naughty = document.getElementById("naughty");

naughty.style.display = 'none';
// block_subtext.style.display = 'none';

var f = true;

block_button.addEventListener('click',function(){
    console.log("btn clicked");
    if(f)
    {
        block_subtext.style.display = 'none';
        naughty.style.display = 'inline';
        f = false;
    }
    else{
        f = true;
        block_subtext.style.display = 'inline';
    naughty.style.display = 'none';
    }
});
