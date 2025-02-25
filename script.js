document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("paper-text");
    const music = document.getElementById("background-music");
    const startButton = document.getElementById("start-btn");
    const paper = document.querySelector(".paper");

    // Teks yang akan diketik otomatis
    const textToType = `
        Selamat pagi yaa aku nggak tau kegiatan hari mu seperti apa, tapi cuman mau bilang
        tetap selalu berdoa sebelum berangkat kegiatan dan aktfitas lainnya dan jagan lupa tersenyum
        soal senyum mu yang terbaik dalam hidup mu.❤️

        Ada satu hal pengen aku sampaikan disini, cuman mau bilang
        aku pengen banget deket sama amel tapi aku binggung harus mulai dari mana!
        Maaf ya Amel. ohiya maaf lagunya ngebosenin aku binggung pilih lagu apa jadinya
        lagunya yung kai - blue hehe.
    `;

    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            textarea.value += textToType[index];
            index++;
            setTimeout(typeText, Math.random() * (150 - 50) + 50); // Waktu mengetik acak
        }
    }

    // Event klik tombol untuk memulai musik & pengetikan
    startButton.addEventListener("click", function () {
        music.play(); // Putar musik
        startButton.style.display = "none"; // Sembunyikan tombol
        paper.style.display = "block"; // Tampilkan kertas
        setTimeout(typeText, 1000);
    });
});
