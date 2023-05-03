let wrapper = document.querySelector(".wrapper");
let u_inp = document.querySelector(".form input");
let btn = document.querySelector(".form button");
let immgg=document.querySelector("qrcode img")

btn.addEventListener("click", () => {
  let inputt=u_inp.value;
    if (!inputt) {
    return;
  }else{
 immgg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=  "+inputt;
 btn.innerText="wait..."
 wrapper.classList.add("active")
  }
});
