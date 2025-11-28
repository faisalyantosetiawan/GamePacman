// Konfigurasi game
const config = {
    boardWidth: 31, // Lebar papan game (kolom)
    boardHeight: 21, // Tinggi papan game (baris)
    cellSize: 20, // Ukuran setiap sel dalam pixel
    pacmanSpeed: 150, // Kecepatan Pacman (ms)
    ghostSpeed: 200, // Kecepatan hantu (ms)
    scaredTime: 10000 // Waktu mode takut (ms)
};

// Status game
let gameState = {
    score: 0, // Skor pemain
    lives: 3, // Jumlah nyawa
    dots: 0, // Jumlah titik yang tersisa
    isRunning: false, // Status apakah game sedang berjalan
    isScared: false, // Status apakah hantu dalam mode takut
    scaredTimer: null // Timer untuk mode takut
};