import { defineStore } from 'pinia'

export const FormProgress = defineStore('multiStepForm', {
    state: () => ({
        currentStep: 1,
        totalSteps: 3,
        formData: {
            name: 'John Doe',
            email: '',
            phone: '',
            age: 18,
            country: 'Australia',

            message: '',
            contactPreference: 'Email',

            subscribe: false,
            marketingUpdates: false,
            eventNotifications: false
        },
        stepValidation: {
            1: false,
            2: false,
            3: false
        },
        errors: {}
    }),

    getters: {
        canGoNext: (state) => state.currentStep < state.totalSteps,

        canGoPrevious: (state) => state.currentStep > 1,

        isStepComplete: (state) => (step) => state.stepValidation[step],
    },

    actions: {
        nextStep() {
            if (this.validateCurrentStep() && this.canGoNext) {
                this.currentStep++
            }
        },

        previousStep() {
            if (this.canGoPrevious) {
                this.currentStep--
            }
        },

        goToStep(step) {
            if (step >= 1 && step <= this.totalSteps) {
                this.currentStep = step
            }
        },

        validateCurrentStep() {
            this.errors = {}
            let isValid = true

            if (this.currentStep == 1) {
                if (!this.formData.name.trim()) {
                    this.errors.name = 'Name is required'
                    isValid = false
                }

                if (!this.formData.email.trim()) {
                    this.errors.email = 'Email is required'
                    isValid = false
                } else if (!/\S+@\S+\.\S+/.test(this.formData.email)) {
                    this.errors.email = 'Please enter a valid email'
                    isValid = false
                }

                if (this.formData.phone.search(/^\d{10}$/) == -1) {
                    this.errors.phone = 'Phone number is required'
                    isValid = false
                }

                if (this.formData.age < 1 || this.formData.age > 100) {
                    this.errors.age = 'Age must be between 1 and 100'
                    isValid = false
                }
            }

            if (this.currentStep == 2) {
                if (!this.formData.message.trim()) {
                    this.errors.message = 'Message is required'
                    isValid = false
                } else if (this.formData.message.trim().length < 10) {
                    this.errors.message = 'Message must be at least 10 characters long'
                    isValid = false
                }
            }

            if (this.currentStep == 3) {
                isValid = true
            }

            this.stepValidation[this.currentStep] = isValid
            return isValid
        },

        resetForm() {
            this.currentStep = 1
            this.formData = {
                name: 'John Doe',
                email: '',
                phone: '',
                age: 18,
                country: 'Australia',
                message: '',
                contactPreference: 'Email',
                subscribe: false,
                marketingUpdates: false,
                eventNotifications: false
            }
            this.stepValidation = {
                1: false,
                2: false,
                3: false
            }
            this.errors = {}
        },

        submitForm() {
            let allValid = true
            for (let step = 1; step <= this.totalSteps; step++) {
                const currentStep = this.currentStep
                this.currentStep = step
                if (!this.validateCurrentStep()) {
                    allValid = false
                }
                this.currentStep = currentStep
            }

            if (allValid) {
                return { ...this.formData }
            }
            return null
        }
    }
})