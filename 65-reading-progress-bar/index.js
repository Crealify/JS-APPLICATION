function updateProgressBar() {
    const { scrollTop, scrollHeight } = document.documentElement;
    const scrollPercentage = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`;
    document.querySelector("#progress-bar").style.setProperty("--progress", scrollPercentage);
}

document.addEventListener("scroll", updateProgressBar);
