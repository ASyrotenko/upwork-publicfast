const bannerSection = document.querySelector(".banner");
const bannerCloseBtn = document.querySelector(".banner__close-btn");

const closeBanner = () => {
  bannerSection.classList.add("hidden");
};

bannerCloseBtn.addEventListener("click", closeBanner);
