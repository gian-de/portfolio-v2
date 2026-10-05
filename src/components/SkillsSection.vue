<script setup>
import { motion, useReducedMotion } from 'motion-v'
import { skills } from '../data/content'

const reduced = useReducedMotion()

function indexLabel(index) {
  return String(index + 1).padStart(2, '0')
}
</script>

<template>
  <section id="skills" class="scroll-mt-20">
    <div class="mx-auto max-w-[100rem] px-5 pb-4 pt-4 sm:px-6 md:px-12 md:pt-6 lg:px-16">
      <p class="text-xs font-semibold tracking-[0.24em] text-accent uppercase">Skills</p>
    </div>

    <ul class="border-t border-white/15">
      <motion.li
        v-for="(skill, index) in skills"
        :key="skill"
        class="border-b border-white/15"
        :initial="reduced ? false : { opacity: 0, y: '1.125rem' }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true, amount: 0.7 }"
        :transition="{ duration: reduced ? 0 : 0.45, delay: reduced ? 0 : Math.min(index * 0.04, 0.24) }"
      >
        <div class="group flex items-baseline justify-between gap-6 px-5 py-4 transition-colors hover:bg-accent sm:px-6 md:px-12 md:py-5 lg:px-16">
          <span class="font-condensed text-[clamp(2.4rem,5.4vw,4.6rem)] leading-none tracking-wide text-white uppercase transition-colors group-hover:text-wine">
            {{ skill }}
          </span>
          <span class="text-xs font-semibold tracking-[0.2em] text-accent transition-colors group-hover:text-wine">
            {{ indexLabel(index) }}
          </span>
        </div>
      </motion.li>
    </ul>
  </section>
</template>
