function content_toggle() {
    var list = document.getElementById("content_list")
    var button = document.getElementById("show_hide_button")

    if (list.style.display == "none") {
        list.style.display = "block";
        button.innerHTML = "[Hide]"
    } else {
        list.style.display = "none";
        button.innerHTML = "[Show]"
    }
}
