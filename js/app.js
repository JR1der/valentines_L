const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
let count = 2;

const gifs = [
  "../resources/cat-heart.gif",
  "../resources/rusure.gif",
  "../resources/3shocked-1.gif",
  "../resources/4-crying.gif",
  "../resources/5-crying.gif",
  "../resources/idc.gif"
];


gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

no.addEventListener("click", () => {
  if (count == 2) {
    gif.src = "../resources/rusure.gif";
    text.innerHTML = "Ти хотіла натиснути ТАК? 🤨";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count == 3) {
    gif.src = "../resources/3shocked-1.gif";
    text.innerHTML = "В тебе напевне зіскользнув палець? 🥹";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count == 4) {
    gif.src = "../resources/4-crying.gif";
    text.innerHTML = "Ти впевнена? 😭";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count == 5) {
    gif.src = "../resources/5-crying.gif";
    text.innerHTML = "В тебе немає інших варіантів 😏";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

yes.addEventListener("click", () => {
  vid.style.display = "block";
  gif.src = "../resources/idc.gif";
  text.innerHTML = "Я знав ❤️";
  yes.innerHTML = '<a href="https://t.me/ivan_ppv">Напиши мені 🥰</a>';
  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";
  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});
