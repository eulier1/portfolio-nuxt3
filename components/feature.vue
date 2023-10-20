<template>
<div class="bg-white py-24 sm:py-32" id="recent_project">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" >Recent Projects</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
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
      </dl>
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