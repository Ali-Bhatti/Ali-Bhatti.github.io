<template>
    <div class="bg-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    My Projects
                </h2>
                <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                    Here are some of the projects I've worked on
                </p>
            </div>

            <div class="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <!-- Project Card Example (Duplicate and modify for your projects) -->
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="p-6">
                        <h3 class="text-lg font-medium text-gray-900">Project Name</h3>
                        <p class="mt-2 text-base text-gray-500">
                            Brief description of the project goes here. Explain what you built and what technologies you
                            used.
                        </p>
                        <div class="mt-4">
                            <span
                                class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mr-2">
                                Vue.js
                            </span>
                            <span
                                class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                Node.js
                            </span>
                        </div>
                        <div class="mt-4">
                            <a href="#" class="text-indigo-600 hover:text-indigo-500">
                                View Project →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>