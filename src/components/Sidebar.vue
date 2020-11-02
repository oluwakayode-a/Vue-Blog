<template>
    <div>
        <div class="flex items-center my-6" v-for="(post, index) in posts" :key="index">
            <div class="h-20 w-20 rounded-full mr-4 ">
                <img class="object-cover object-center" src="../assets/logo.png" alt="Avatar of Jonathan Reinink">
            </div>
            <div class="text-sm">
                <p class="text-gray-600 leading-none">Books, Education</p>
                <router-link class="text-gray-900 text-xl font-bold hover:underline" :to="`/post/${post.slug}`">{{ post.title }}</router-link>
            </div>
            <hr>
        </div>

        <form class="w-full max-w-sm mt-4">
            <div class="flex items-center border-b border-teal-500 py-2">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search" aria-label="Full name">
                <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                    Search
                </button>
            </div>
        </form>

        <div class="flex flex-wrap mt-4 max-w-xs">
                <!-- Start of the tag -->
            <div class="inline-flex rounded overflow-hidden mr-2 mb-2" v-for="i in 10" :key="i">
                <span class="leading-loose bg-gray-200 text-gray-900 font-bold px-2 py-1 text-xs">
                    Music
                </span>
            </div>
            <!-- End of the tag -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            posts: []
        }
    },
    created() {
        axios.get("https://o-blog-api.herokuapp.com/")
        .then(response => {
            this.posts = response.data
        })
    }
}
</script>
