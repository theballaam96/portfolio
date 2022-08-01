function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function loadDarkMode() {
    console.log("Loading stylings")
    let mode = getCookie("mode")
    if (mode == "light") {
        document.getElementsByTagName("body")[0].classList.add("light")
        document.getElementById("dark-mode-button").getElementsByTagName("input")[0].removeAttribute("checked")
    } else {
        document.getElementsByTagName("body")[0].classList.remove("light")
        document.getElementById("dark-mode-button").getElementsByTagName("input")[0].setAttribute("checked","checked")
    }
    console.log("Loaded stylings")
}
function toggleDarkMode() {
    let mode = getCookie("mode")
    if (mode == "dark") {
        document.cookie = "mode=light";
    } else {
        document.cookie = "mode=dark";
    }
    loadDarkMode()
}