// Hide banner

const bannerSection = document.querySelector(".banner");
const bannerCloseBtn = document.querySelector(".banner__close-btn");

const closeBanner = () => {
  bannerSection.classList.add("hidden");
};

bannerCloseBtn.addEventListener("click", closeBanner);

// See more

const moreText = document.querySelector(".brief-disc");
const readMoreBtn = document.querySelector(".brief__read-more-btn");

const showMoreText = () => {
  moreText.classList.toggle("text-hidden");

  const initialText = "see more...";

  if (
    readMoreBtn.textContent.toLowerCase().includes(initialText.toLowerCase())
  ) {
    readMoreBtn.textContent = "see less...";
  } else {
    readMoreBtn.textContent = initialText;
  }
};

readMoreBtn.addEventListener("click", showMoreText);
