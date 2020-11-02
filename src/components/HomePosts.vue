<template>
    <div>
        <Carousel />
        <section class="mt-4 container">
            <div class="mx-auto">
                <div class="flex flex-wrap mt-4 items-center justify-center">
                        <!-- Start of the tag -->
                    <div class="inline-flex rounded overflow-hidden mr-2 mb-2" v-for="(category, index) in categories" :key="index">
                        <button class="leading-loose bg-gray-200 text-gray-900 font-bold px-2 py-1 text-xs" @click="filterPostsbyCategory(category.name)">
                            {{ category.name }}
                        </button>
                    </div>
                    <!-- End of the tag -->
                </div>
            </div>

            <div class="mt-4">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-6 my-3" v-for="(post, index) in posts" :key="index">
                                <PostCard :post=post />
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <SidebarCard class="my-4" v-for="post in posts.slice(0,3)" :key="post.id" :post="post" />
                    </div>
                </div>
            </div>
        </section>
    </div>
    
</template>

<style>
</style>

<script>
import axios from 'axios';

import PostCard from './PostCard'
import Carousel from './Carousel'
import SidebarCard from './SidebarCard'

export default {
    components: {
        PostCard,
        SidebarCard,
        Carousel,
    },
    data() {
        return {
            posts: [],
            categories: [],
        }
    },
    created() {
        axios.get("https://o-blog-api.herokuapp.com/")
        .then(response => {
            this.posts = response.data
        });

        axios.get("https://o-blog-api.herokuapp.com/categories/")
        .then(response => {
            this.categories = response.data
        })
    },
    methods: {
        filterPostsbyCategory(category) {
            let filtered = this.categories.filter(item => item.name === category)
            console.log(filtered[0].posts)
            this.posts = filtered[0].posts
        }
    }
}
</script>