// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.
console.log('-----no 1-----')
function bandingkanAngka(angka1, angka2) {
     const angka ='';{
    if (angka1 < angka2){
     console.log("true")
  } else if (angka1 == angka2){
    console.log(-1)
  } else {
    console.log("false")
  }   return angka;
    
  } 
}
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

// Problem
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
// Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".
console.log('-----no 2-----')
function balikKata(kata) {
    let hasil = '';
    for(i = kata.length - 1; i > 0; i--){
        hasil += kata[i]
    } return hasil;
} 
// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan 
// ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".
console.log('-----no 3-----')
function konversiMenit(menit) {
const jam = Math.floor(menit / 60)
const smenit = menit % 60
let hasil;
if(smenit < 10){
    hasil = '0' + smenit
}else {
    hasil = smenit
} return `${jam}:${hasil}`
}
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00



//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
console.log('-----no 4-----')
function xo(str) {
let x = 0;
let o = 0;
for(i = 0; i < str.length; i++){
    if(str[i] === 'x'){
        x++
    } else if(str[i] === 'o'){
        o++
    }
}  return x === o
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
