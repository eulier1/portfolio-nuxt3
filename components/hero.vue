<template>
  <div class="bg-stone-800 min-h-screen">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5 text-stone-100">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm font-semibold leading-6 text-stone-400"
            >{{ item.name }}</a
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="" alt="" />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
              <div class="py-6"></div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div v-if="!isLoading" class="xs:mx-auto py-32 sm:py-48 lg:py-56">
        <div v-if="!largerThanMd" class="">
          <div class="text-center text-stone-400">
            <h2 class="text-2xl">
              <h1
                class="text-4xl font-bold tracking-tight text-amber-300 opacity-60 sm:text-6xl pb-2"
              >
                Eulier Gonzalez
              </h1>
              Software Engineer with Shopify Experience
            </h2>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a :href="mailto"
                class="rounded border-2 border-amber-400 text-amber-300 p-2.5"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <div v-else class="flex justify-around">
          <div class="text-center text-stone-400">
            <h2 class="text-2xl">
              <h1
                class="text-2xl tracking-tight text-amber-300 opacity-60 sm:text-6xl"
              >
                Eulier González
              </h1>
              <h2 class="text-2xl mt-4">
                Software Engineer with Shopify Experience
              </h2>
            </h2>
            <div class="mt-10 text-left">
              <a :href="mailto"
                class="rounded border-2 border-amber-400 text-amber-300 p-2.5 "
              >
                Contact Me
              </a>
            </div>
          </div>
          <div class="text-center text-stone-400">
            <div class="relative">
              <img
                class="image-header"
                src="https://i.imgur.com/kuWasge.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { Dialog, DialogPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

  const isLoading = ref(true)
  const breakpoints = useBreakpoints(breakpointsTailwind)
  const largerThanMd = breakpoints.greater('md')

  onMounted( () => {
    isLoading.value = false
  })

  const navigation = [
    // { name: 'About', href: '#' },
    { name: 'Recent Projects', href: '#recent_project' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]
  
  const mobileMenuOpen = ref(false)

  const mailto = ref("mailto:eulier1@gmail.com")
  </script>

<style>
.image-header {
  position: absolute;
  transform: translate(-60%, -40%);
  max-width: 40vw;
  height: 100vh;
  -o-object-fit: contain;
  object-fit: contain;
  z-index: -999;
  opacity: 0.7;
  filter: grayscale(80%);
}
</style>