// bubling adalah salah satu materi unik dan membingungkan di DOM javascript 
// bubling Dalam DOM (Document Object Model), saat sebuah elemen menerima suatu event (misalnya klik), event tersebut tidak hanya terjadi pada elemen itu saja. Event akan bergerak naik ke atas, yaitu ke elemen induknya, lalu ke induk berikutnya, dan seterusnya hingga mencapai tingkat paling atas seperti document atau window.

<!-- contoh -->
html:
<div class="wadah" style="padding: 50px; background: red;">
    <button class="tombol">Klik Saya</button>
</div>

js:
const wadah = document.querySelector('.wadah');
const tombol = document.querySelector('.tombol');

wadah.addEventListener('click', function() {
    alert('Wadah diklik!');
});

tombol.addEventListener('click', function() {
    alert('Tombol diklik!');
});


<!-- cara menghentikan bubling (e.stopPropagation())
tombol.addEventListener('click', function(e) { // Tambahkan parameter 'e' (event)
    alert('Tombol diklik!');
    e.stopPropagation(); // "Berhenti di sini! Jangan naik ke induk!"
});

//Walaupun event bubbling kadang terlihat seperti masalah, sebenarnya bubbling memiliki manfaat besar yang disebut Event Delegation.

//Bayangkan kamu memiliki daftar berisi 1000 item.Jika kamu menambahkan addEventListener ke setiap item satu per satu, hal itu bisa membuat browser menjadi lebih berat dan lambat.

//Sebagai gantinya, kamu cukup menambahkan satu addEventListener saja pada elemen induknya. Karena adanya bubbling, saat salah satu item diklik, event tersebut akan naik ke induknya, sehingga induk tetap bisa mendeteksi klik tersebut.

<!=== contoh implementasi ===>
const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    // Cek apakah yang diklik benar-benar elemen dengan class 'card'
    if (e.target.className == 'card') {
        e.target.style.backgroundColor = 'yellow';
    }
});
  
