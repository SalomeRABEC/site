 window.addEventListener('load', () => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      const highRes = new Image();
      highRes.src = img.dataset.src; // Charger l'image réelle
      highRes.onload = () => {
        img.src = highRes.src;       // Remplacer l'image
        img.classList.remove('blur'); // Supprimer le flou
      };
    });
  });