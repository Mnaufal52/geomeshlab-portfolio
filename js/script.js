/* =========================================
   INTERSECTION OBSERVER (RADAR ANIMASI SCROLL)
   ========================================= */

// 1. Mengatur sensitivitas radar
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Animasi akan terpicu saat 15% bagian elemen sudah masuk ke layar
};

// 2. Membuat mesin observer-nya
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Jika elemen terdeteksi masuk ke layar...
        if (entry.isIntersecting) {
            // ...tambahkan kelas 'show' sebagai sinyal untuk CSS
            entry.target.classList.add('show');
            
            // (Opsional) Berhenti memantau elemen ini agar animasinya tidak berulang-ulang
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 3. Menandai target mana saja yang harus dipantau oleh radar
// Kita akan memantau semua elemen yang diberi kelas 'animate-on-scroll'
document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));
});