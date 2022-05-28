

var $=document;

const menuburger=$.getElementById("menu-burger");
const list=$.querySelector(".li-burger");
var bool=true;
menuburger.addEventListener('click',()=>{

        if(bool==true){

            menuburger.classList.add('open');
            list.style.left= 0;
            bool= false;

        }
        else{

            menuburger.classList.remove('open');
            list.style.left= '-70%';
            bool=true;

        }

})