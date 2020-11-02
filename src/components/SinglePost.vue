<template>
    <section class="mt-4">  
        <div class="bg-gray-100 py-4">
            <div class="container flex flex-wrap justify-between items-center">
                <h3 class="font-bold text-2xl text-gray-800">Blog Post</h3>
                <div>
                    <span class="md:mx-2 text-xs">Home ></span>
                    <span class="md:mx-2 text-xs mx-2">Life Stories ></span>
                    <span class="md:mx-2 text-xs mx-2">{{ post.title }}</span>
                </div>
            </div>
        </div>

        <div class="mt-4 container">
            <div class="row">
                <div class="col-lg-8 mt-2">
                    <article>
                        <h1 class="text-2xl font-bold text-gray-800">{{ post.title }}</h1>
                        <div class="text-xs text-gray-700 flex flex-wrap justify-between mt-2 items-center">
                            <div>
                                <span>by Rho</span>
                                <span class="sm:ml-2">{{ post.created | formatDate}}</span>
                            </div>

                            <div>
                                <span class="ml-2">General,</span>
                                <span class="ml-2">Life Stories,</span>
                                <span class="ml-2">1 Comment</span>
                            </div>
                        </div>
                        
                        <div class="border-b mt-4"></div>
                        <div class="mt-4 leading-normal text-gray-900 font-serif">
                            <p class="mt-4" v-html="post.content">
                               
                            </p>
                        </div>

                        <div class="mt-4">
                            <h3 class="font-bold">Tags in</h3>
                            <div class="flex flex-wrap mt-4 max-w-xs">
                            <!-- Start of the tag -->
                                <div class="inline-flex rounded overflow-hidden mr-2 mb-2" v-for="i in 4" :key="i">
                                    <span class="leading-loose bg-gray-200 text-gray-900 font-bold px-2 py-1 text-xs">
                                        Music
                                    </span>
                                </div>
                            <!-- End of the tag -->
                            </div>
                        </div>
                    </article>

                    <div class="border-b mt-4"></div>
                        <!-- <hr> -->

                    <div class="mt-4 flex flex-wrap items-center justify-between">
                        <button class="px-5 py-3 bg-gray-300 rounded-full">Share</button>
                        <div class="">
                            <button class="rounded-full text-gray-900 bg-gray-300 px-4 font-bold py-2">&larr;</button>
                            <span class="mx-2">34 / 35</span>
                            <button class="rounded-full text-gray-900 bg-gray-300 px-4 font-bold py-2">&rarr;</button>
                        </div>
                    </div>

                    <div class="border-b mt-4"></div>

                    <div class="mt-4">
                        <h3 class="font-bold text-gray-900">{{ comments.length }} Comments</h3>
                    </div>

                    <div class="border-b mt-4"></div>

                    <div v-for="(comment, index) in comments" :key="index">
                        <div class="flex items-center my-6">
                            <div class="h-10 w-10 rounded-full mr-4 ">
                                <img class="object-cover object-center" src="../assets/logo.png" alt="Avatar of Jonathan Reinink">
                            </div>
                            <div class="text-sm">
                                <p class="text-gray-600 leading-none text-xs" v-show="typeof(comment.created) !== 'undefined'">{{ comment.created | formatDate }}</p>
                                <p class="text-gray-600 leading-none text-xs" v-show="typeof(comment.created) === 'undefined'">Just Now</p>
                                <p class="text-gray-900 text-base font-bold my-1">{{ comment.name }}</p>
                                <p class="text-gray-900 text-sm mt-1">{{ comment.text }}</p>
                            </div>
                        </div>
                        <div class="border-b mt-4"></div>
                    </div>

                    <div class="border-b mt-4"></div>

                    <div class="mt-4">
                        <h1 class="text-gray-800 font-bold text-2xl">Leave a comment</h1>
                        <form class="w-full max-w-lg mb-3 mt-4" @submit.prevent="addComment()">
                            <div class="flex flex-wrap -mx-3">
                                <div class="w-full px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        Name
                                    </label>
                                    <input v-model="name" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text">
                                    <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                                </div>
                            </div>

                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                        Comment
                                    </label>
                                    <textarea v-model="text" cols="30" rows="10" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                                    <!-- <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> -->
                                </div>
                            </div>

                            <button type="submit" class="ml-1 px-3 py-3 rounded-md bg-gray-700 text-white">Post Comment</button>
                        </form>
                    </div>
                </div>

                <div class="col-lg-4">
                    <Sidebar class="max-w-sm md:mt-3" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Sidebar from './Sidebar'
import axios from 'axios'

export default {
    components: {
        Sidebar,
    },
    data() {
        return {
            post: '',
            slug: this.$route.params.slug,
            comments: [],
            
            // Comments
            name: '',
            text: '',
        }
    },
    created() {
        axios.get(`https://o-blog-api.herokuapp.com/post/${this.slug}/`)
        .then(response => {
            this.post = response.data.result
            this.comments = this.post.comments
        })
        .catch(error => {
            console.log(error)
        })
    },
    methods: {
        addComment() {
            axios.post("https://o-blog-api.herokuapp.com/comment", {
                name: this.name,
                text: this.text,
                post: this.post.id
            })
            .then(response => {
                this.comments.push(response.data.result)
                console.log(response.data.result)

                // Make fields empty
                this.name = ''
                this.text = ''
            })
        }
    }
}
</script>