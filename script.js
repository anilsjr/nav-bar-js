document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", function() {
        let page = this.getAttribute("data-page");

        // Remove 'active' class from all tabs & pages
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

        // Add 'active' class to clicked tab and corresponding page
        this.classList.add("active");
        document.querySelector(`.${page}`).classList.add("active");
    });
});

// iTyped (Typing Effect)
window.ityped.init(document.querySelector('.iTyped'), {
    strings: ["I'm a Web Developer", "I Love React.js", "I Love Flutter", "I Love SQL"],
    loop: true
});
