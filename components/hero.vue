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
      <div class="xs:mx-auto py-32 sm:py-48 lg:py-56">
        <div class="lg:hidden">
          <div class="text-center">
            <h2 class="text-2xl">
              I'M
              <h1
                class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl pb-2"
              >
                Eulier Gonzalez
              </h1>
              Full-stack Js/Ts Developer & Consultant
            </h2>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <button
                class="rounded border-2 border-amber-400 text-amber-300 p-2.5"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div class="hidden lg:flex lg:justify-around">
          <div class="text-center text-stone-400">
            <h2 class="text-2xl">
              I'M
              <span
                class="text-2xl tracking-tight text-amber-300 opacity-60 sm:text-6xl"
              >
                Eulier González
              </span>
            </h2>
            <h2 class="text-2xl mt-4">
              Full-stack Js/Ts Developer & Consultant
            </h2>
            <div class="mt-10 text-left">
              <button
                class="rounded border-2 border-amber-400 text-amber-300 p-2.5 "
              >
                Contact Me
              </button>
            </div>
          </div>
          <div class="text-center text-stone-400">
            <div class="relative">
              <img
                class="image-header"
                src="~/assets/img/hero-image-nobg1.png"
                alt=""
              />
            </div>
            <div class=""></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
  import { ref } from 'vue'
  import { Dialog, DialogPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'About', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Contact', href: '#' }
  ]
  
  const mobileMenuOpen = ref(false)
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
  opacity: 0.4;
  filter: grayscale(80%);
}
</style>