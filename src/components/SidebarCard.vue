<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <div class="px-4 py-4">
      <p class="text-xs text-gray-600 font-semibold">by Rho . {{ post.created | formatDate }}</p>
      <router-link class="font-bold text-2xl text-gray-700 mb-2 block hover:underline" :to="`/post/${post.slug}`">{{ post.title }}</router-link>
      <p class="text-gray-700 text-sm truncate" v-html="post.content">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post',]
}
</script>
