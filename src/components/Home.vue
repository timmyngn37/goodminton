<template>
    <main>
        <div class="row">
            <div class="w-50 col-md-12">
                <Carousel />
            </div>
            <div class="col-md-6">
                <News />
            </div>
        </div>
        <div class="container bg-info-subtle mt-5" id="About">
            <!-- Introduction -->
            <h2>About Us</h2>
            <div class="row p-4 mb-4">
                <div class="col-12 col-sm-8">
                    <p>
                        Welcome to Goodminton, your ultimate destination for everything related to badminton.
                        Founded by
                        a team of passionate players and enthusiasts, our mission is to foster a vibrant badminton
                        community by
                        providing top-quality equipment, professional booking services, and the latest news and
                        updates
                        from the world of badminton.
                    </p>
                    <p>
                        At Goodminton, we understand the unique needs of every player, from beginners to seasoned
                        professionals.
                        Our carefully curated shop offers a wide range of products, including high-performance
                        racquets,
                        comfortable and durable footwear, and essential accessories. We partner with leading brands
                        to
                        ensure
                        that every item meets the highest standards of quality and performance.
                    </p>
                    <p>
                        Beyond just a store, Goodminton is a hub for the sport. Our easy-to-use booking system
                        allows
                        you to
                        find and reserve badminton courts at your convenience. We also keep you connected through
                        our
                        news
                        section, where you'll find articles on training tips, player interviews, and upcoming
                        events.
                        Additionally, our competitions section provides details on tournaments and leagues, giving
                        you a
                        chance
                        to test your skills and connect with fellow players.
                    </p>
                    <p>
                        We believe that badminton is more than just a game; it’s a way to stay active, challenge
                        yourself, and
                        build lasting friendships. Join the Goodminton family today and let us help you elevate your
                        game.
                    </p>
                </div>
                <div class="col-12 col-md-4">
                    <div class="row g-1">
                        <div class="col-12 col-sm-6 text-center">
                            <img src="../assets/pic4.jpg" alt="pic 4" class="img-fluid" width="300" height="300">
                        </div>
                        <div class="col-12 col-sm-6 text-center">
                            <img src="../assets/pic5.jpg" alt="pic 5" class="img-fluid" width="300" height="300">
                        </div>
                        <div class="col-12 col-sm-6 text-center">
                            <img src="../assets/pic6.jpg" alt="pic 6" class="img-fluid" width="300" height="300">
                        </div>
                        <div class="col-12 col-sm-6 text-center">
                            <img src="../assets/pic7.jpg" alt="pic 7" class="img-fluid" width="300" height="300">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container p-2">
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
    </main>
</template>

<script setup>
import News from './News.vue'
import Carousel from './Carousel.vue';
</script>