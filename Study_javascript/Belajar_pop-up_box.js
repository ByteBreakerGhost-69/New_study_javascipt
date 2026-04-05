// alert(): hanya memberikan informasi ( tombol ok aja )
// prompt(): meminta input tulisan ( mengembalikan nilai string )
// confirm(): meminta konfirmasi ( mengenai true jika ok, false jika cancel )


// Function untuk mengecek usia
function cekKelayakan(usia) {
    if (usia >= 18) {
        return "Boleh masuk.";
    } else {
        return "Belum cukup umur.";
    }
}

// Interaksi dengan User
let inputUsia = prompt("Masukkan usiamu:");
let hasilCek = cekKelayakan(inputUsia);

alert(hasilCek);

