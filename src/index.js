const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let chunks = divider(expr, 10);
    let morsePhraseArr = convertToMorse(chunks);
    let arr = [];
    morsePhraseArr.forEach(element => {
        if(MORSE_TABLE.hasOwnProperty(element)) {
            arr.push(MORSE_TABLE[element]);
        } else {
            arr.push(" ");
        }
    });
    return arr.join("");
}

function convertToMorse(chunks) {
    let arrMorse = [];
    for (let i = 0; i < chunks.length; i++) {
        let arr = divider(chunks[i], 2);
        arr.forEach((currentValue, index) => {
            switch (currentValue) {
                case "00":
                    delete arr[index];
                    break;
                case "**":
                    arr[index] = " ";
                    break;
                case "10":
                    arr[index] = ".";
                    break;
                case "11":
                    arr[index] = "-";
                    break;
                default:
                    break;
            }
        }); 
        arrMorse.push(arr.join(""));
    }
    return arrMorse;
}

function divider(str, divide) {
    var chunks = [];
    for (var i = 0; i < str.length; i += divide) {
        chunks.push(str.substring(i, i + divide));
    }
    return chunks;
}

module.exports = {
    decode
}