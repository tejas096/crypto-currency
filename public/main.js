let search = document.querySelector("input");
let datas = document.querySelectorAll("h1");
datasearch = [];
for (let i = 0; i < datas.length; i++) {
  datasearch.push(datas[i]);
}
search.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  datasearch.forEach((data) => {
    if (data.innerText.toLowerCase().includes(value) == true) {
      data.parentElement.parentElement.parentElement.classList.remove("hide");
    } else {
      data.parentElement.parentElement.parentElement.classList.add("hide");
    }
  });
});
