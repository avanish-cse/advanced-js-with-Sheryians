let imgs = document.querySelectorAll("img");

//defining obserevr

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add("loaded");
            img.src = img.dataset.src;
            observer.unobserve(img);
        };
    });
},
    {
        root: null,
        threshold: 0.1,
    });


// applying observer

imgs.forEach(function (img) {
    observer.observe(img);
})