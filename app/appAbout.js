
function changeImageTemporary(card, newImage) {
    const img = card.querySelector('.imgCardMG');
    const originalImage = img.src;
    
    img.style.opacity = 0;
    
    setTimeout(() => {
        img.src = newImage;
        img.style.opacity = 1;
        const overlay = card.querySelector('.overlay');
        overlay.style.display = 'flex';
    }, 80);
    
    setTimeout(() => {
        img.style.opacity = 0;
    }, 9000);
    
    setTimeout(() => {
        img.src = originalImage;
        img.style.opacity = 1;
        const overlay = card.querySelector('.overlay');
        overlay.style.display = 'none';
    }, 9080); 
}

