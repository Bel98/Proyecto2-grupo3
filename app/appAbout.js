
function changeImageTemporary(card, newImage) {
    const img = card.querySelector('.imgCardMG');
    const originalImage = img.src;
    
    img.style.opacity = 0;
    
    setTimeout(() => {
        img.src = newImage;
        img.style.opacity = 1;
    }, 200);
    
    setTimeout(() => {
        img.style.opacity = 0;
    }, 5000);
    
    setTimeout(() => {
        img.src = originalImage;
        img.style.opacity = 1;
    }, 5200); // 5200 ms = 5.5 segundos
}