// berbeda dari array yabg menggunakkan angka ( index ). object menggunakkan key ( nama label ) dan value ( nilai ). ini memungkinkan kamu menyimpan data yang lebih complex dan deskriptif.
// analogy: seperti ktp dan profil media sosial, ada label " nama ", " alamat ", dan " pekerjaan "
// kapan di pakai ? saat kamu ingin menggambarkan 1 entitas yang punya banyak atribut.

let user = {
    nama: "ByteBreaker",
    umur: 20,
    isLulus: true,
    skill: ["Solidity", "Javascript"] // Object bisa berisi Array!
};

// Mengakses data (menggunakan titik / dot notation)
console.log(user.nama); // Hasil: "ByteBreaker"
console.log(user.skill[0]); // Hasil: "Solidity"

// Mengubah data
user.umur = 21;

