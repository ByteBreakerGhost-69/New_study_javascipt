// ================================
// DECLARASI VARIABEL JAVASCRIPT
// ================================

// let = nilainya bisa diubah
// const = nilainya tidak bisa diubah setelah dibuat
// var = cara lama (tidak disarankan di JS modern)

let skor = 10; // let untuk data yang nilainya bisa berubah
skor = 20; // Ini boleh

const nama = "ByteBreaker"; // const untuk data tetap
// nama = "Ghost"; // ERROR (tidak boleh diubah)

// ================================
// TIPE DATA JAVASCRIPT
// ================================

// 1. String → teks
// 2. Number → angka (integer & decimal)
// 3. Boolean → true / false
// 4. Array → kumpulan data
// 5. Object → kumpulan properti

let namaMateri = "javascript"; // string
let nilaiAkhir = 95; // number
let statusOnline = true; // boolean
let buah = ["Apel", "Jeruk"]; // array

// Object (tambahan penting)
let siswa = {
    nama: "ByteBreaker",
    umur: 17
};

// ================================
// MENAMPILKAN DATA
// ================================

console.log(namaMateri);
console.log(nilaiAkhir);
console.log(statusOnline);
console.log(buah);
console.log(siswa);

// alert (popup browser)
alert(namaMateri + " " + nilaiAkhir);

// document.write (tampil di halaman)
document.write(namaMateri + " " + nilaiAkhir);

// Template String (cara modern)
document.write(
    `Saya belajar ${namaMateri} dan mendapatkan nilai ${nilaiAkhir} dengan status ${statusOnline}`
);

// ================================
// MENGUBAH NILAI VARIABEL
// ================================

namaMateri = "Javascript untuk aku";
console.log(namaMateri);

// ================================
// NULL vs UNDEFINED (Tambahan penting)
// ================================

let dataKosong;
console.log(dataKosong); // undefined

let kosong = null;
console.log(kosong); // null

// ================================
// SCOPE VARIABEL (Sangat Penting)
// ================================

{
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(c); // masih bisa (var keluar block)
// console.log(a); // ERROR
// console.log(b); // ERROR

// ================================
// BEST PRACTICE
// ================================

// gunakan const jika tidak berubah
const PI = 3.14;

// gunakan let jika berubah
let jumlah = 0;

// hindari var di JavaScript modern
