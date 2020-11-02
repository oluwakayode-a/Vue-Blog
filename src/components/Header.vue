<template>
  <header class="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 container mx-auto">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <router-link to="/">
        <img class="h-8" src="../assets/logo.png" alt="Workcation">
      </router-link>
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-gray-900 focus:text-gray-900 focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>

    <nav :class="isOpen ? 'block' : 'hidden'" class="sm:block">
      <div class="px-2 pt-2 pb-4 sm:flex sm:p-0">
        <router-link to="/category/tech/" class="mt-1 block px-2 py-1 text-gray-900 font-semibold rounded hover:bg-gray-800 hover:text-white sm:mt-0 sm:ml-2">Tech</router-link>
        <router-link to="/category/education/" class="mt-1 block px-2 py-1 text-gray-900 font-semibold rounded hover:bg-gray-800 hover:text-white sm:mt-0 sm:ml-2">Education</router-link>
        <router-link to="/category/relationship/" class="mt-1 block px-2 py-1 text-gray-900 font-semibold rounded hover:bg-gray-800 hover:text-white sm:mt-0 sm:ml-2">Relationship</router-link>
        <router-link to="/category/commercial/" class="mt-1 block px-2 py-1 text-gray-900 font-semibold rounded hover:bg-gray-800 hover:text-white sm:mt-0 sm:ml-2">Commercial</router-link>
        <!-- <AccountDropdown class="sm:ml-6 sm:block hidden" /> -->

        <!-- <div class="relative sm:ml-6 sm:block hidden">
            <button @click="isOpen = !isOpen" class="block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white z-10 relative">
            <img class="h-full w-full object-cover" src="../assets/george_washington.jpg" alt="">
            </button>

            <button v-if="isOpen" @click="isOpen = false" tabindex="-1" class="fixed inset-0 h-full w-full bg-black opacity-50 z-30 cursor-default"></button>
            <div v-if="isOpen" class="bg-white rounded-lg py-2 w-48 mt-2 shadow-lg absolute right-0 z-30">
                <router-link to="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Account settings</a>
                <router-link to="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Support</a>
                <router-link to="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Sign out</a>
            </div>
        </div> -->
      </div>

      <!-- <div class="px-4 py-5 border-t border-gray-600 sm:hidden">
        <div class="flex items-center">
          <img class="object-cover h-8 w-8 rounded-full border-gray-600" src="../assets/george_washington.jpg" alt="">
          <span class="text-white font-semibold ml-3">George Washington</span>
        </div>

        <div class="mt-2">
          <router-link to="#" class="block text-gray-800 mt-2 hover:underline">Account settings</a>
          <router-link to="#" class="block text-gray-800 mt-2 hover:underline">Support</a>
          <router-link to="#" class="block text-gray-800 mt-2 hover:underline">Sign out</a>
        </div>
      </div> -->
    </nav>
  </header>


</template>

<script>
// import AccountDropdown from './AccountDropdown'

export default {
  components: {
    // AccountDropdown,
  },
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
