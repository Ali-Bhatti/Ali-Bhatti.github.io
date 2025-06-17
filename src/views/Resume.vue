<template>
    <div class="bg-white py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Resume
                </h2>
                <div class="mt-4">
                    <a href="#"
                        class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                        Download PDF
                    </a>
                </div>
            </div>

            <!-- Experience Section -->
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Experience</h3>
                <div class="space-y-8">
                    <div class="relative">
                        <div class="relative flex items-start space-x-3">
                            <div class="min-w-0 flex-1">
                                <div>
                                    <h4 class="text-lg font-bold text-gray-900">Company Name</h4>
                                    <p class="text-sm text-gray-500">Position • Start Date - End Date</p>
                                </div>
                                <div class="mt-2 text-sm text-gray-700">
                                    <ul class="list-disc pl-5 space-y-2">
                                        <li>Achievement or responsibility description</li>
                                        <li>Another key achievement</li>
                                        <li>Technical skill or project highlight</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Education Section -->
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Education</h3>
                <div class="space-y-8">
                    <div>
                        <h4 class="text-lg font-bold text-gray-900">University Name</h4>
                        <p class="text-sm text-gray-500">Degree • Graduation Year</p>
                        <p class="mt-2 text-sm text-gray-700">
                            Relevant coursework, achievements, or activities
                        </p>
                    </div>
                </div>
            </div>

            <!-- Skills Section -->
            <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Skills</h3>
                <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <div class="col-span-1">
                        <h4 class="font-medium text-gray-900 mb-2">Programming</h4>
                        <ul class="text-sm text-gray-600 space-y-1">
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>Java</li>
                        </ul>
                    </div>
                    <div class="col-span-1">
                        <h4 class="font-medium text-gray-900 mb-2">Frameworks</h4>
                        <ul class="text-sm text-gray-600 space-y-1">
                            <li>Vue.js</li>
                            <li>React</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                    <div class="col-span-1">
                        <h4 class="font-medium text-gray-900 mb-2">Tools</h4>
                        <ul class="text-sm text-gray-600 space-y-1">
                            <li>Git</li>
                            <li>Docker</li>
                            <li>AWS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>