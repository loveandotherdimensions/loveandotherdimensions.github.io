 function abrirTodo(elemento) {
            const music = document.getElementById('musicaFondo');
            if (!elemento.classList.contains('abierto')) {
                elemento.classList.add('abierto');
                music.play().catch(() => console.log("Audio esperando interacción"));
                lanzarParticulas();
            } else {
                elemento.classList.remove('abierto');
                music.pause();
            }
        }

        function lanzarParticulas() {
            const iconos = ['🤎', '☕', '✨', '🍂'];
            for(let i=0; i<12; i++) {
                setTimeout(() => {
                    const p = document.createElement("div");
                    p.className = "particula";
                    p.innerHTML = iconos[Math.floor(Math.random() * iconos.length)];
                    p.style.left = Math.random() * 100 + "vw";
                    p.style.bottom = "-20px";
                    p.style.fontSize = "22px";
                    p.style.transition = "transform 3.5s linear, opacity 3.5s";
                    document.body.appendChild(p);
                    setTimeout(() => {
                        p.style.transform = `translateY(-110vh) rotate(${Math.random() * 360}deg)`;
                        p.style.opacity = "0";
                    }, 100);
                    setTimeout(() => p.remove(), 3500);
                }, i * 180);
            }
        }