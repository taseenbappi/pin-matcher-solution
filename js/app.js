//get rangom number
function getRandomNum() {
    const pin = Math.round(Math.random() * 10000);
    const newPin = pin + "";
    if (newPin.length == 4) {
        const gereratePin = document.getElementById('gererate-pin');
        gereratePin.value = newPin;
    }
    else {
        return getRandomNum();
    }
}
//set random number
document.getElementById('gererate-pin-btn').addEventListener('click', function () {
    getRandomNum();

})

//key pad value
document.getElementById('key-pad').addEventListener('click', function (event) {
    let keyPadVal = event.target.innerText;
    let keyNum = document.getElementById('key-input');
    if (isNaN(keyPadVal)) {
        if (keyPadVal = "C") {
            keyNum.value = '';
        }
    }
    else {
        let keyNumVal = keyNum.value;
        keyNum.value = keyNumVal + keyPadVal;
    }
});
//pin match
document.getElementById('match-submit').addEventListener('click', function (event) {
    const pin = document.getElementById('gererate-pin');
    const gereratePin = pin.value;
    const keyVal = document.getElementById('key-input');
    const keyNumber = keyVal.value;
    const notifySuccess = document.getElementById('pin-success');
    const notifyfail = document.getElementById('pin-fail');
    if (gereratePin == keyNumber) {
        notifySuccess.style.display = 'block';
        notifyfail.style.display = 'none';
    }
    else {
        notifyfail.style.display = 'block';
        notifySuccess.style.display = 'none';
    }
});
