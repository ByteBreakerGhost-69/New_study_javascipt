// closures adalah sebuah fungsi yang mengingat lingkungan asalnya, meskipun fungsi di jalankan di luang lingkup asalnya.

// analogi: bayangkan kamu pindah rumah, tapi kamu masih membawa kunci rumah lamamu, kamu masih tetep bisa membuka pintu rumah lamamu kapan aja.

<! contoh kode: >
function buatSalam(sapaan) {
    return function(nama) {
        return sapaan + ", " + nama; // Fungsi ini "mengingat" variabel 'sapaan'
    }
}

const selamatPagi = buatSalam("Selamat Pagi");
console.log(selamatPagi("ByteBreaker")); // Output: Selamat Pagi, ByteBreaker

<! kenapa penting
//closurius sering di pakai untuk membuat private variable
