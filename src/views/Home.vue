<template>
    <section class="home-wrapper">
        <div class="hero-content">
            <h2 class="greeting">Hi there 👋</h2>
            <h1 class="name-gradient">I'm Muhammad Ali Bhatti</h1>

            <div class="role-text">
                <span>I specialize in</span>
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

            <div class="socials">
                <v-btn v-for="social in socials" :key="social.icon" :href="social.link" target="_blank" variant="text"
                    :aria-label="social.name" class="social-btn">
                    <v-icon>{{ social.icon }}</v-icon>
                </v-btn>
            </div>
        </div>
    </section>
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
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at top left, rgba(var(--v-theme-primary), 0.15), transparent 60%),
        radial-gradient(circle at bottom right, rgba(var(--v-theme-secondary), 0.15), transparent 60%),
        var(--v-surface-base);
}

.hero-content {
    max-width: 900px;
    text-align: center;
    padding: 4rem 2rem;
    animation: fadeUp 0.6s ease-out both;
    position: relative;
    z-index: 1;
}

.greeting {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

.name-gradient {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1rem;
    background: linear-gradient(to right, var(--v-primary-base), var(--v-secondary-base));
    -webkit-background-clip: text;
    color: transparent;
}

.role-text {
    display: flex;
    justify-content: center;
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
    max-width: 650px;
    margin: 0 auto 3rem;
    color: rgba(var(--v-theme-on-surface), 0.87);
}

.cta-group {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.action-btn {
    min-width: 150px;
    height: 48px;
}

.socials {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.social-btn {
    opacity: 0.7;
    transition: opacity 0.3s ease;
}

.social-btn:hover {
    opacity: 1;
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

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 600px) {
    .name-gradient {
        font-size: 3rem;
    }

    .role-text {
        flex-direction: column;
        font-size: 1.25rem;
    }

    .cta-group {
        flex-direction: column;
    }

    .action-btn {
        width: 100%;
    }
}
</style>