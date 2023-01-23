let activeInput=()=>{
    document.querySelector(".input-warp").style.bottom="6vh";
    document.querySelector(".input-warp").style.background="#fff";
    document.querySelector(".nav-warp").style.bottom="-15vh";
    document.querySelector(".mask").style.opacity=1;
};
let blurInput=()=>{
    document.querySelector(".input-warp").style.bottom="53vh";
    document.querySelector(".input-warp").style.background="none";
    document.querySelector(".nav-warp").style.bottom="37vh";
    document.querySelector(".mask").style.opacity=0;
};