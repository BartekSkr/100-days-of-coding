const previews = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");

    const originalSrc = preview.getAttribute("data-original");
    original.src = `./img-full/${originalSrc}`;

    const altText = preview.alt;
    caption.textContent = altText;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
