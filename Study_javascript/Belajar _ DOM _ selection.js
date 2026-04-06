// 1. .getElementByld()
// ini adalah cara spesifik dan cara paling cept, di gunakan jika element html memiliki atribut id
//kode html:
<h1 id="judul"> hello world </h1>

//kode js:
const judul = document.getElementById('judul');
judul.style.color = 'red'; // Mengubah warna teks h1 menjadi merah


// 2. .getElementByTagName()
// di gunakkan untuk mengambil element berdasarkan sama tags nya ( seperti p, h, li ),
//kode html:
<p>paragraf 1</p><p>paragraft 2</p>

//kode js:
const p = document.getElementsByTagName('p');
// Karena hasilnya mirip array, kita harus pakai indeks [0]
p[0].style.backgroundColor = 'yellow'; // Hanya paragraf pertama yang kuning


// 3. getElementByClassName()
//mirip seperti TagName, tapi ini mencari berdasarkan atribut class.
 //kode html:
 <span class="teks-biru">teks1</span>
 
 //kode js:
 const span = document.getElementsByClassName('teks-biru');
span[0].style.color = 'blue';


// 4. querySelector()
// bisa menggunakkan selector css apapun, namun hanya mengambil 1 element pertama yang ditemukan.
const itemSatu = document.querySelector('#container li:first-child');
itemSatu.style.fontWeight = 'bold';


// 5. querySelectorAll()
//sama seperti querySelector, tapi mengambil semua element yabg cocok dengan selector tersebut.
const semuaLi = document.querySelectorAll('li');
semuaLi.forEach(function(el) {
    el.style.backgroundColor = 'lightgrey';
});

//contoh gabungam:
//kode html:
<div id="container">
    <h1 id="nama-user">Username</h1>
    <p class="deskripsi">Status: Offline</p>
    <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
    </ul>
    <button id="btn-update">Update Profil</button>
</div>

//kode js:
// 1. Tangkap semua elemen yang dibutuhkan
const nama = document.getElementById('nama-user');          // Pakai ID
const status = document.querySelector('.deskripsi');        // Pakai Selector Class
const daftarSkill = document.querySelectorAll('li');        // Pakai Selector All
const tombol = document.getElementById('btn-update');      // Pakai ID

// 2. Gabungkan dalam satu aksi saat tombol diklik
tombol.addEventListener('click', function() {
    // Ubah Nama
    nama.innerHTML = "ByteBreaker";
    nama.style.color = "darkblue";

    // Ubah Status
    status.innerHTML = "Status: <strong>Online</strong>";
    status.style.color = "green";

    // Ubah Semua List Skill menggunakan Looping (Materi sebelumnya!)
    const skills = ["Solidity", "JavaScript", "AI Prompting"];
    daftarSkill.forEach(function(item, index) {
        if(skills[index]) {
            item.innerHTML = skills[index];
            item.style.color = "purple";
        }
    });

    alert("Profil Berhasil Diperbarui!");
});
