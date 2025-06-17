<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const navItems = [
  { title: 'Home', to: '/' },
  { title: 'About', to: '/about' },
  { title: 'Work', to: '/work' },
  { title: 'Contact', to: '/contact' }
]
</script>

<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar color="white" elevation="1">
      <v-container class="mx-auto d-flex align-center">
        <v-app-bar-title class="text-h5 font-weight-bold">
          Ali Bhatti
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex">
          <v-btn v-for="item in navItems" :key="item.title" :to="item.to" variant="text" class="mx-2">
            {{ item.title }}
          </v-btn>
        </div>

        <!-- Mobile Navigation Button -->
        <v-app-bar-nav-icon class="d-flex d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" temporary location="right">
      <v-list>
        <v-list-item v-for="item in navItems" :key="item.title" :to="item.to" :title="item.title" link></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<style>
/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: #333;
}

.app {
  min-height: 100vh;
}

/* Navigation styles */
.nav {
  padding: 1rem 0;
  background-color: #ffffff;
  border-bottom: 1px solid #eaeaea;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #666;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #333;
}

/* Page transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Remove default link styles from v-btn */
.v-btn {
  text-transform: none !important;
  letter-spacing: normal !important;
}
</style>
