<template>
  <div>
    <div class="container text-center">
      <h2 id="notification">{{ notification }}</h2>
    </div>
    <div v-if="!bookingSubmitted" id="main" class="container">
      <h2>Booking</h2>
      <div class="row">
        <div class="col col-sm-6">
          <form @submit.prevent="submitForm">
            <div class="row mb-3">
              <label for="name" class="col-sm-2 col-form-label">Your Name:</label>
              <div class="col-sm-5">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="formData.name"
                  placeholder="John Doe"
                >
              </div>
              <div class="col-sm-5 text-danger">
                {{ validationErrors.name }}
              </div>
            </div>
            <div class="row mb-3">
              <label for="email" class="col-sm-2 col-form-label">Email Address:</label>
              <div class="col-sm-5">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="formData.email"
                  placeholder="xxx@gmail.com"
                >
              </div>
              <div class="col-sm-5 text-danger">
                {{ validationErrors.email }}
              </div>
            </div>
            <div class="row mb-3">
              <label for="phone" class="col-sm-2 col-form-label">Phone Number:</label>
              <div class="col-sm-5">
                <input
                  type="tel"
                  class="form-control"
                  id="phone"
                  v-model="formData.phone"
                  placeholder="xxxxxxxxxx"
                >
              </div>
              <div class="col-sm-5 text-danger">
                {{ validationErrors.phone }}
              </div>
            </div>
            <div class="row mb-3">
              <label for="membership" class="col-sm-2 col-form-label">Membership:</label>
              <div class="col-sm-5">
                <input
                  type="text"
                  class="form-control"
                  id="membership"
                  v-model="formData.membership"
                  placeholder="GMT-XXXXXXXXX"
                >
              </div>
              <div class="col-sm-5 text-danger">
                {{ validationErrors.membership }}
              </div>
            </div>
            <div class="row mb-3">
              <label for="date" class="col-sm-2 col-form-label">Date of Booking:</label>
              <div class="col-sm-10">
                <input
                  type="date"
                  class="form-control"
                  id="date"
                  v-model="formData.date"
                  required
                >
              </div>
            </div>
            <div class="row mb-3">
              <label for="note" class="col-sm-2 col-form-label">Note:</label>
              <div class="col-sm-10">
                <textarea
                  class="form-control"
                  id="note"
                  v-model="formData.note"
                  cols="80"
                  rows="4"
                  placeholder="Please enter your message here."
                ></textarea>
              </div>
            </div>
            <div class="row mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="consent"
                  v-model="formData.consent"
                >
                <label class="form-check-label" for="consent">
                  By proceeding, you confirm that you have read, understood, and agree to be bound
                  by our Terms and Conditions.
                </label>
              </div>
              <div class="text-danger">
                {{ validationErrors.consent }}
              </div>
              <!-- Form Submission -->
              <div class="mt-3 mb-3">
                <input class="btn btn-primary" type="submit" value="Submit">
              </div>
            </div>
          </form>
        </div>
        <div class="col col-sm-6">
          <div class="table-responsive" style="max-height: 800px; overflow-y: auto;">
            <table class="table table-bordered text-center" id="scheduleTable">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">8:00 - 9:00 am</th>
                  <th scope="col">9:00 - 10:00 am</th>
                  <th scope="col">10:00 - 11:00 am</th>
                  <th scope="col">11:00 - 12:00 pm</th>
                  <th scope="col">12:00 - 1:00 pm</th>
                  <th scope="col">1:00 - 2:00 pm</th>
                  <th scope="col">2:00 - 3:00 pm</th>
                  <th scope="col">3:00 - 4:00 pm</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(court, courtIndex) in courts" :key="courtIndex">
                  <th scope="row">{{ court.name }}</th>
                  <td
                    v-for="(slot, slotIndex) in court.timeSlots"
                    :key="slotIndex"
                    :class="{
                      'available': !slot.booked,
                      'booked': slot.booked
                    }"
                    @click="toggleBooking(courtIndex, slotIndex)"
                    style="cursor: pointer;"
                  >
                    {{ slot.booked ? 'Booked' : '' }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Booking',
  data() {
    return {
      bookingSubmitted: false,
      notification: '',
      formData: {
        name: '',
        email: '',
        phone: '',
        membership: '',
        date: '',
        note: '',
        consent: false
      },
      validationErrors: {
        name: '',
        email: '',
        phone: '',
        membership: '',
        consent: ''
      },
      courts: [
        { name: 'Court 01', timeSlots: this.initTimeSlots() },
        { name: 'Court 02', timeSlots: this.initTimeSlots() },
        { name: 'Court 03', timeSlots: this.initTimeSlots() },
        { name: 'Court 04', timeSlots: this.initTimeSlots() },
        { name: 'Court 05', timeSlots: this.initTimeSlots() },
        { name: 'Court 06', timeSlots: this.initTimeSlots() },
        { name: 'Court 07', timeSlots: this.initTimeSlots() },
        { name: 'Court 08', timeSlots: this.initTimeSlots() }
      ]
    }
  },
  methods: {
    initTimeSlots() {
      return Array(8).fill().map(() => ({ booked: false }))
    },
    validateForm() {
      let isValid = true
      
      this.validationErrors = {
        name: '',
        email: '',
        phone: '',
        membership: '',
        consent: ''
      }
      
      if (this.formData.name.length == 0) {
        this.validationErrors.name = "You did not enter your name."
        isValid = false
      }
      
      if (this.formData.email.length == 0 || !this.formData.email.includes('@') || !this.formData.email.includes('.')) {
        this.validationErrors.email = "You did not enter a valid email."
        isValid = false
      }
      
      if (!/^\d{10}$/.test(this.formData.phone)) {
        this.validationErrors.phone = "You did not enter a valid phone number."
        isValid = false
      }
      
      if (this.formData.membership.length == 0 || !/GMT-\d{9}/.test(this.formData.membership)) {
        this.validationErrors.membership = "You did not enter a valid membership ID."
        isValid = false
      }
      
      if (!this.formData.consent) {
        this.validationErrors.consent = "You must agree to the terms and conditions."
        isValid = false
      }
      
      return isValid
    },
    submitForm() {
      if (this.validateForm()) {
        this.bookingSubmitted = true
        this.notification = "Thank you for your booking! 🎉"
      }
    },
    toggleBooking(courtIndex, slotIndex) {
      this.courts[courtIndex].timeSlots[slotIndex].booked = !this.courts[courtIndex].timeSlots[slotIndex].booked
    }
  }
}
</script>