<template>
    <section class="mt-4">  
        <div class="bg-gray-100 py-4">
            <div class="container flex flex-wrap justify-between items-center">
                <h3 class="font-bold text-2xl text-gray-800">{{ category.name }}</h3>
                <div>
                    <span class="md:mx-2 text-xs">Home ></span>
                    <span class="md:mx-2 text-xs mx-2">Category ></span>
                    <span class="md:mx-2 text-xs mx-2">{{ category.name }}</span>
                </div>
            </div>
        </div>

        <div class="mt-4 container">
            <div class="row">
                <div class="col-lg-8 mt-2">
                    <PostCard v-for="post in category.posts" :post="post" :key="post.id" class="my-4" />
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
import PostCard from './PostCard'
import axios from 'axios'

export default {
    components: {
        Sidebar,
        PostCard
    },
    data() {
        return {
            category: '',
            slug: this.$route.params.slug,
        }
    },
    created() {
        axios.get(`http://localhost:8000/category/${this.slug}/`)
        .then(response => {
            this.category = response.data.result
        })
        .catch(error => {
            console.log(error)
        })
    },
    mounted() {
        console.log(this.category)
    }
}
</script>