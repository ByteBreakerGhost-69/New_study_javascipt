<!1. Execution Context (Konteks Eksekusi)

<!Bayangkan JavaScript sebagai seorang aktor yang sedang membaca naskah. Execution Context adalah "panggung" atau lingkungan tempat kode tersebut dijalankan.

<!Ada dua fase utama saat JavaScript menjalankan kodenya:
 <!1. Fase Creation (Persiapan): JavaScript memindai kode kamu dari atas ke bawah. Dia mencari variabel dan fungsi, lalu menyiapkan "wadah" di memori.
 <!2. Fase Execution (Eksekusi): JavaScript menjalankan kode baris demi baris dan mengisi nilai variabelnya.
 
 
 <!2. Hoisting (Pengangkatan)
 
<!Ini adalah fenomena unik hasil dari Fase Creation di atas. Hoisting membuat variabel atau fungsi seolah-olah "diangkat" ke bagian paling atas kode, meskipun kamu menulisnya di bawah.

<!Contoh Aneh tapi Nyata:
console.log(nama); // Output: undefined (Bukan error!)
var nama = "ByteBreaker";

<!Kenapa tidak error? Karena pada Fase Creation, JavaScript sudah melihat ada var nama dan menyiapkannya di memori dengan nilai undefined. Itulah Hoisting.

<!Catatan Penting: Hoisting pada let dan const berbeda. Mereka tetap diangkat, tapi JavaScript melarang kamu mengaksesnya sebelum dideklarasikan (daerah ini disebut Temporal Dead Zone). Jadi, selalu gunakan let atau const agar kodemu lebih aman.


<!3. Scope (Ruang Lingkup)

<!Scope menentukan di mana sebuah variabel bisa diakses. Bayangkan seperti kaca film mobil: orang di dalam bisa melihat keluar, tapi orang di luar tidak bisa melihat ke dalam.
 <!Global Scope: Variabel yang dideklarasikan di luar fungsi apa pun. Bisa diakses dari mana saja.
 <!Local / Function Scope: Variabel yang dideklarasikan di dalam fungsi. Hanya bisa diakses di dalam fungsi tersebut.
 
 
<!4. Scope Chain (Rantai Lingkup)
 <!Jika JavaScript tidak menemukan sebuah variabel di dalam fungsi (lokal), dia tidak langsung menyerah. Dia akan melihat ke atas (ke lingkup induknya) sampai dia menemukannya atau sampai ke Global Scope
 
 <! contoh gabungan:
 let nama = "Global User"; // Global

function sapa() {
    let pesan = "Halo"; // Lokal
    
    function tampilkan() {
        // 'nama' diambil dari luar (Scope Chain)
        // 'pesan' diambil dari luar (Scope Chain)
        console.log(pesan + " " + nama); 
    }
    
    tampilkan();
}

sapa(); // Output: Halo Global User


<!Kenapa Ini Penting?
<!Memahami Execution Context dan Scope akan membantumu menghindari bug aneh seperti variabel yang tiba-tiba undefined atau variabel yang nilainya tertukar karena konflik nama (Variable Shadowing).
