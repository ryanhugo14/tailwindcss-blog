const darkSwitchIcon = document.querySelector('#dark-switch-icon');
const darkSwitch = document.querySelector('#dark-switch');
const darkText = document.querySelector('#dark-text');
const darkChangeText = document.querySelector('#dark-text-change');
const html = document.documentElement;
let isDarkMode = false;

// Switch theme function
const toggleTheme = () => {
    isDarkMode = !isDarkMode;
    switchTheme();
};

const toDark = () => {
    darkSwitchIcon.classList.add(
        'translate-x-full',
        'rotate-[360deg]',
        'bg-slate-900'
    );
    darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-white"></i>`;
    // darkChangeText.innerText = 'Dark'
    darkSwitch.classList.remove('bg-slate-800');
    darkSwitch.classList.add('bg-slate-100');
    localStorage.setItem('data-theme', 'dark');
    html.classList.add('dark');
    darkText.classList.add('-translate-x-7');
    darkText.innerText = 'ON';
};

const toLight = () => {
    darkSwitchIcon.classList.remove('translate-x-full', 'bg-slate-900');
    // darkChangeText.innerText = 'Light'
    darkSwitch.classList.remove('bg-slate-100');
    darkSwitch.classList.add('bg-slate-800');
    localStorage.removeItem('data-theme');
    html.classList.remove('dark');
    darkText.classList.remove('-translate-x-7');
    darkText.innerText = 'FF';
    darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun text-green-500"></i>`;
    setTimeout(() => {
        darkSwitchIcon.classList.remove('rotate-[360deg]');
    }, 200);
};

const switchTheme = () => {
    isDarkMode ? toDark() : toLight();
    // or
    // if (isDarkMode) {
    //     toDark()
    // } else {
    //     toLight()
    // }
};

// If you do reload the webpage,
// doesn't change you choose theme.
// This `dataTheme` function save permentaly choose theme.

const dataTheme = localStorage.getItem('data-theme');

dataTheme === 'dark' ? toDark() : toLight();
// or
// if(dataTheme === 'dark') {
//     toDark()
// } else {
//     toLight()
// }

//mobile menu navbar
const mobileMenu = document.querySelector('#mobileMenu');
const mobileCloseMenu = document.querySelector('#closeMoblieMenu');
const mobileOpenMenu = document.querySelector('#openMobileMenu');

mobileOpenMenu.addEventListener('click', () => {
    mobileMenu.style.left = '0px';
});

mobileCloseMenu.addEventListener('click', () => {
    mobileMenu.style.left = '-100%';
});

let moblieSlideClose = document.querySelectorAll('.moblieSlideClose');
for (let i = 0; i < moblieSlideClose.length; i++) {
    moblieSlideClose[i].addEventListener('click', () => {
        mobileMenu.style.left = '-100%';
    });
}

// Navbar Fixed and Animation
const fixedNav = document.getElementById('fixedNav');
var waypoint = new Waypoint({
    element: document.getElementById('member'),
    handler: function(direction) {
        if (direction === 'down') {
            fixedNav.classList.add(
                'fixed',
                'top-0',
                'animate__fadeInDown',
                'shadow-lg',
                'w-full',
                'z-30',
            );
        } else {
            fixedNav.classList.remove(
                'fixed',
                'top-0',
                'animate__fadeInDown',
                'shadow-lg',
                'w-full',
                'z-30'
            );
        }
    },
    offset: '30%',
});


// Navbar Active
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset; // scroll height

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight, // get current height
            sectionTop = current.offsetTop - 200, // get current section of height
            sectionId = current.getAttribute("id"); // get current section id

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector("a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document
                .querySelector("a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    });
}
window.addEventListener('scroll', scrollActive);


// SwiperJs
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-nextt',
        prevEl: '.swiper-button-prevv',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// Scrollreveal
ScrollReveal().reveal(
    '.headline', { delay: 500, duration: 2500, origin: 'left', distance: '10px', interval: 200 },
);
ScrollReveal().reveal('.ease', {
    delay: 500,
    duration: 2500,
    scale: 0.85,
    interval: 300,
});
ScrollReveal().reveal('.easein', {
    delay: 500,
    duration: 1500,
    scale: 0.85,
});