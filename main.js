const track = document.querySelector(".certificates_track");
const prevBtn = document.querySelector(".slider_prev");
const nextBtn = document.querySelector(".slider_next");

const cardWidth = document.querySelector(".certificate_card").offsetWidth + 24;

nextBtn.addEventListener("click", () => {
  track.scrollBy({
    left: cardWidth,
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", () => {
  track.scrollBy({
    left: -cardWidth,
    behavior: "smooth",
  });
});
