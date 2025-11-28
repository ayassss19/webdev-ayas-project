document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    const nav = document.querySelector ("nav");
    const mainContent = document.querySelector("main");
    const aside = document.querySelector ("aside");


    title.textContent = "Belajar Javascript Dasar - Interaksi Pertama🖥️";
    title.addEventListener("click", () => {
        nav.classList.toggle("show-nav");
    });

    document.addEventListener("keydown", (Event) => {
        if (Event.key === "d") {
            document.body.classList.toggle("dark");
        }
    });

    let count = 0;
    mainContent.addEventListener("click", () => {
        count++;
        aside.textContent = `Kamu klik konten ini sebanyak ${count} kali`;
    });

    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll("nav a");
    const firstParagraph = document.querySelector("main article p");
    
    header.addEventListener("mouseover", () => {
        header.style.backgroundColor = "#b7e0f5"
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "f") {
            navLinks.forEach(Link => {
                link.style.fontSize = "24px";
                link.style.color = "red";
            });
        }
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            document.body.style.backgroundColor = "#012a53ff"
        } else {
            document.body.style.backgroundColor = "#001e3cff";
        }
    });

    firstParagraph.addEventListener("click", () => {
        firstParagraph.textContent = "Paragraf ini sudah diubah dengan event klik!";
        firstParagraph.style.color = "blue";
    });
});