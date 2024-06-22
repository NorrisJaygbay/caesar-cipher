function encrypt() {
    let encryptKey = parseInt(document.getElementById("encryptkey").value);

    if (isValidShift(encryptKey)) {
        let plaintext = document.getElementById("enterText").value;
        let encryptedText = caesarCipher(plaintext, encryptKey);
        document.getElementById("encryptedText").value = encryptedText;
    } else {
        alert("Key value must be between 1 and 25.");
    }
}

function decrypt() {
    let decryptKey = parseInt(document.getElementById("decryptKey").value);
    if (isValidShift(decryptKey)) {
        let plaintext = document.getElementById("enterText").value;
        let encryptedText = document.getElementById("decryptCiphertext").value;
        let decryptedtext = caesarCipher(encryptedText, -decryptKey);
        document.getElementById("decryptedtext").value = decryptedtext;
    } else {
        alert("Key value must be between 1 and 25.");
    }
}

function caesarCipher(str, decryptKey) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);
            let base = (code >= 65 && code <= 90) ? 65 : 97;
            return String.fromCharCode(((code - base + decryptKey + 26) % 26) + base);
        }
        return char;
    }).join('');
}

function isValidShift(decryptKey) {
    return decryptKey >= 1 && decryptKey <= 25;
}