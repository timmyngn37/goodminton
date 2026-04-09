<template>
  <div class="container">
    <h2>Shop</h2>
    <form v-if="!submitted" @submit.prevent="handleSubmit">
      <!-- Racquets -->
      <div id="Racquets">
        <h2 class="text-center" style="background-color: rgb(127, 232, 255);">
          RACQUETS
        </h2>
        <div class="row">
          <div
            v-for="n in 4"
            :key="'racquet-' + n"
            class="col-12 col-sm-6"
          >
            <div class="card h-100">
              <div class="card-body">
                <div class="text-center">
                  <img
                    src="../assets/racquet.jpg"
                    class="card-img-top"
                    :alt="'racquet ' + n"
                    style="width: 50%; height: auto;"
                  />
                </div>
                <h5 class="card-title">Racquet {{ n }}</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="racquet"
                    :id="'racquet-' + n"
                    :value="'racquet-' + n"
                    v-model="selectedRacquet"
                  />
                  <label class="form-check-label" :for="'racquet-' + n">
                    Select this racquet.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Shoes -->
      <div id="Shoes" class="mt-4">
        <h2 class="text-center" style="background-color: rgb(127, 232, 255);">
          SHOES
        </h2>
        <div class="row">
          <div
            v-for="n in 4"
            :key="'shoes-' + n"
            class="col-12 col-sm-6"
          >
            <div class="card h-100">
              <div class="card-body">
                <div class="text-center">
                  <img
                    src="../assets/shoes.jpg"
                    class="card-img-top"
                    :alt="'shoes ' + n"
                    style="width: 50%; height: auto;"
                  />
                </div>
                <h5 class="card-title">Shoes {{ n }}</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="shoes"
                    :id="'shoes-' + n"
                    :value="'shoes-' + n"
                    v-model="selectedShoes"
                  />
                  <label class="form-check-label" :for="'shoes-' + n">
                    Select this design.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-3 mb-3 d-flex justify-content-end">
        <input class="btn btn-primary" type="submit" value="Submit" />
      </div>
    </form>

    <div v-else class="mt-5 text-center">
      <h3>Your Selection</h3>
      <p><strong>Racquet:</strong> {{ selectedRacquet || "None" }}</p>
      <p><strong>Shoes:</strong> {{ selectedShoes || "None" }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedRacquet = ref("");
const selectedShoes = ref("");
const submitted = ref(false);

function handleSubmit() {
  submitted.value = true;
}
</script>
