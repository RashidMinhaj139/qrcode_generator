const wrapper = document.querySelector(".wrapper");
const qr_input = document.querySelector(".form input");
const btn = document.querySelector(".form button");
const qr_img = document.querySelector(".qrcode img");

btn.addEventListener("click", () => {
  let qrvalue = qr_input.value;
if (!qrvalue) {
    return;
  } else {
    qr_img.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " +
      qrvalue;
    btn.innerText = "Gernerated code .........";
   wrapper.classList.add("active")
  }
});

// const wrapper = document.querySelector(".wrapper");
// const qr_input = document.querySelector(".form input");
// const btn = document.querySelector(".form button");
// const qr_img = document.querySelector(".qrcode img");

// btn.addEventListener("click", () => {
//   let qrvalue = qr_input.value;
//   if (!qrvalue) {
//     return;
//   } else {
//     qr_img.src =
//       "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " +
//       qrvalue;
//     btn.innerText = "Gernerated code .........";
//     wrapper.classList.add("active");
//   }
// });
