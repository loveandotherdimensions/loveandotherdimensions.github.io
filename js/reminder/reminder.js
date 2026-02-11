
       var player;
var heartInterval; // Variable para que los corazones no paren

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'OOn_p_TEn44', // <--- Este ID sí permite sonar en webs externas
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'mute': 0, // Intentar que no inicie silenciado
            'origin': window.location.origin
        }
    });
}

function toggleMusica() {
    // Verificamos que el player exista
    if (!player || typeof player.getPlayerState !== 'function') return;

    const estado = player.getPlayerState();
    const texto = document.getElementById('instruccion');
    
    // Forzamos que se quite el mudo y suba el volumen al máximo
    player.unMute();
    player.setVolume(100);

    if (estado == 1) { // 1 es "playing"
        player.pauseVideo();
        texto.innerText = "Toca para reanudar";
        clearInterval(heartInterval); // Detiene la creación de corazones
    } else {
        player.playVideo();
        texto.innerText = "Escuchando nuestra canción...";
        
        // Lanzar corazones una vez al inicio
        lanzarCorazones();
        
        // Y seguir lanzando corazones cada segundo mientras suene
        heartInterval = setInterval(lanzarCorazones, 1000);
    }
}

function lanzarCorazones() {
    for(let i=0; i<8; i++) { // Lanzamos de 8 en 8
        setTimeout(() => {
            const c = document.createElement("div");
            c.innerHTML = "❤️";
            c.style.position = "fixed";
            c.style.left = Math.random() * 100 + "vw";
            c.style.bottom = "-20px";
            c.style.fontSize = Math.random() * 20 + 20 + "px";
            c.style.transition = "transform 4s linear, opacity 4s";
            c.style.zIndex = "1000"; // Asegurar que estén por encima
            c.style.pointerEvents = "none"; // Que no estorben los clics
            document.body.appendChild(c);
            
            setTimeout(() => {
                c.style.transform = `translateY(-110vh) rotate(${Math.random() * 360}deg)`;
                c.style.opacity = "0";
            }, 100);
            
            setTimeout(() => c.remove(), 4000);
        }, i * 200);
    }
}