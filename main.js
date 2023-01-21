const content = document.querySelector(".content");
const main = document.querySelector(".main");

const update = () => {
  let i = 0;
  while (i < 2) {
    const el = document.createElement("div");
    el.classList.add("content");
    main.appendChild(el);
    i++;
  }
  // for(let i = 1; i < j; i++ ) {
  //     if(isInViewport(content)) {
  //     const el = (document.createElement("div"))
  //     el.classList.add("content");
  //     content.style.backgroundColor = "red";
  //     i++;
  //     j++;
  // }
  // }
};

document.addEventListener("scroll", () => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        update();
    }
});
