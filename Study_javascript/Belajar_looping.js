// looping ( pwrulangan ) itu berfunhsi untuk menyuruh komputer untuk melakukan hal yang sama berulang kali, tanpa kamu menulis codenya sendiri ( satu persatu )

// bayangkan kamu di suruh tulis 1 - 10.000 pasti capek kan, jadi dengan loop hanya butuh 3 baris untuk itu.

// ada 3 jenis looping
// looping pertaman itu ( for loop ( pengulangan terukur ))
// di lakukan jika sudab tau mau melakukam loop berapa 

// i dimulai dari 1; berhenti jika i > 5; setiap putaran i ditambah 1
for (let i = 1; i <= 5; i++) {
    console.log("Putaran ke-" + i);
}


// looping yabg kedua itu ( while loop ( pengulangan berdasarkan kondisi ))
// di gunakkan jika belum tau melakukan loop berapa

let energi = 3;

while (energi > 0) {
    console.log("Sedang berlari... Sisa energi: " + energi);
    energi--; // Kurangi energi agar suatu saat berhenti
}
console.log("Istirahat, energi habis.");


// looping yang ke 3 itu ( forEach( khusus untuk array ) )

let daftarBuah = ["Apel", "Mangga", "Jeruk"];

// "buah" di sini mewakili tiap item di dalam array secara otomatis
daftarBuah.forEach(function(buah) {
    console.log("Saya mau makan " + buah);
});

