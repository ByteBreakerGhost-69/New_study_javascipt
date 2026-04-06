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
