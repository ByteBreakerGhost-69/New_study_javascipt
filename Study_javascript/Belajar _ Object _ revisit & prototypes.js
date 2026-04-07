<!=== object revisit: masalah evisiensi ==>
//bayangkan kamu ingin membuat object untuk 1000 users. jika kamu menggunakkan cara biasa ( object literal atau function declaration ), setiap kali object di buat semua metode akan ikut di duplikasikan ke memory. 
//masalahnya: jika ada 1000 user berarti ada 1000 duplikasi di RAM, itu sangat boros.

function Mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    // Method ini akan diduplikasi 1000x di memori!
    mahasiswa.makan = function(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }
    return mahasiswa;
}


<! === solusi: Object.create() ===>

//Untuk menghemat memori, kita membuat satu objek terpisah (methodMahasiswa) yang menampung semua fungsi.
//Dengan Object.create(), objek mahasiswa yang baru akan "meminjam" atau memiliki koneksi ke objek metode tersebut tanpa harus menduplikasinya.
const methodMahasiswa = {
    makan: function(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }
};

function Mahasiswa(nama, energi) {
    // Menghubungkan objek baru ke methodMahasiswa
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    
    return mahasiswa;
}

let budi = Mahasiswa("Budi", 10);
console.log(budi.makan(5)); // Tetap bisa jalan karena "terhubung"


<! === prototypes ===>

//JavaScript sebenarnya punya cara bawaan untuk melakukan hal di atas secara otomatis 
//menggunakan properti .prototype. Saat kita memanggil fungsi dengan kata kunci new,
//JavaScript melakukan "sulap" di balik layar dengan membuatkan this = Object.create(Mahasiswa.prototype).
function Mahasiswa(nama, energi) {
    // Secara default, JS melakukan ini: this = Object.create(Mahasiswa.prototype);
    this.nama = nama;
    this.energi = energi;
    // Secara default, JS melakukan ini: return this;
}

// Menaruh method di dalam Prototype agar hanya ada 1 di memori
Mahasiswa.prototype.makan = function(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, energi bertambah jadi ${this.energi}!`;
};

Mahasiswa.prototype.main = function(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
};

// Cara panggilnya wajib pakai 'new'
let ani = new Mahasiswa("Ani", 20);


<! === versi modern: class ( syntactic sugar )

//Class diperkenalkan di ES6 untuk membuat penulisan di atas menjadi lebih bersih dan
//mirip dengan bahasa pemrograman lain (seperti Java atau Python).
//Namun, penting diingat bahwa di bawah tendanya, ia tetap menggunakan konsep **Prototype** yang kita bahas sebelumnya.
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }

    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain!`;
    }
}

const caca = new Mahasiswa("Caca", 15);
