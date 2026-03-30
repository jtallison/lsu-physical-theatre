// Array of all available images from different production folders
const allImages = [
  'images/2008-Love-Still-Unrequited/loveSL-1.jpg',
  'images/2008-Love-Still-Unrequited/loveSL-2.jpg',
  'images/2008-Love-Still-Unrequited/loveSL-3.jpg',
  'images/2008-Love-Still-Unrequited/loveSL-4.jpg',
  'images/2008-Love-Still-Unrequited/loveSL-5.jpg',
  'images/2008-Love-Still-Unrequited/loveSL-6.jpg',
  'images/2008-Love-Still-Unrequited/loveSL-7.jpg',
  'images/2008-Love-Still-Unrequited/loveSL-8.jpg',
  'images/2012-Dante/dante-1.jpg',
  'images/2012-Dante/dante-10.jpg',
  'images/2012-Dante/dante-11.JPG',
  'images/2012-Dante/dante-12.JPG',
  'images/2012-Dante/dante-13.JPG',
  'images/2012-Dante/dante-14.jpg',
  'images/2012-Dante/dante-15.JPG',
  'images/2012-Dante/dante-16.JPG',
  'images/2012-Dante/dante-17.JPG',
  'images/2012-Dante/dante-18.JPG',
  'images/2012-Dante/dante-19.JPG',
  'images/2012-Dante/dante-2.JPG',
  'images/2012-Dante/dante-20.JPG',
  'images/2012-Dante/dante-21.JPG',
  'images/2012-Dante/dante-22.jpg',
  'images/2012-Dante/dante-23.JPG',
  'images/2012-Dante/dante-24.JPG',
  'images/2012-Dante/dante-25.jpg',
  'images/2012-Dante/dante-26.JPG',
  'images/2012-Dante/dante-27.JPG',
  'images/2012-Dante/dante-28.jpg',
  'images/2012-Dante/dante-3.jpg',
  'images/2012-Dante/dante-4.JPG',
  'images/2012-Dante/dante-5.jpg',
  'images/2012-Dante/dante-6.JPG',
  'images/2012-Dante/dante-7.jpg',
  'images/2012-Dante/dante-8.JPG',
  'images/2012-Dante/dante-9.jpg',
  'images/2014-Origin/origin-1.JPG',
  'images/2014-Origin/origin-10.JPG',
  'images/2014-Origin/origin-11.JPG',
  'images/2014-Origin/origin-12.JPG',
  'images/2014-Origin/origin-13.JPG',
  'images/2014-Origin/origin-14.JPG',
  'images/2014-Origin/origin-15.JPG',
  'images/2014-Origin/origin-17.JPG',
  'images/2014-Origin/origin-18.JPG',
  'images/2014-Origin/origin-19.JPG',
  'images/2014-Origin/origin-2.JPG',
  'images/2014-Origin/origin-20.JPG',
  'images/2014-Origin/origin-21.JPG',
  'images/2014-Origin/origin-22.JPG',
  'images/2014-Origin/origin-23.JPG',
  'images/2014-Origin/origin-24.JPG',
  'images/2014-Origin/origin-25.jpg',
  'images/2014-Origin/origin-26.jpg',
  'images/2014-Origin/origin-27.jpg',
  'images/2014-Origin/origin-28.jpg',
  'images/2014-Origin/origin-29.jpeg',
  'images/2014-Origin/origin-3.JPG',
  'images/2014-Origin/origin-30.jpg',
  'images/2014-Origin/origin-31.jpg',
  'images/2014-Origin/origin-32.jpg',
  'images/2014-Origin/origin-4.JPG',
  'images/2014-Origin/origin-5.JPG',
  'images/2014-Origin/origin-6.JPG',
  'images/2014-Origin/origin-7.JPG',
  'images/2014-Origin/origin-8.JPG',
  'images/2014-Origin/origin-9.JPG',
  'images/2016-Savage-Love/savage-love-1.jpg',
  'images/2016-Savage-Love/savage-love-10.jpg',
  'images/2016-Savage-Love/savage-love-11.jpg',
  'images/2016-Savage-Love/savage-love-12.jpg',
  'images/2016-Savage-Love/savage-love-13.jpg',
  'images/2016-Savage-Love/savage-love-14.jpg',
  'images/2016-Savage-Love/savage-love-15.jpg',
  'images/2016-Savage-Love/savage-love-2.jpg',
  'images/2016-Savage-Love/savage-love-3.jpg',
  'images/2016-Savage-Love/savage-love-4.jpg',
  'images/2016-Savage-Love/savage-love-5.jpg',
  'images/2016-Savage-Love/savage-love-6.jpg',
  'images/2016-Savage-Love/savage-love-7.jpg',
  'images/2016-Savage-Love/savage-love-8.jpg',
  'images/2016-Savage-Love/savage-love-9.jpg',
  'images/2018-Dream-Logos/dream-logos-1.jpg',
  'images/2018-Dream-Logos/dream-logos-10.jpg',
  'images/2018-Dream-Logos/dream-logos-11.jpg',
  'images/2018-Dream-Logos/dream-logos-12.jpg',
  'images/2018-Dream-Logos/dream-logos-13.jpg',
  'images/2018-Dream-Logos/dream-logos-14.jpg',
  'images/2018-Dream-Logos/dream-logos-15.jpg',
  'images/2018-Dream-Logos/dream-logos-2.jpg',
  'images/2018-Dream-Logos/dream-logos-3.jpg',
  'images/2018-Dream-Logos/dream-logos-4.jpg',
  'images/2018-Dream-Logos/dream-logos-5.jpg',
  'images/2018-Dream-Logos/dream-logos-6.jpg',
  'images/2018-Dream-Logos/dream-logos-7.jpg',
  'images/2018-Dream-Logos/dream-logos-8.jpg',
  'images/2018-Dream-Logos/dream-logos-9.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-1.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-10.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-11.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-12.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-13.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-14.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-15.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-16.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-17.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-18.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-19.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-2.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-20.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-21.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-22.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-23.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-24.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-25.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-3.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-4.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-5.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-6.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-7.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-8.jpg',
  'images/2022-Dream-Logos-2.0/dream-logos-2.0-9.jpg',
  'images/2024-The-Last-Beginning/last-beginning-1.JPG',
  'images/2024-The-Last-Beginning/last-beginning-10.JPG',
  'images/2024-The-Last-Beginning/last-beginning-11.JPG',
  'images/2024-The-Last-Beginning/last-beginning-12.JPG',
  'images/2024-The-Last-Beginning/last-beginning-13.JPG',
  'images/2024-The-Last-Beginning/last-beginning-14.JPG',
  'images/2024-The-Last-Beginning/last-beginning-15.JPG',
  'images/2024-The-Last-Beginning/last-beginning-2.JPG',
  'images/2024-The-Last-Beginning/last-beginning-3.JPG',
  'images/2024-The-Last-Beginning/last-beginning-4.JPG',
  'images/2024-The-Last-Beginning/last-beginning-5.JPG',
  'images/2024-The-Last-Beginning/last-beginning-6.JPG',
  'images/2024-The-Last-Beginning/last-beginning-7.JPG',
  'images/2024-The-Last-Beginning/last-beginning-8.JPG',
  'images/2024-The-Last-Beginning/last-beginning-9.JPG'
];

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Extract production info from image path
function getProductionInfo(imagePath) {
  // Extract folder name from path (e.g., "2008-Love-Still-Unrequited" from "images/2008-Love-Still-Unrequited/...")
  const folderMatch = imagePath.match(/images\/([^/]+)\//);
  if (!folderMatch) return null;
  
  const folderName = folderMatch[1];
  
  // Extract year (first 4 digits) and production name
  const yearMatch = folderName.match(/^(\d{4})-(.+)$/);
  if (!yearMatch) return null;
  
  const year = yearMatch[1];
  const productionName = yearMatch[2];
  
  // Replace dashes with spaces for h1
  const h1Text = productionName.replace(/-/g, ' ');
  
  // Create p text with year and "Edinburgh Fringe"
  const pText = `${year} Edinburgh Fringe`;
  
  return { h1Text, pText };
}

// Replace all image sources when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('#categories img');
  const shuffledImages = shuffleArray(allImages);
  
  images.forEach((img, index) => {
    const imagePath = shuffledImages[index % shuffledImages.length];
    img.src = imagePath;
    
    // Get production info and update text
    const info = getProductionInfo(imagePath);
    if (info) {
      const imgDiv = img.closest('div');
      if (imgDiv) {
        const h1 = imgDiv.querySelector('h1');
        const p = imgDiv.querySelector('p');
        
        if (h1) h1.textContent = info.h1Text;
        if (p) p.textContent = info.pText;
      }
    }
  });

  // Detect if device is touch-capable
  const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
  };

  const isTouch = isTouchDevice();
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const hideAllTouchInfo = function() {
    document.querySelectorAll('#categories li > div.touch-info-visible').forEach((el) => {
      el.classList.remove('touch-info-visible');
    });
  };

  // Add lightbox functionality to each image
  images.forEach((img) => {
    const imgDiv = img.closest('div');
    if (!imgDiv) return;

    const h1 = imgDiv.querySelector('h1');
    const p = imgDiv.querySelector('p');

    const openLightbox = function(e) {
      if (e) e.stopPropagation();
      lightboxImage.src = img.src;
      lightbox.classList.add('active');
      imgDiv.classList.remove('touch-info-visible');
    };

    img.addEventListener('click', function(e) {
      e.stopPropagation();

      if (isTouch) {
        // Touch device: tapping image only reveals text overlay.
        hideAllTouchInfo();
        imgDiv.classList.add('touch-info-visible');
      } else {
        // Desktop: click to open lightbox
        openLightbox(e);
      }
    });

    // Add click handlers to text elements
    if (h1) {
      h1.addEventListener('click', function(e) {
        e.stopPropagation();
        if (isTouch && !imgDiv.classList.contains('touch-info-visible')) {
          hideAllTouchInfo();
          imgDiv.classList.add('touch-info-visible');
          return;
        }
        openLightbox(e);
      });
      h1.style.cursor = 'pointer';
    }

    if (p) {
      p.addEventListener('click', function(e) {
        e.stopPropagation();
        if (isTouch && !imgDiv.classList.contains('touch-info-visible')) {
          hideAllTouchInfo();
          imgDiv.classList.add('touch-info-visible');
          return;
        }
        openLightbox(e);
      });
      p.style.cursor = 'pointer';
    }
  });

  // Close lightbox when clicking the image
  lightboxImage.addEventListener('click', function(e) {
    e.stopPropagation();
    lightbox.classList.remove('active');

    // Reset touch state for next use
    if (isTouch) {
      images.forEach((img) => {
        img.touchInfoShown = false;
      });
    }
  });

  // Close lightbox when clicking background
  lightbox.addEventListener('click', function() {
    lightbox.classList.remove('active');
  });

  if (isTouch) {
    document.addEventListener('click', function() {
      hideAllTouchInfo();
    });
  }

  // Nav toggle functionality
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  const body = document.body;
  
  if (navToggle && nav) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('closed');
      body.classList.toggle('nav-closed');
    });
  }
});
