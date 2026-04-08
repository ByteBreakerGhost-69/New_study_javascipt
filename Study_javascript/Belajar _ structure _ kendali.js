// pengondisian ( if ... else )
// untuk memberikan intruksi agar program dapat berfikir
let nilai = 80;
if (nilai >= 75) {
    console.log("Lulus!");
} else {
    console.log("Coba lagi.");
}

// pengulangan ( for loop )
// untuk menjalankan code berkali kali tanpa mengulang
for (let i = 1; i <= 5; i++) {
    console.log("Baris ke-" + i);
}


//do....while 
//structure penulisan:
do {
    // 1. Jalankan kode ini dulu
} while ( kondisi ); // 2. Baru cek, apakah harus diulang?

//contoh dasar:
let i = 1;

do {
    console.log("Angka ke-" + i);
    i++; // Kita tambah 1 agar angkanya naik
} while (i <= 5);

