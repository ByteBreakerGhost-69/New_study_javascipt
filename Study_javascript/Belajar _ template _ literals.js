<! fitur utama: >
<! interpolasi variable: menggunakkan ${nama_variable}
<! multi-line string: bisa enter ke bawah tanpa perlu /n
<! Embedded experession: bisa memasukkan logika matrmatika dan fungsi lanhsung di dalam string

<! contoh code:
const nama = "ByteBreaker";
const umur = 19;

// Cara Lama
console.log("Halo, nama saya " + nama + " dan saya umur " + umur + " tahun.");

// Cara Baru (Template Literals)
console.log(`Halo, nama saya ${nama} dan saya umur ${umur} tahun.`);

// Multi-line (Sangat berguna untuk template HTML)
const html = `
    <div>
        <h2>${nama}</h2>
        <p>Status: Mahasiswa</p>
    </div>
`;
  
