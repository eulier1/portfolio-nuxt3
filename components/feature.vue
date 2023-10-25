<template>
<div class="bg-white py-24 sm:py-32" id="recent_project">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" >Recent Projects</p>
    </div>
    <div class="md:flex mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl pl-4">
      <!-- <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div v-for="(project, index) in projects" :key="index+1000" class="relative pl-8">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            {{ project.name }}
          </dt>
          <p class="mt-2 text-base leading-7 text-gray-600">
            <span>{{ project.startDate }}</span> <span>{{ project.endDate }}</span>
          </p>
          <dd class="mt-2 text-base leading-7 text-gray-600">
            {{ project.description[0].details }}
          </dd>
          <dd v-if="project.description[0].technicalDetails" class="mt-2 text-base leading-7 text-gray-600">
            <ul v-for="(technicalDetail, index) in project.description[0].technicalDetails" :key="index+10000" >
                - {{ technicalDetail }}
            </ul>
          </dd>
          <dd class="mt-2 text-base leading-7 text-gray-600">
            {{ project.description[0].tech }}
          </dd>
          <dd class="mt-2 text-base leading-7 text-gray-600">
            <span><a :href="project.description[0].url" target="_blank" class="underline"> URL </a></span> 
            <span> <a v-if="project.description[0].demoUrl" target="_blank" class="underline" :href="project.description[0].demoUrl"> Demo URL </a></span> 
          </dd>
          <dd v-if="project.description[0].blog" class="mt-2 text-base leading-7 text-gray-600">
            <a :href="project.description[0].blog[0].url" target="_blank" class="underline"> {{ project.description[0].blog[0].name }} </a>  
          </dd>
        </div>
      </dl> -->
      <div class="w-full md:w-1/2">
        <p class="mt-2 mb-6 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl" >Current</p>

        <ol v-for="(project, index) in projects" :key="index+1000" class="relative border-l border-gray-200 dark:border-gray-700">  
                          
            <li v-if="!project.endDate" class="mb-10 ml-6">            
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  📝
                </span>
                <a :href="project.description[0].url" target="_blank" class="underline">
                  <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{{ project.name }}<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"></span></h3>
                </a>
                <a v-if="project.companyUrl" target="_blank" class="underline" :href="project.companyUrl">
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ project.companyName }}</p>
                </a>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ project.startDate }} - {{ project.endDate }} </time>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ project.description[0].details }}</p>
                <p v-if="project.description[0].technicalDetails" class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                <span v-for="(technicalDetail, index) in project.description[0].technicalDetails">
                  <ul>{{ technicalDetail }}</ul>
                </span>
                </p>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"> {{ project.description[0].tech }}</p>

              <div class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                <a :href="project.description[0].url" target="_blank" class="underline">
                  URL</a>
              </div> 
              <div class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"> 
                <a v-if="project.description[0].demoUrl" target="_blank" class="underline" :href="project.description[0].demoUrl"> 
                  Demo URL 
                </a>
              </div> 
              <div v-if="project.description[0].blog" class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                <a :href="project.description[0].blog[0].url" target="_blank" class="underline"> {{ project.description[0].blog[0].name }}</a>
              </div>
            </li>
        </ol>
      </div>
      <div class="w-full md:w-1/2">
        <p class="mt-2 mb-6 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl" >Done</p>

        <ol v-for="(project, index) in projects" :key="index+1000" class="relative border-l border-gray-200 dark:border-gray-700">                  
          <li v-if="project.endDate" class="mb-10 ml-6">            
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                ✅
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{{ project.name }}<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"></span></h3>
              <a v-if="project.companyUrl" target="_blank" class="underline" :href="project.companyUrl">
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ project.companyName }}</p>
              </a>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ project.startDate }} - {{ project.endDate }} </time>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ project.description[0].details }}</p>
              <p v-if="project.description[0].technicalDetails" class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              <span v-for="(technicalDetail, index) in project.description[0].technicalDetails">
                <ul>{{ technicalDetail }}</ul>
              </span>
              </p>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"> {{ project.description[0].tech }}</p>

            <div class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              <a :href="project.description[0].url" target="_blank" class="underline">
                URL</a>
            </div> 
            <div class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"> 
              <a v-if="project.description[0].demoUrl" target="_blank" class="underline" :href="project.description[0].demoUrl"> 
                Demo URL 
              </a>
            </div> 
            <div v-if="project.description[0].blog" class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              <a :href="project.description[0].blog[0].url" target="_blank" class="underline"> {{ project.description[0].blog[0].name }}</a>
            </div>
        </li>
        </ol>
      </div>



    </div>
  </div>
</div>
</template>
<script setup>
import getProjects from "../server/api/projects";

const projects = ref(getProjects.reverse())

</script>
<style>
</style>