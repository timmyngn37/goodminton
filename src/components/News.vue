<template>
  <div class="container">
    <h2>News</h2>
    <div class="row mb-2 mt-2" v-for="(item, index) in newsList" :key="index">
      <div class="col-sm-4">
        <img :src="item.img" :alt="item.alt" class="img-fluid" width="300" height="300">
      </div>
      <div class="col-sm-8">
        <a :href="item.link" target="_blank">{{ item.title }}</a>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

export default {
  data() {
    return {
      newsList: [
        {
          img: pic1,
          alt: "pic 1",
          link: "https://www.deakin.edu.au/",
          title: "Deakin University",
          description: "I wish to play Badminton at Deakin!"
        },
        {
          img: pic2,
          alt: "pic 2",
          link: "https://www.monash.edu.au/",
          title: "Monash University",
          description: "I wish to play Badminton at Monash!"
        },
        {
          img: pic3,
          alt: "pic 3",
          link: "https://www.latrobe.edu.au/",
          title: "La Trobe University",
          description: "I wish to play Badminton at La Trobe!"
        }
      ]
    };
  }
};
</script>
