const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  //   console.log(counter);
  if (counter < 0) {
    counter = 0;
    console.log(counter);
  }
  if ((counter) => 0 && counter < 4) {
    counter--;
    slideImage();
    // console.log(counter);
  }
};

const goNext = () => {
  if ((counter) => 0 && counter <= 3) {
    if (counter >= 3) {
      counter = 3;
    } else {
      counter++;
      console.log(counter);
      slideImage();
    }
  }
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
