<!-- declarasi variabel pada javascript -->
<!-- let = namanya bisa di ubah setelah deklarasi -->
<!-- const = nilainya tidak bisa diubah setelah inisialisasi-->

<!-- type data javascript -->
<!-- 1. string di gunakan untuk mempresentasikan teks -->
<!-- 2. Number digunakan untuk mempresentasikan angka, baik bilangan bulat (integer) maupun bilangan desimal (floting-point) -->
<!-- 3. Boolean: true dan false digunakan untuk mempresentasikan nilai angka -->

let skor = 10; // let untuk data yang nilainya bisa berubah 
skor = 20; // Ini boleh

const nama = "ByteBreaker"; //const untuk data yang nilainya tetap 
// nama = "Ghost"; // Ini akan error karena const tidak bisa diubah

<!-- contoh -->
 let namaMateri = "javascript";
 let namaAkhir = 95;
 let statusOnline = true;
 let buah = ["Apel", "Jeruk"];

 console.log(namaMateri);
 console.log(namaAkhir);
 console.log(statusOnline);
 console.log(buah);

 alert(namaMateri + " " + namaAkhir);
 console.log(namaMateri + " " + namaAkhir);
 document.write(namaMateri + " " + namaAkhir);

 document.write(`saya ${namaMateri} dan aku mendapatkan nilai s${namaAkhir} ${statusOnline}`);

 namaMateri = "Javascript untuk aku";
 console.log(namaMateri);
