<template>
    <div class="my-8 mx-auto max-w-lg">
        <h1 class="font-bold text-4xl my-4 mx-1">Add Post</h1>
        <form class="w-full max-w-lg" @submit.prevent="addPost()">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Title
                    </label>
                    <input v-model="title" required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
                    <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Content
                </label>
                <CKEditor v-model="content" :config="editorConfig" />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        Category
                    </label>
                    <div class="relative">
                        <select v-model="category" required class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option v-for="(category, index) in categories" :key="index" :value="index">{{ category }}</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <button class="bg-gray-200 border border-gray-200 px-4 py-3 mt-3">Submit</button>
        </form>
    </div>
</template>

<script>
import CKEditor from 'ckeditor4-vue';
import axios from 'axios'

export default {
    components: {
        CKEditor: CKEditor.component
    },
    data() {
        return {
            content: '',
            categories: [],
            title: '',
            category: '',

            editorConfig: {
                
            }
        }
    },
    created() {
        axios.get("https://o-blog-api.herokuapp.com/categories")
        .then(response => {
            response.data.forEach(post => {
                this.categories.push(post.name)
            })
        })
    },
    methods: {
        addPost() {
            axios.post("https://o-blog-api.herokuapp.com/create/", {
                title: this.title,
                content: this.content,
                category: this.category
            })
            .then(response => {
                console.log(response.data)
                // Empty Fields
                this.title = ''
                this.content = ''
                this.category = ''
            })
        },
        showCategory() {
            console.log(this.category)
        }
    },
}
</script>