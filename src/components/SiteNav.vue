<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { motion, useReducedMotion } from 'motion-v'
import { navLinks } from '../data/content'

const reduced = useReducedMotion()
const visible = ref(true)
const hovered = ref(false)
const pinned = ref(false)
const inverted = ref(false)
const current = ref('home')

let lastY = 0
let observer
let keyboardFocus = false

function onScroll() {
  const y = Math.max(window.scrollY, 0)
  const delta = y - lastY
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize)
  inverted.value = y > rem * 5

  if (y <= rem * 0.625) {
    visible.value = true
  } else if (!hovered.value && !pinned.value) {
    if (delta > rem * 0.5) visible.value = false
    else if (delta < rem * -0.5) visible.value = true
  }

  lastY = y
}

function onFocusOut(event) {
  if (!event.currentTarget.contains(event.relatedTarget)) {
    pinned.value = false
  }
}

function onNavigate(event, id) {
  event.preventDefault()
  const behavior = reduced.value ? 'auto' : 'smooth'

  if (id === 'home') {
    window.scrollTo({ top: 0, behavior })
    return
  }

  document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' })
}

function onKeyDown(event) {
  if (event.key === 'Tab') keyboardFocus = true
}

function onPointerDown() {
  keyboardFocus = false
}

onMounted(() => {
  lastY = Math.max(window.scrollY, 0)
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('pointerdown', onPointerDown)

  observer = new IntersectionObserver(
    (entries) => {
      const top = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (top?.target?.id) current.value = top.target.id
    },
    {
      rootMargin: '-42% 0rem -48% 0rem',
      threshold: [0.1, 0.35, 0.6],
    },
  )

  navLinks.forEach((link) => {
    const section = document.getElementById(link.id)
    if (section) observer.observe(section)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeyDown)
  window.removeEventListener('pointerdown', onPointerDown)
  observer?.disconnect()
})
</script>

<template>
  <div class="pointer-events-none fixed inset-x-0 top-0 z-50 [perspective:56.25rem]">
    <motion.header
      class="pointer-events-auto border-b backdrop-blur-sm transition-colors duration-300"
      :class="inverted ? 'border-wine/10 bg-paper text-wine' : 'border-white/10 bg-wine/95 text-white'"
      :initial="false"
      :animate="visible ? { y: '0%', rotateX: 0 } : { y: '-130%', rotateX: -42 }"
      :transition="
        reduced
          ? { duration: 0 }
          : { type: 'spring', stiffness: 460, damping: 36, mass: 0.68 }
      "
      style="transform-origin: top center"
      @mouseenter="hovered = true"
      @mouseleave="hovered = false"
      @focusin="pinned = keyboardFocus"
      @focusout="onFocusOut"
    >
      <nav aria-label="Primary">
        <ul class="mx-auto flex max-w-[100rem] items-center justify-between gap-2 px-4 py-[1.15rem] sm:px-6 md:px-12 md:py-[1.35rem] lg:px-16">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`#${link.id}`"
              class="text-[clamp(0.84rem,2.6vw,1.08rem)] font-medium tracking-wide transition-colors"
              :class="
                inverted
                  ? current === link.id
                    ? 'text-wine'
                    : 'text-wine/65 hover:text-wine'
                  : current === link.id
                    ? 'text-accent'
                    : 'text-white hover:text-accent'
              "
              :aria-current="current === link.id ? 'true' : undefined"
              @click="onNavigate($event, link.id)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  </div>
</template>
