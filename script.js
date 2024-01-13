let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImage");
let qrTex = document.getElementById("qrText");





function generateQr() {
    if (qrTex.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTex.value;
        imgBox.classList.add("show-img");
    } else {
        qrTex.classList.add('error');
        setTimeout(() => {
            qrTex.classList.remove('error');
        }, 1000);
    }

}