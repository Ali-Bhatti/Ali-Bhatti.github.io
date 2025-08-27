<template>
    <div class="home-wrapper">
        <!-- Background Elements -->
        <div class="background-elements">
            <div class="bg-circle circle-1"></div>
            <div class="bg-circle circle-2"></div>
            <div class="bg-blur"></div>
        </div>

        <!-- Side Navigation -->
        <nav class="side-nav">
            <v-btn v-for="social in socials" :key="social.icon" :href="social.link" target="_blank" variant="text"
                :aria-label="social.name" class="social-btn">
                <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
        </nav>

        <!-- Main Content -->
        <main class="main-content">
            <!-- Hero Section -->
            <div class="hero-section">
                <h2 class="greeting">Hi there 👋</h2>

                <h1 class="name">I'm</h1>
                <h1 class="name">Muhammad</h1>
                <h1 class="name">Ali Bhatti</h1>

                <div class="role-text">
                    <span>I am into</span>
                    <div class="typing-wrapper">
                        <span class="typed-text">{{ displayedText }}</span>
                        <span class="cursor" :class="{ 'typing': isTyping }"></span>
                    </div>
                </div>

                <p class="bio">
                    A passionate software engineer crafting elegant solutions and building exceptional digital
                    experiences.
                </p>

                <div class="cta-group">
                    <v-btn color="primary" size="x-large" variant="flat" to="/about" class="action-btn">
                        About Me
                        <v-icon end icon="mdi-arrow-right" class="ml-2"></v-icon>
                    </v-btn>

                    <v-btn variant="outlined" size="x-large" href="/resume.pdf" target="_blank" class="action-btn">
                        Resume
                        <v-icon end icon="mdi-download" class="ml-2"></v-icon>
                    </v-btn>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const roles = [
    'Software Engineering',
    'Full Stack Development',
    'Web Development'
]

const displayedText = ref('')
const roleIndex = ref(0)
const isTyping = ref(true)
let timeoutId = null

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const typeText = async () => {
    const currentRole = roles[roleIndex.value]
    isTyping.value = true

    for (let i = 0; i <= currentRole.length; i++) {
        displayedText.value = currentRole.substring(0, i)
        await sleep(100)
    }

    isTyping.value = false
    await sleep(2000)

    for (let i = currentRole.length; i >= 0; i--) {
        displayedText.value = currentRole.substring(0, i)
        await sleep(50)
    }

    roleIndex.value = (roleIndex.value + 1) % roles.length
    await sleep(500)
    timeoutId = setTimeout(typeText, 100)
}

onMounted(() => {
    timeoutId = setTimeout(typeText, 100)
})

onBeforeUnmount(() => {
    if (timeoutId) clearTimeout(timeoutId)
})

const socials = [
    { icon: 'mdi-github', link: 'https://github.com/yourusername', name: 'GitHub' },
    { icon: 'mdi-linkedin', link: 'https://linkedin.com/in/yourusername', name: 'LinkedIn' },
    { icon: 'mdi-twitter', link: 'https://twitter.com/yourusername', name: 'Twitter' }
]
</script>

<style scoped>
.home-wrapper {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    background: var(--v-surface-base);
}

/* Background Elements */
.background-elements {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
}

.bg-circle {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
}

.circle-1 {
    width: 400px;
    height: 400px;
    background: rgba(var(--v-theme-primary), 0.15);
    top: -100px;
    right: -100px;
}

.circle-2 {
    width: 500px;
    height: 500px;
    background: rgba(var(--v-theme-secondary), 0.1);
    bottom: -150px;
    left: -150px;
}

.bg-blur {
    position: absolute;
    inset: 0;
    backdrop-filter: blur(100px);
    background: rgba(var(--v-theme-surface), 0.7);
}

/* Side Navigation */
.side-nav {
    position: fixed;
    left: 2rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 10;
}

.social-btn {
    opacity: 0.7;
    transition: opacity 0.3s ease;
}

.social-btn:hover {
    opacity: 1;
}

/* Main Content */
.main-content {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    display: flex;
    align-items: center;
}

.hero-section {
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 4rem;
}

.greeting {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 2rem;
}

.name {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.1;
    margin: 0;
}

.role-text {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    font-size: 1.5rem;
    margin: 2rem 0;
}

.typing-wrapper {
    display: inline-flex;
    align-items: baseline;
}

.typed-text {
    color: var(--v-primary-base);
    font-weight: 600;
    white-space: nowrap;
}

.cursor {
    display: inline-block;
    width: 2px;
    height: 1.2em;
    background-color: currentColor;
    margin-left: 4px;
    animation: blink 1s infinite;
    position: relative;
    top: 2px;
}

.cursor.typing {
    animation: none;
    opacity: 1;
}

.bio {
    font-size: 1.25rem;
    line-height: 1.6;
    max-width: 600px;
    margin: 2rem 0;
    color: rgba(var(--v-theme-on-surface), 0.87);
}

.cta-group {
    display: flex;
    gap: 1rem;
}

.action-btn {
    min-width: 150px;
    height: 48px;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

/* Responsive Styles */
@media (max-width: 960px) {
    .main-content {
        padding: 0 4rem;
    }

    .hero-section {
        padding-left: 2rem;
    }

    .name {
        font-size: 3.5rem;
    }

    .side-nav {
        left: 1rem;
    }
}

@media (max-width: 600px) {
    .main-content {
        padding: 0 2rem;
    }

    .hero-section {
        padding-left: 0;
        text-align: center;
        padding-top: 4rem;
    }

    .side-nav {
        position: fixed;
        left: 0;
        right: 0;
        top: auto;
        bottom: 2rem;
        transform: none;
        flex-direction: row;
        justify-content: center;
    }

    .name {
        font-size: 3rem;
    }

    .role-text {
        font-size: 1.25rem;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    .bio {
        font-size: 1.1rem;
        margin-left: auto;
        margin-right: auto;
    }

    .cta-group {
        flex-direction: column;
    }

    .action-btn {
        width: 100%;
    }
}
</style>