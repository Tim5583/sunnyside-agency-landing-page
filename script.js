let hamburgerIcon = document.querySelector("#hamburger-icon");

hamburgerIcon.addEventListener("click", () => {
    let opacity = document.querySelector(".nav-items ul").style.opacity;
    if (opacity == "0" || opacity == "") {
        document.querySelector(".nav-items ul").style.opacity = "1";
    } else {
        document.querySelector(".nav-items ul").style.opacity = "0";
    }
})
