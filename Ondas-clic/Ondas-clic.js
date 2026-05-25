function crearOnda(e){
    const onda = document.createElement('div');
    onda.classList.add('onda');
    
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    
    onda.style.left = x + 'px';
    onda.style.top = y + 'px';
    
    const color = `hsl(${Math.random() * 360}, 100%, 60%)`;
    onda.style.borderColor = color;
    onda.style.boxShadow = `0 0 20px ${color}, inset 0 0 10px ${color}`;
    
    document.body.appendChild(onda);
    
    setTimeout(() => {
        onda.remove();
    }, 800);
}

window.addEventListener('touchstart', crearOnda);
window.addEventListener('mousedown', crearOnda);
