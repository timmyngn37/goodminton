<template>
  <div class="container">
  <h1>Contact Us</h1>
                        <p>We're always ready to hear from you! Fill out the form below to send us a direct message.</p>

                        <contact-form 
                            @form-submitted="handleSubmit" 
                            :initial-name="'John Doe'" 
                            :initial-subscribe="false"
                        ></contact-form>

                        <div v-if="formData" class="acknowledgement">
                            <p>Thank you for contacting us! Here are the details we received:</p>
                            
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Personal Information:</h5>
                                    <p><strong>Name:</strong> {{ formData.name }}</p>
                                    <p><strong>Email:</strong> {{ formData.email }}</p>
                                    <p><strong>Phone:</strong> {{ formData.phone }}</p>
                                    <p><strong>Age:</strong> {{ formData.age }}</p>
                                    <p><strong>Country:</strong> {{ formData.country }}</p>
                                </div>
                                <div class="col-md-6">
                                    <h5>Preferences:</h5>
                                    <p><strong>Newsletter Subscription:</strong> {{ formData.subscribe ? 'Yes' : 'No' }}</p>
                                    <p><strong>Preferred Contact Method:</strong> {{ formData.contactPreference }}</p>
                                    <h5>Message:</h5>
                                    <p class="border p-2 bg-light rounded">{{ formData.message }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="container p-2 mt-4">
                            <div class="row align-items-center">
                                <div class="col-sm-6 text-center">
                                    <img src="../assets/fakemap.jpg" alt="map" class="img-fluid rounded w-50">
                                </div>
                                <div class="col-sm-6">
                                    <ul style="list-style: none;">
                                        <li><strong>Email:</strong> contact@goodminton.com</li>
                                        <li><strong>Phone:</strong> (012) 345-6789</li>
                                        <li><strong>Address:</strong> 123 Badminton Street, Racket District, Sport City</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
</template>

<script setup>
import { ref } from 'vue'
import ContactForm from './ContactForm.vue'

const formData = ref(null)

function handleSubmit(data) {
  formData.value = data
}
</script>


<style scoped>
        .acknowledgement {
            background-color: #f8f9fa;
            border: 2px solid #007bff;
            border-radius: 0.5rem;
            padding: 1.5rem;
            margin: 2rem 0;
        }

        .form-container {
            max-width: 600px;
            margin: 0 auto;
        }
</style>