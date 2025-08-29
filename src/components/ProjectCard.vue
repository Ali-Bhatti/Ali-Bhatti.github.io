<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <v-card class="h-100 d-flex flex-column">
    <v-img v-if="project.image" :src="project.image" height="160" cover></v-img>
    <v-card-title>{{ project.title }}</v-card-title>
    <v-card-text class="flex-grow-1">{{ project.description }}</v-card-text>
    <v-card-actions class="flex-wrap">
      <v-chip
        v-for="tag in project.tags"
        :key="tag"
        class="ma-1"
        color="primary"
        size="small"
        label
      >{{ tag }}</v-chip>
      <v-spacer></v-spacer>
      <v-btn v-if="project.link" :href="project.link" target="_blank" variant="text">
        View
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.h-100 {
  height: 100%;
}
</style>
