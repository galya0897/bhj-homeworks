function checkReveal() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        const position = reveal.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (position.top < windowHeight - 100) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
}

window.addEventListener('scroll', checkReveal);

function checkReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(reveal => {
        const position = reveal.getBoundingClientRect();

        if (position.top < windowHeight - 100) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
}

function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

window.addEventListener('scroll', throttle(checkReveal, 100));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal_active');
        } else {
            entry.target.classList.remove('reveal_active');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});