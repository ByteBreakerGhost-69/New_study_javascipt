//hight order functions adalah fungsi yang menerima fungsi lain sebagai argument dan mengembalikan fungsi sebagai hasilnya.
 // ada 3 metode yang sering di gunakkan untuk mengola data( array )
 
.filter(): menyaring data,tergantung kondisi tertentu.
.map(): mengubah semua element menjadi bentuk tertentu.
.reduce(): menggabungkan semua elemwnt menjadi satu nilai tunggal.  

<! contoh gabungan: >
const angka = [1, 2, 8, 10, 4, 7];

const hasil = angka
    .filter(a => a > 5)      // [8, 10, 7]
    .map(a => a * 2)         // [16, 20, 14]
    .reduce((acc, curr) => acc + curr); // 16 + 20 + 14 = 50

console.log(hasil); // 50
  
