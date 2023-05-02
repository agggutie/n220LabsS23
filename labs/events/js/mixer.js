const colorBox = document.getElementById('color-box');
        const rgbDisplay = document.getElementById('rgb-display');

        const colorButtons = document.querySelectorAll('.color-btn');
        let redValue = 0;
        let greenValue = 0;
        let blueValue = 0;

        function updateColor() {
            const rgbValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

            colorBox.style.backgroundColor = rgbValue;
            rgbDisplay.textContent = `RGB: ${rgbValue}`;
        }

        function updateColorValue(event) {
            const color = event.target.dataset.color;
            const value = parseInt(event.target.dataset.value);

            if (color === 'red') {
                redValue += value;
            } else if (color === 'green') {
                greenValue += value;
            } else if (color === 'blue') {
                blueValue += value;
            }

            updateColor();
        }

        colorButtons.forEach(button => {
            button.addEventListener('click', updateColorValue);
        });