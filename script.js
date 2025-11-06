
        function updateImage(img) {
            console.log("Image updated:", img.alt);
            const display = document.getElementById("display");
            display.style.backgroundImage = `url(${img.src})`;
            display.textContent = "";
        }

        function resetImage() {
            console.log("Image reset");
            const display = document.getElementById("display");
            display.style.backgroundImage = "none";
            display.textContent = "Hover or focus an image to preview it here.";
        }

        function addTabFocus() {
            console.log("Page loaded - tabindex added");
            const images = document.querySelectorAll('.preview');

            for (let i = 0; i < images.length; i++) {
                images[i].setAttribute("tabindex", "0");
            }
        }