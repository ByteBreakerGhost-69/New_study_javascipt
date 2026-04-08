<! rest & spread adalah bagaimana kamu mengolah banyak data dengan ringkas.

<! spread operator & rest parameter keduanya sama sama memakai simbol yang sama, yaitu (...), tapi memiliki fungsi yang kebalikan.

<!a. spread operator (memecah)
<!gunakkan ini untuk memecah element object/array menjadi element-element tunggal.

<! contoh:
const mhs = ['Budi', 'Ani'];
const dosen = ['Sandi', 'Dika'];

// Menggabungkan
const semua = [...mhs, 'Fajar', ...dosen]; 
console.log(semua); // ['Budi', 'Ani', 'Fajar', 'Sandi', 'Dika']

// Menyalin Object
const user = { nama: 'ByteBreaker', role: 'Admin' };
const userBaru = { ...user, status: 'Active' };


<!b. rest parameter (penggabungan)
<!gunakan parameter dungsi untuk menangkap semua argument yabg tersisa dan menggabungkannya menjadi sebuah array.

<!contoh:
function jumlahkan(...angka) { // Menangkap semua angka yang dimasukkan
    return angka.reduce((acc, curr) => acc + curr);
}

console.log(jumlahkan(1, 2, 3, 4, 5)); // Output: 15

