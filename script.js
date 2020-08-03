// Immediately invoked function expression
// to not pollute the global scope
(function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    let deg = 0;

    startButton.addEventListener('click', () => {
        startButton.style.pointerEvents = 'none';
        deg = Math.floor(2000 + Math.random() * 2000);
        wheel.style.transition = 'all 3s ease-out';
        wheel.style.transform = `rotate(${deg}deg)`;
        wheel.classList.add('blur');
    });

    wheel.addEventListener('transitionend', () => {
        wheel.classList.remove('blur');
        startButton.style.pointerEvents = 'auto';
        wheel.style.transition = 'none';
        const actualDeg = deg % 360;
        wheel.style.transform = `rotate(${actualDeg}deg)`;
    });


   })();