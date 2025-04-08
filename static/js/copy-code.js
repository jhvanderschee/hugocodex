(function setupCopyCodeButtons() {
    const pres = document.querySelectorAll("pre");
    if (pres.length === 0) return;

    pres.forEach(pre => {
        const button = document.createElement("button");
        button.classList.add("copy-code");
        pre.appendChild(button);
        pre.insertBefore(button, pre.firstChild);
        button.addEventListener("click", () => {
            navigator.clipboard.writeText(pre.innerText).then(() => {
                button.classList.add("copied")
                setTimeout(() => {
                    button.classList.remove("copied")
                }, 1500);
            });
        })
    })
})();