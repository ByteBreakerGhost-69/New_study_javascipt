<!a. callback
<!cara lama. kamu memberikan fungsi ke fungsi lain untuk di jalankan setelah tugas selesai.
<!masalah: jika terlalu banyak akan mengalai callback hell ( kode menjorok ke kanan dan susah dibaca )


<!b. promise ( janji )
<!cara yang lebih modern. sebuah objevt yabg mewakili srbuah keberhasilan atau kegagalan operasi async.

<!contoh:
const janjiKencan = new Promise((resolve, reject) => {
    let ditepati = true;
    if(ditepati) resolve("Aku datang!");
    else reject("Maaf, ban bocor.");
});

janjiKencan
    .then(res => console.log(res)) // Jika berhasil
    .catch(err => console.log(err)); // Jika gagal


<!c. async & await ( the gold standart)

<!contoh:
async function ambilDataUser() {
    try {
        // 'await' menyuruh JS menunggu sampai data selesai diambil
        const response = await fetch('https://api.github.com/users/bytebreaker');
        const data = await response.json();
        console.log(data.name);
    } catch (err) {
        console.log("Ada error: ", err);
    }
}

ambilDataUser();

