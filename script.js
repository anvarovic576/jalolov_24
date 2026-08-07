// ===== Search =====

const search = document.querySelector(".search-box input");

if (search) {
    search.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".video-card").forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}

// ===== Subscribe =====

const subBtn = document.querySelector(".channel-box button");

if (subBtn) {

    subBtn.onclick = function () {

        if (this.innerHTML === "Subscribe") {

            this.innerHTML = "Subscribed ✅";
            this.style.background = "#16a34a";

        } else {

            this.innerHTML = "Subscribe";
            this.style.background = "#ff0000";

        }

    };

}

// ===== Scroll Animation =====

const cards = document.querySelectorAll(".video-card,.short-item");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".6s";

    observer.observe(card);

});

// ===== Footer Year =====

const footer = document.querySelector(".footer p");

if (footer) {
    footer.innerHTML =
        "© " + new Date().getFullYear() + " Jalolov_YT. All rights reserved.";
}
