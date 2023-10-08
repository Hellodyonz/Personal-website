const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('nav-link'.forEach(n => n.addEventListener('click'), ()=> {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))

// transisi sertifikat

const images = [
    "/Img/sertif-skilvul.png",
    "/Img/certificate-festida.jpg",
    "/Img/sertif-adobe.png",
    "/Img/certificate-festida2.jpg"
];

const imgElement = document.querySelector(".achievements-section img");
let currentIndex = 0;

function changeImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    const imageUrl = images[currentIndex];
    imgElement.src = imageUrl;
}

setInterval(changeImage, 3000); // Ganti gambar setiap 3 detik
