function likeNews() {
    alert("Yangilikni o‘qiganingiz uchun rahmat!");
}

function searchNews() {
    let input = document.getElementById("search").value.toLowerCase();
    let news = document.querySelectorAll(".news");

    news.forEach(function(item) {
        if (item.innerText.toLowerCase().includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
