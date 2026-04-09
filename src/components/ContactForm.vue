<template>
  <div class="container">
    <div class="form-container">
      <form @submit.prevent="handleSubmit">     
        <div v-show="formStore.currentStep == 1" class="step-content">
          <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Your Name:</label>
            <div class="col-sm-9">
              <input 
                type="text" 
                class="form-control" 
                v-model="formStore.formData.name" 
                placeholder="Enter your full name"
              >
              <div v-if="formStore.errors.name" class="alert alert-danger mt-2">{{ formStore.errors.name }}</div>
            </div>
          </div>

          <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Email Address:</label>
            <div class="col-sm-9">
              <input 
                type="email" 
                class="form-control" 
                v-model="formStore.formData.email" 
                placeholder="xxx@gmail.com"
              >
              <div v-if="formStore.errors.email" class="alert alert-danger mt-2">{{ formStore.errors.email }}</div>
            </div>
          </div>

          <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Phone Number:</label>
            <div class="col-sm-9">
              <input 
                type="tel" 
                class="form-control" 
                v-model="formStore.formData.phone" 
                placeholder="0412345678"
              >
              <div v-if="formStore.errors.phone" class="alert alert-danger mt-2">{{ formStore.errors.phone }}</div>
            </div>
          </div>

          <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Age:</label>
            <div class="col-sm-9">
              <input 
                type="number" 
                class="form-control" 
                v-model.number="formStore.formData.age" 
                min="1" 
                max="150"
              >
              <div v-if="formStore.errors.age" class="alert alert-danger mt-2">{{ formStore.errors.age }}</div>
            </div>
          </div>

          <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Country:</label>
            <div class="col-sm-9">
              <select class="form-control" v-model="formStore.formData.country">
                <option v-for="countryOption in countries" :key="countryOption" :value="countryOption">
                  {{ countryOption }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div v-show="formStore.currentStep == 2" class="step-content">
          <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Message:</label>
            <div class="col-sm-9">
              <textarea 
                class="form-control" 
                v-model="formStore.formData.message" 
                rows="6" 
                placeholder="Please enter your message here (minimum 10 characters)"
              ></textarea>
              <div v-if="formStore.errors.message" class="alert alert-danger mt-2">{{ formStore.errors.message }}</div>
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label">Preferred Contact Method:</label>
            <div class="form-check">
              <input 
                type="radio" 
                class="form-check-input" 
                value="Email" 
                v-model="formStore.formData.contactPreference" 
                id="prefEmail"
              >
              <label class="form-check-label" for="prefEmail">Email</label>
            </div>
            <div class="form-check">
              <input 
                type="radio" 
                class="form-check-input" 
                value="Phone" 
                v-model="formStore.formData.contactPreference" 
                id="prefPhone"
              >
              <label class="form-check-label" for="prefPhone">Phone</label>
            </div>
          </div>
        </div>

        <div v-show="formStore.currentStep == 3" class="step-content">
          <div class="mb-4">
            <h5>Newsletter & Updates</h5>
            <div class="form-check mb-2">
              <input 
                type="checkbox" 
                class="form-check-input" 
                v-model="formStore.formData.subscribe" 
                id="subscribeCheck"
              >
              <label class="form-check-label" for="subscribeCheck">
                <strong>Subscribe to our Newsletter</strong>
              </label>
            </div>

            <div class="form-check mb-2">
              <input 
                type="checkbox" 
                class="form-check-input" 
                v-model="formStore.formData.marketingUpdates" 
                id="marketingCheck"
              >
              <label class="form-check-label" for="marketingCheck">
                <strong>Marketing Updates</strong>
              </label>
            </div>

            <div class="form-check mb-2">
              <input 
                type="checkbox" 
                class="form-check-input" 
                v-model="formStore.formData.eventNotifications" 
                id="eventCheck"
              >
              <label class="form-check-label" for="eventCheck">
                <strong>Event Notifications</strong>
              </label>
            </div>
          </div>
        </div>
        <!-- Navigation Buttons -->
        <div class="d-flex justify-content-between mt-4">
          <button 
            type="button" 
            class="btn btn-secondary" 
            :disabled="!formStore.canGoPrevious"
            @click="formStore.previousStep()"
          >
            Previous
          </button>

          <div>
            <button 
              v-if="formStore.canGoNext" 
              type="button" 
              class="btn btn-primary" 
              @click="formStore.nextStep()"
            >
              Next Step
            </button>

            <button 
              v-else 
              type="submit" 
              class="btn btn-success"
            >
              Submit Form
            </button>
          </div>
        </div>
      </form>
    </div>

    <div v-if="submitted" class="alert alert-success mt-4">
      <h5>Thank you for your submission!</h5>
      <p>We have received your message and will get back to you soon.</p>
    </div>
    <div v-if="submittedData" class="acknowledgement mt-4">
      <h5><strong>Form Data (Emitted from ContactForm):</strong></h5>
      <pre class="bg-light p-3 rounded">{{ JSON.stringify(submittedData, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { FormProgress } from '../stores/form.js'

const emit = defineEmits(['formSubmitted'])

const props = defineProps({
  initialName: String,
  initialSubscribe: Boolean
})

const formStore = FormProgress()
const formData = ref(null)
const submitted = ref(false)
const showSuccess = ref(false)
const submittedData = ref(null)
const countries = ref(['Australia','United States','Canada','Japan','Vietnam','Other'])

formStore.formData.name = props.initialName
formStore.formData.subscribe = props.initialSubscribe

function handleSubmit() {
  const submittedFormData = formStore.submitForm()
  if (submittedFormData) {
    formData.value = submittedFormData
    submitted.value = true
    showSuccess.value = true
    submittedData.value = submittedFormData
    
    emit('formSubmitted', submittedFormData)
    
    setTimeout(() => {
      resetForm()
    }, 2000)
  } else {
    for (let step = 1; step <= formStore.totalSteps; step++) {
      if (!formStore.isStepComplete(step)) {
        formStore.goToStep(step)
        break
      }
    }
  }
}

function resetForm() {
  formStore.resetForm()
  formStore.formData.name = props.initialName
  formStore.formData.subscribe = props.initialSubscribe
  
  formData.value = null
  submitted.value = false
  showSuccess.value = false
  submittedData.value = null
}

onUnmounted(() => {
  formStore.resetForm()
})
</script>