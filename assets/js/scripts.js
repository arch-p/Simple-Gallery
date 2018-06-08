window.addEventListener('resize', adjustImages);

function adjustImages() {
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery-image');

    const galleryWidth = gallery.offsetWidth;
    const totalImages = images.length;
    const newImageWidth = galleryWidth / totalImages;

    images.forEach(image => {
        image.style.width = `${newImageWidth}px`;
    });
}

window.addEventListener('DOMContentLoaded', adjustImages);

document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const fullImageViewer = document.querySelector('.full-image-viewer');
    const fullImage = fullImageViewer.querySelector('img');
    let currentImageIndex = 0;

    galleryImages.forEach(function(image, index) {
        image.addEventListener('click', function() {
            const imagePath = this.getAttribute('src');
            currentImageIndex = index;

            
            fullImage.setAttribute('src', imagePath);

            
            fullImageViewer.style.display = 'block';
        });
    });

    
    const closeBtn = fullImageViewer.querySelector('.close');
    closeBtn.addEventListener('click', function() {
        fullImageViewer.style.display = 'none';
    });

    
    const prevArrow = fullImageViewer.querySelector('.prev');
    const nextArrow = fullImageViewer.querySelector('.next');

    prevArrow.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        const imagePath = galleryImages[currentImageIndex].getAttribute('src');
        fullImage.setAttribute('src', imagePath);
    });

    nextArrow.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        const imagePath = galleryImages[currentImageIndex].getAttribute('src');
        fullImage.setAttribute('src', imagePath);
    });
});

