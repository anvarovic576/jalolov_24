function darkMode() {
  document.body.classList.toggle("dark");
}


function xabar() {
  alert("Yangilik to‘liq tez orada qo‘shiladi!");
}


function likeNews() {
  alert("👍 Rahmat! Sizga yoqdi.");
}


// Qidiruv

let search = document.getElementById("search");

search.addEventListener("keyup", function() {

  let text = search.value.toLowerCase();

  let news = document.querySelectorAll(".news");

  news.forEach(function(item) {

    let content = item.innerText.toLowerCase();

    if(content.includes(text)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }

  });

});
