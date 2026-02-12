        // Crear estrellas aleatorias
        const starsContainer = document.getElementById('stars');
        const starCount = 100;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const size = Math.random() * 2 + 'px';
            star.style.width = size;
            star.style.height = size;
            star.style.left = Math.random() * 100 + 'vw';
            star.style.top = Math.random() * 100 + 'vh';
            star.style.animationDuration = (Math.random() * 50 + 50) + 's';
            star.style.opacity = Math.random();
            starsContainer.appendChild(star);
        }

        function startExperience() {
            const intro = document.getElementById('intro');
            const videoCont = document.getElementById('video-container');
            const video = document.getElementById('mainVideo');
            const note = document.getElementById('footer-note');

            intro.style.transition = "opacity 1s ease";
            intro.style.opacity = "0";

            setTimeout(() => {
                intro.style.display = "none";
                videoCont.style.display = "block";
                
                setTimeout(() => {
                    videoCont.style.opacity = "1";
                    note.style.opacity = "1";
                    video.play();
                }, 100);
            }, 1000);
        }