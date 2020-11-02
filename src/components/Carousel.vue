<template>
    <div class="carousel relative md:container mx-auto" style="max-width:1600px;">
        <div class="carousel-inner relative overflow-hidden w-full">
            <div>
                <!--Slide 1-->
                <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
                <div class="carousel-item absolute opacity-0" style="height:70vh;">
                    <div class="h-full w-full mx-auto carousel-image flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style="background-image: url('https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80');">

                        <div class="container mx-auto z-10">
                            <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                                <p class="text-gray-100 font-bold bg-red-500 rounded-md px-2 py-1 text-sm">LIFE</p>
                                <p class="text-gray-200 md:text-4xl my-4 uppercase font-bold leading-tight">{{ posts[0].title }}</p>
                                <p class="mb-4 text-gray-100 truncate max-w-xs" v-html="posts[0].content">
                                    
                                </p>
                                <a class="text-sm uppercase font-bold inline-block no-underline z-10 bg-gray-700 text-white px-3 py-3 leading-relaxed hover:shadow-xl" href="#">View Post</a>
                            </div>
                        </div>
                    </div>
                </div>
                <label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                <label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
            </div>

            <div v-if="typeof(posts[1]) !== 'undefined'">
                <!--Slide 2-->
                <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
                <div class="carousel-item absolute opacity-0 bg-cover bg-right" style="height:70vh;">
                    <div class="h-full w-full mx-auto carousel-image flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style="background-image: url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80');">

                        <div class="container mx-auto z-10">
                            <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                                <p class="text-gray-100 font-bold bg-red-500 rounded-md px-2 py-1 text-sm">LIFE</p>
                                <p class="text-gray-200 md:text-4xl my-4 uppercase font-bold leading-tight">{{ posts[1].title }}</p>
                                <p class="mb-4 text-gray-100 truncate max-w-xs" v-html="posts[1].content">
                                    
                                </p>
                                <a class="text-sm uppercase font-bold inline-block no-underline z-10 bg-gray-700 text-white px-3 py-3 leading-relaxed hover:shadow-xl" href="#">View Post</a>
                            </div>
                        </div>

                    </div>
                </div>
                <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                <label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
            </div>

            <div v-if="typeof(posts[2]) !== 'undefined'">
                <!--Slide 3-->
                <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
                <div class="carousel-item absolute opacity-0" style="height:70vh;">
                    <div class="h-full w-full mx-auto carousel-image flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom" style="background-image: url('https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80');">

                        <div class="container mx-auto z-10">
                            <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                                <p class="text-gray-100 font-bold bg-red-500 rounded-md px-2 py-1 text-sm">LIFE</p>
                                <p class="text-gray-200 md:text-4xl my-4 uppercase font-bold leading-tight">{{ posts[2].title }}</p>
                                <p class="mb-4 text-gray-100 truncate max-w-xs" v-html="posts[2].content">
                                    
                                </p>
                                <a class="text-sm uppercase font-bold inline-block no-underline z-10 bg-gray-700 text-white px-3 py-3 leading-relaxed hover:shadow-xl" href="#">View Post</a>
                            </div>
                        </div>

                    </div>
                </div>
                <label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                <label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
            </div>

            <!-- Add additional indicators for each slide-->
            <ol class="carousel-indicators">
                <li class="inline-block mr-3">
                    <label for="carousel-1" class="carousel-bullet cursor-pointer block md:text-4xl text-gray-400 hover:text-gray-900">•</label>
                </li>
                <li class="inline-block mr-3">
                    <label for="carousel-2" class="carousel-bullet cursor-pointer block md:text-4xl text-gray-400 hover:text-gray-900">•</label>
                </li>
                <li class="inline-block mr-3">
                    <label for="carousel-3" class="carousel-bullet cursor-pointer block md:text-4xl text-gray-400 hover:text-gray-900">•</label>
                </li>
            </ol>

        </div>
    </div>
</template>

<style>

    
    .carousel-open:checked + .carousel-item {
        position: static;
        opacity: 100;
    }
    
    .carousel-item {
        -webkit-transition: opacity 0.6s ease-out;
        transition: opacity 0.6s ease-out;
    }
    
    #carousel-1:checked ~ .control-1,
    #carousel-2:checked ~ .control-2,
    #carousel-3:checked ~ .control-3 {
        display: block;
    }
    
    .carousel-indicators {
        list-style: none;
        margin: 0;
        padding: 0;
        position: absolute;
        bottom: 2%;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 10;
    }
    
    #carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
    #carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
    #carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
        color: #000;
        /*Set to match the Tailwind colour you want the active one to be */
    }

    .carousel-image::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(to bottom right,#002f4b,#dc4225);
        opacity: .6; 
  }
</style>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            posts: []
        }
    },
    created() {
        axios.get("http://localhost:8000/")
        .then(response => {
            this.posts = response.data.filter(post => post.is_featured === true)
        })
    }
}
</script>