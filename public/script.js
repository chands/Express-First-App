const inpCode = document.getElementById('inpCode');
const btnEncode = document.getElementById('btnEncode');
const btnEncrypt = document.getElementById('btnEncrypt');
const code = document.getElementById('code');

//1. Encoding: base64 encode
btnEncode.onclick = function(){
    let data = inpCode.value;
    data = window.btoa(data);
    code.value = data;
}
// window.btoa("a")//in browser console convert 'string' into 'Base64'
// window.atob("YQ==")//in browser console convert 'Base64' into 'String'

//2. Encryption:
btnEncrypt.onclick = function(){
    let data = code.value;
    data = encryptData(data);
    code.value = data;
}
function encryptData(rawData){
    // let encrypted = "";//other encryption logic
    // for (let i = 0; i < rawData.length; i++) {
    //     let char = rawData.charCodeAt(i);
    //     encrypted += String.fromCharCode((char + 13) % 64);
    // }
    let encData = '';
    for(let char in rawData) {
        if(rawData[char] == rawData[char].toUpperCase()) {
            encData += rawData[char].toLowerCase();
        } else {
            encData += rawData[char].toUpperCase();
        }
    }
    return encData;
}