import "/style.css";

// challenge 1
const secondP = document.querySelector("section:nth-child(1) p:nth-of-type(2)");
document
  .querySelector("#toggle-highlight")
  .addEventListener("click", function () {
    secondP.classList.toggle("highlight");
  });

// challenge 2
const list = document.querySelector("pre");
document.querySelector("#generate-list").addEventListener("click", function () {
  let array = list.innerText.replace(/[^a-zA-Z0-9 ]/g, "").split(" ");
  let list_items = array.map((el) => `<li> ${el} </li>`).join("");
  list.innerText = "";
  list.insertAdjacentHTML("beforeend", `<ul>${list_items}</ul>`);
});

// challenge 3
const form = document.querySelector("section:nth-child(3) form");
form.addEventListener("submit", function (e) {
  if (document.querySelector("textarea").textLength >= 180) {
    e.preventDefault();
    document.querySelector("textarea").classList.add("error");
  }
});

// challenge 4
document.querySelectorAll("section:last-of-type button").forEach(
  (btn) =>
    (btn.onclick = () => {
      btn.nextElementSibling.classList.toggle("hide");
    })
);
