// 1. document.createElement()
const liBaru = document.createElement('li');


// 2. dokument.createTextNode()
const teksLi = document.createTextNode('Item Baru dari JS');


// 3. appendChild() ( menempelkan)
// Masukkan teks ke dalam li
liBaru.appendChild(teksLi);

// Cari tempat di HTML (misal ul dengan id 'daftar')
const ul = document.querySelector('ul#daftar');

// Tempelkan li ke dalam ul
ul.appendChild(liBaru);


// 4. insertBefore()
// jika appendChild selalu menempelkan di paling bawah, insertBefore di gunakkan 
// jika kamu ingin menyelipkan element baru di antara elemen lainnya.


// 5. removeChild() & replaceChild()
// removeChild() itu untuk menghapus element dari halaman.
// repalceChild() itu untuk menukar element lama dengan yang baru.

<!-- contoh: -->
<div id="container">
    <ul id="log-list">
        <li>Sistem Ready...</li>
    </ul>
    <button id="btn-tambah">Tambah Log Data</button>
</div>

// 1. Seleksi elemen pemicu dan kontainer
const tombol = document.getElementById('btn-tambah');
const ul = document.getElementById('log-list');

// 2. Buat fungsi saat tombol diklik
tombol.addEventListener('click', function() {
    
    // --- PROSES NODE MANIPULATION ---
    
    // A. Bikin elemen li baru
    const liBaru = document.createElement('li');
    
    // B. Bikin isi teksnya (misal pakai waktu sekarang)
    const waktu = new Date().toLocaleTimeString();
    const teksLog = document.createTextNode('Data diterima pada: ' + waktu);
    
    // C. Gabungkan teks ke dalam li
    liBaru.appendChild(teksLog);
    
    // D. Beri sedikit style agar menarik (Manipulation Style)
    liBaru.style.color = 'green';
    liBaru.style.fontWeight = 'bold';
    
    // E. Tempelkan ke dalam UL (Muncul di layar!)
    ul.appendChild(liBaru);
    
});
