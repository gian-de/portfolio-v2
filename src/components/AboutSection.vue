<script setup>
import { motion, useReducedMotion } from 'motion-v'
import { roles } from '../data/content'

const reduced = useReducedMotion()
</script>

<template>
  <section id="about" class="scroll-mt-20">
    <div class="marquee overflow-hidden bg-accent text-wine" aria-label="Roles and tools">
      <div class="marquee-track">
        <ul class="flex items-center py-2.5">
          <li
            v-for="role in roles"
            :key="role"
            class="flex items-center font-condensed text-[1.45rem] tracking-[0.14em] uppercase sm:text-[1.7rem]"
          >
            <span class="px-4">{{ role }}</span>
            <span aria-hidden="true">✦</span>
          </li>
        </ul>
        <ul class="flex items-center py-2.5" aria-hidden="true">
          <li
            v-for="role in roles"
            :key="`copy-${role}`"
            class="flex items-center font-condensed text-[1.45rem] tracking-[0.14em] uppercase sm:text-[1.7rem]"
          >
            <span class="px-4">{{ role }}</span>
            <span aria-hidden="true">✦</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="mx-auto max-w-[100rem] px-5 py-16 sm:px-6 md:px-12 md:py-24 lg:px-16 lg:py-28">
      <motion.p
        class="font-condensed text-[clamp(2.5rem,6.5vw,6.1rem)] uppercase leading-[0.9] tracking-wide"
        :initial="reduced ? false : { opacity: 0, y: '2.25rem' }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true, amount: 0.45 }"
        :transition="{ duration: reduced ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }"
      >
        <span class="text-accent">I'm a full stack </span>
        <span class="text-white">developer, web content manager, and Shopify developer, passionate about creating </span>
        <span class="text-white/55">solutions in a visually appealing and efficient manner.</span>
      </motion.p>
    </div>
  </section>
</template>
