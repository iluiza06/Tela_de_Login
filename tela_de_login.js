const images = [
    './img/Fotos-16.jpg',
     './img/Fotos-98.jpg',
     './img/DSC_1299.jpg',
     './img/DSC_3845.jpg',
     './img/DSC_6947.jpg',
     './img/Limpeza Forró Caju-55.jpg',
     './img/Projeto Verão-22.JPG',
     './img/WhatsApp Image 2023-09-13 at 12.00.21(3).jpeg'
];

const randomIndex =
Math.floor(Math.random() * images.length);
const selectedImage = images [randomIndex];

document.getElementById('background').style.backgroundImage = `url('${selectedImage}')`;