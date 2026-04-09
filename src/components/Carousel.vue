<template>
    <h2>Preview</h2>
  <div id="carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        v-for="(item, index) in carouselItems"
        :key="index"
        type="button"
        data-bs-target="#carousel"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
        :aria-current="index === 0 ? 'true' : undefined"
        :aria-label="`Slide ${index + 1}`"
      ></button>
    </div>

    <div class="carousel-inner">
      <div
        v-for="(item, index) in carouselItems"
        :key="index"
        class="carousel-item"
        :class="{ active: index === 0 }"
        data-bs-interval="2000"
      >
        <img :src="item.img" class="d-block w-100" :alt="item.alt" />
      </div>
    </div>

     <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

export default {
  name: "ImageCarousel",
  data() {
    return {
      carouselItems: [
        { img: pic1, alt: "pic 1" },
        { img: pic2, alt: "pic 2" },
        { img: pic3, alt: "pic 3" },
      ],
    };
  },
};
</script>
