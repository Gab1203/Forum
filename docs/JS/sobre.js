document.body.classList.toggle('dark-mode');
AOS.init({
    duration: 1000,
    once: true
});



const stats = document.querySelectorAll('.stat-number');
stats.forEach(stat => {
    const finalValue = parseInt(stat.getAttribute('data-value'));
    let currentValue = 0;
    const duration = 2000; 
    const increment = finalValue / (duration / 16); 

    function updateValue() {
        if (currentValue < finalValue) {
            currentValue += increment;
            if (currentValue > finalValue) currentValue = finalValue;
            stat.textContent = Math.round(currentValue);
            requestAnimationFrame(updateValue);
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateValue();
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(stat);
});

function showNav(){
    var links = document.querySelector('#myLinks')

    if(links.style.display === 'block')
        links.style.display = 'none'
    else
        links.style.display = 'block'
}