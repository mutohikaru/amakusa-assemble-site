let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function moveCarousel(direction) {
  currentIndex = (currentIndex + direction + totalItems) % totalItems;

  const container = document.getElementById("carousel");
  const scrollOffset = items[currentIndex].offsetLeft;

  container.scrollTo({
    left: scrollOffset,
    behavior: "smooth",
  });
}
