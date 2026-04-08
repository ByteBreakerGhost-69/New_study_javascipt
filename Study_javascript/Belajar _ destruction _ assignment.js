<!destructuring adalah cara paling gampang untuk membongkar isi array atau object ke dalam beberapa variable-variable kecil secara instan.

<! a.destructuring array
<! ururan variable di dalam kurung siku []
harus sesuai urutan index array nya.

<! contoh:
const perkenalan = ['Halo', 'nama', 'saya', 'Admin'];

// Cara Biasa
// const salam = perkenalan[0];
// const nama = perkenalan[3];

// Cara Destructuring
const [salam, , , namaUser] = perkenalan; // Kosongkan koma untuk melewati index
console.log(namaUser); // Output: Admin


<! b. Destructuring object
<! nama variable harus sama dengan nama properti yang ada di dalam object.

<! contoh:
const mhs = {
    nama: 'Budi',
    umur: 20,
    email: 'budi@gmail.com'
};

// Cara Destructuring
const { nama, umur, email } = mhs;

console.log(nama); // Output: Budi

// Jika ingin mengganti nama variabelnya:
const { nama: n, umur: u } = mhs;
console.log(n); // Output: Budi
