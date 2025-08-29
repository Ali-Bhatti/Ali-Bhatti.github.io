<template>
  <v-container class="my-16">
    <h2 class="text-h4 text-center mb-8">My Projects</h2>
    <v-row align="stretch" dense>
      <v-col
        v-for="project in projects"
        :key="project.title"
        cols="12"
        md="4"
      >
        <ProjectCard :project="project" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Personal website built with Vue and Vuetify.',
    tags: ['Vue', 'Vuetify'],
    link: 'https://github.com/'
  },
  {
    title: 'API Server',
    description: 'REST API built with Node.js and Express.',
    tags: ['Node.js', 'Express'],
    link: '#'
  },
  {
    title: 'UI Components',
    description: 'Reusable component library styled with Tailwind and Vuetify.',
    tags: ['UI', 'Tailwind'],
    link: '#'
  }
]
</script>
