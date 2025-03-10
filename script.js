document.addEventListener("DOMContentLoaded", function() {
    // Animasi teks
    let words = document.querySelectorAll('.word');
    words.forEach((word) => {
        let letters = word.textContent.split("");
        word.textContent = "";
        letters.forEach((letter) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter";
            word.append(span);
        });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    let changeText = () => {
        let currentWord = words[currentWordIndex];
        let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.className = "letter out";
            }, i * 80);
        });

        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter behind";
            setTimeout(() => {
                letter.className = "letter in";
            }, 340 + i * 80);
        });
        currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    changeText();
    setInterval(changeText, 3000);

    // Circle skill
    // const circles = document.querySelectorAll('.circle');
    // circles.forEach(elem => {
    //     let dots = parseInt(elem.getAttribute("data-dots"), 10);
    //     let marked = parseInt(elem.getAttribute("data-percent"), 10);
    //     let percent = Math.floor(dots * marked / 100);
    //     let points = "";
    //     let rotate = 360 / dots;

    //     for (let i = 0; i < dots; i++) {
    //         points += `<div class="points" style="--i:${i}; --rot:${rotate * i}deg"></div>`;
    //     }
    //     elem.innerHTML = points;

    //     const pointsMarked = elem.querySelectorAll('.points');
    //     for (let i = 0; i < percent; i++) {
    //         pointsMarked[i].classList.add('marked');
    //     }
    // });

    // Mix section portfolio
    const portfolioGallery = document.querySelector('.portofolio-gallery');
    if (portfolioGallery) {
        var mixer = mixitup(portfolioGallery);
    }

    // Menu aktif
    let menuLi = document.querySelectorAll('header ul li a');
    let section = document.querySelectorAll('section');

    function activeMenu() {
        let len = section.length;
        while (--len && window.scrollY + 97 < section[len].offsetTop) {}
        menuLi.forEach(sec => sec.classList.remove("active"));
        if (menuLi[len]) menuLi[len].classList.add("active");
    }

    if (menuLi.length > 0 && section.length > 0) {
        activeMenu();
        window.addEventListener("scroll", activeMenu);
    }

    // Navbar sticky
    const header = document.querySelector("header");
    if (header) {
        window.addEventListener("scroll", function() {
            header.classList.toggle("sticky", window.scrollY > 50);
        });
    }

    // Toggle menu
    let menuIcon = document.querySelector("#menu-icon");
    let navlist = document.querySelector(".navlist");

    if (menuIcon && navlist) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle("bx-x");
            navlist.classList.toggle("open");
        };

        window.onscroll = () => {
            menuIcon.classList.remove("bx-x");
            navlist.classList.remove("open");
        };
    }

    // Observer untuk animasi scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-items");
            } else {
                entry.target.classList.remove("show-items");
            }
        });
    });

    const scrollBottom = document.querySelectorAll(".scroll-bottom");
    const scrollScale = document.querySelectorAll(".scroll-scale");
    const scrollTop = document.querySelectorAll(".scroll-top");

    [scrollBottom, scrollScale, scrollTop].forEach(elements => {
        if (elements.length > 0) {
            elements.forEach(el => observer.observe(el));
        }
    });
});