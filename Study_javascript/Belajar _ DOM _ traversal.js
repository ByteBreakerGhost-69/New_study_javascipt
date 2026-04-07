<!-- traversal itu ibarat kamu jalan jalan di silsilah keluarga html, ibarat silsilah keluarga ada orang tua ( perent ), anak ( child ), saudara kandung ( sibling ) -->


<!-- menelusuri ke atas ( mencari indux ) -->
// gunakkan ini jika kamu ingin memanipulasi element yang memnungkus elemwnt yang sedang kamu pegang.
.perentElement() // mengambil 1 tibgkat diatasnya ( ayah, ibu )
.perentNode() // mirip dengan perentElement tapi bisa mengambil node apa aja ( termasuk node/komentar), 

<!-- contoh -->
const tombolHapus = document.querySelector('.btn-close');
const kotakSatuBaris = tombolHapus.parentElement; 
kotakSatuBaris.style.display = 'none'; // Menghilangkan kotak saat tombol diklik


<!-- menelusuri ke bawah ( mencari anak )
.quarySelector()/.querySelectorAll():// cara paling umum mencari anak dari element tersebut.
childern:// mengambil semua anak yang beruoa element html.
firstElementChild():// mengambil anak pertama.
lastElementChild():// mengambil anak terakhir
<!-- contoh -->
const daftar = document.querySelector('ul');
const anakPertama = daftar.firstElementChild;
anakPertama.style.color = 'red';


<!-- menelusuri ke samping ( mencari saudara )-->
.nextElementSibling(): // mencari adrk ( element setelahnya )
.previousElementSibling(): // mencari kakak ( element sebelumnya )

<! -- contoh -->
const inputNama = document.querySelector('#input-nama');
const labelInput = inputNama.previousElementSibling; 
labelInput.innerHTML = 'Silahkan Isi Nama:';



<! === implementasi gabungan ===!>
html:
<div class="container">
    <div class="card">
        <span>Data Sensor 1</span>
        <button class="close">X</button>
    </div>
    <div class="card">
        <span>Data Sensor 2</span>
        <button class="close">X</button>
    </div>
</div>

js:
// 1. Ambil semua tombol close
const closeButtons = document.querySelectorAll('.close');

// 2. Gunakan Looping (materi sebelumnya)
closeButtons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        
        // --- PROSES TRAVERSAL ---
        
        // Kita klik tombol (btn), tapi kita mau hapus div class="card" (induknya)
        const kartuYangMauDihapus = btn.parentElement;
        
        // Hapus kartu tersebut dari layar
        kartuYangMauDihapus.style.display = 'none';
        
        // e.target juga bisa digunakan sebagai alternatif btn
        // e.target.parentElement.style.opacity = '0';
    });
});
