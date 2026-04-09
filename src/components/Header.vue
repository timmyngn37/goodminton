<template>
    <header>
        <!-- Navigation Bar -->
        <nav class="navbar navbar-expand-lg" :class="darkModeStore.isDarkMode ? 'bg-dark' : 'bg-info'">
            <div class="col col-sm-1 text-center">
                <!-- Brand Logo -->
                 <router-link to="/">
                    <img src="../assets/Goodminton.png" width="100" height="100" alt="Goodminton">
                </router-link>
            </div>
            <div class="col">
                <div class="row">
                    <!-- Brand Name -->
                    <div class="col text-center">
                        <p class="navbar-brand text-white fw-bold">GOODMINTON - OFFICIAL WEBSITE</p>
                    </div>
                    <!-- Search -->
                    <div class="col">
                        <form class="d-flex" role="search">
                            <input 
                                class="form-control me-2" 
                                :class="darkModeStore.isDarkMode ? 'bg-dark text-white border-secondary' : ''"
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search" 
                            />
                            <button class="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                    <!-- Toggle -->
                    <div class="col text-center">
                        <button 
                            class="btn"
                            :class="darkModeStore.isDarkMode ? 'btn-light' : 'btn-dark'"
                            @click="toggleDarkMode"
                        >
                            {{ darkModeStore.buttonText }}
                        </button>
                    </div>
                </div>
                <div class="row text-center">
                    <!-- Brand Slogan -->
                    <p class="navbar-brand text-white fw-semibold">Good Morning with Goodminton 🌞🏸!</p>
                </div>
                <div class="row">
                    <!-- Menu -->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Menu"
                        aria-controls="Menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="Menu">
                        <ul class="navbar-nav w-100 d-flex justify-content-evenly mb-2 mb-lg-0">
                            <li class="nav-item"><router-link to="/#About" class="nav-link text-white">About Us</router-link></li>
                            <li class="nav-item"><router-link to="/booking" class="nav-link text-white">Booking</router-link></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="shop.html" role="button"
                                    data-bs-toggle="dropdown">Shop</a>
                                <ul class="dropdown-menu" :class="darkModeStore.isDarkMode ? 'dropdown-menu-dark' : ''">
                                    <li><router-link to="/shop#Racquets" class="dropdown-item">Racquets</router-link></li>
                                    <li><router-link to="/shop#Shoes" class="dropdown-item">Shoes</router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item"><router-link to="/news" class="nav-link text-white">News</router-link></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" role="button"
                                    data-bs-toggle="dropdown">Competitions</a>
                                <ul class="dropdown-menu" :class="darkModeStore.isDarkMode ? 'dropdown-menu-dark' : ''">
                                    <li><router-link to="/competitions#Schedule" class="dropdown-item">Schedule</router-link></li>
                                    <li><router-link to="/competitions#Results" class="dropdown-item">Results</router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item"><router-link to="/contact" class="nav-link text-white">Contact</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <Banner />
</template>

<script setup>
import { DarkMode } from '../stores/theme.js'
import Banner from './Banner.vue'

const darkModeStore = DarkMode()

const toggleDarkMode = () => {
    darkModeStore.toggleDarkMode()
}
</script>