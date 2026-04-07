// scope adalah atyran tentabg di mana sebuah variable bisa di akses. Di javascript ada 2 jenis utama:

// Global scope: variable yang di buat di luar fungsi, bosa di akses oleh siapa aja di seluruh code.
// Local/function scope: variable yang di buat di dalam function.

let namaGlobal = "ByteBreaker"; // Global

function tesScope() {
    let namaLokal = "Admin"; // Lokal
    console.log(namaGlobal); // BISA (Global masuk ke mana saja)
}

tesScope();
// console.log(namaLokal); // ERROR! (Luar tidak bisa lihat isi dalam fungsi)

