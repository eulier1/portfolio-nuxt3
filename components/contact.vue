<template>
    <div class="bg-white py-24 sm:py-32" id="contact">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center" >
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Shall we?</p>
          <p class="mt-6 text-lg leading-8 text-gray-600 text-center">Email/follow me on</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div v-for="feature in features" :key="feature.name" class="relative">
              <dt class="text-base font-semibold leading-7 text-gray-900 text-center">
                <a :href="feature.url" target="_blank" class="underline">{{ feature.name }}</a> 
              </dt>
            </div>
          </dl>
        </div>
      </div>
</div>
<div class="bg-white py-6 sm:py-8">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <p class="mt-6 text-lg leading-8 text-gray-600 text-center">Made with Vue 3, Nuxt 3 and Tailwinds</p>  
    </div>
</div>
</template>
  
  <script setup>
  
  const features = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/arthard101',
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/channel/UCXFy6a8lwArg1XAFjX-HVKw',
    },
    {
      name: 'Threads',
      url: "https://www.threads.net/@therealeulier"
    },
    {
      name: 'Email',
      url: 'mailto:eulier1@gmail.com',
    },
  ]
  </script>