function updateImage(img) {
            console.log("Image updated:", img.alt);
            const display = document.getElementById("display");
            const displayText = document.getElementById("display-text");
            display.style.backgroundImage = `url(${img.src})`;
            displayText.textContent = img.alt;
            display.setAttribute("aria-label", `Current preview: ${img.alt}`);
        }

        function resetImage() {
            console.log("Image reset");
            const display = document.getElementById("display");
            const displayText = document.getElementById("display-text");
            display.style.backgroundImage = "none";
            displayText.textContent = "Hover or focus an image to preview it here.";
            display.setAttribute("aria-label", "Image preview area");
        }

        function addTabFocus() {
            console.log("Page loaded - tabindex added");
            const images = document.querySelectorAll('.preview');

            for (let i = 0; i < images.length; i++) {
                images[i].setAttribute("tabindex", "0");
            }
            
            // Add keyboard navigation
            document.addEventListener('keydown', function(event) {
                const focusedElement = document.activeElement;
                if (focusedElement && focusedElement.classList.contains('preview')) {
                    const galleryItems = document.querySelectorAll('.preview');
                    const currentIndex = Array.from(galleryItems).indexOf(focusedElement);
                    
                    if (event.key === 'ArrowRight' && currentIndex < galleryItems.length - 1) {
                        galleryItems[currentIndex + 1].focus();
                        updateImage(galleryItems[currentIndex + 1]);
                        event.preventDefault();
                    } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
                        galleryItems[currentIndex - 1].focus();
                        updateImage(galleryItems[currentIndex - 1]);
                        event.preventDefault();
                    }
                }
            });
        }
