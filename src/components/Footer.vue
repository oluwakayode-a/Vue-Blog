<template>
     <footer class="mx-auto bg-gray-700 py-8 border-t border-gray-400 mt-6">
        <p class="text-white text-center text-xs">&copy; Copyright Vue Blog {{ year }}</p>
    </footer>
</template>

<script>
export default {
    computed: {
        year() {
            return new Date().getFullYear();
        }
    }
}
</script>