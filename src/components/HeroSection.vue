<script setup>
import { motion, useReducedMotion } from 'motion-v'

const reduced = useReducedMotion()

function rise(delay) {
  return {
    initial: reduced.value ? false : { opacity: 0, y: '2rem' },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduced.value ? 0 : 0.75,
      delay: reduced.value ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }
}
</script>

<template>
  <section id="home" class="relative min-h-svh overflow-hidden">
    <div class="hero-grid pointer-events-none absolute inset-0" aria-hidden="true"></div>

    <div class="relative z-10 mx-auto flex min-h-svh max-w-[100rem] flex-col px-5 pb-8 pt-24 sm:px-6 md:px-12 md:pb-12 md:pt-28 lg:px-16">
      <motion.h1
        class="mt-[3vh] flex max-w-full flex-wrap items-center gap-x-[0.14em] gap-y-1 font-display text-[clamp(3.15rem,13vw,8.4rem)] uppercase leading-[0.82] tracking-[-0.02em] md:mt-[7vh]"
        v-bind="rise(0)"
      >
        <span class="whitespace-nowrap">I'm Giandé</span>
        <span class="inline-block h-[0.1em] w-[0.48em] shrink-0 bg-accent" aria-hidden="true"></span>
        <span>Jaen</span>
      </motion.h1>

      <div class="mt-6 grid items-start gap-8 md:mt-8 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(18.75rem,35rem)] lg:gap-14">
        <div class="max-w-xl">
          <motion.p
            class="text-base leading-relaxed text-white/85 sm:text-lg"
            v-bind="rise(0.12)"
          >
            I build intuitive, scalable, and user-centered digital products that help businesses grow and the people using them feel empowered.
          </motion.p>

          <motion.div class="mt-8" v-bind="rise(0.22)">
            <a href="#contact" class="group inline-flex items-stretch">
              <span class="bg-accent px-5 py-3.5 text-[0.78rem] font-semibold tracking-[0.16em] text-wine">
                LET'S TALK
              </span>
              <span class="grid w-12 place-items-center bg-ink text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M7 17 17 7M9 7h8v8" stroke-linecap="square" />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          class="relative aspect-[4/3] w-full justify-self-end overflow-hidden bg-[#d9d3cc] shadow-[0_1.75rem_4.375rem_rgba(8,0,6,0.45)] sm:aspect-[5/4]"
          v-bind="rise(0.16)"
        >
          <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div class="streak absolute top-[22%] -left-1/4 h-10 w-[150%] bg-accent/90 blur-[0.0625rem]"></div>
            <div class="streak streak-delay absolute top-[46%] -left-1/3 h-6 w-[160%] bg-accent blur-[0.03125rem]"></div>
            <div class="streak streak-slow absolute top-[68%] -left-1/4 h-16 w-[150%] bg-[#f3ffcf]/80"></div>
          </div>

          <div class="relative flex h-full flex-col justify-between p-5 sm:p-7">
            <p class="text-[0.68rem] font-semibold tracking-[0.28em] text-wine/70">OPEN FOR WORK</p>
            <div>
              <p class="font-display text-[clamp(4.5rem,8vw,6.5rem)] leading-none text-wine">GJ</p>
              <p class="mt-3 max-w-[14rem] text-sm leading-snug text-wine/80">
                Full stack. Shopify. Web content. Built to look sharp and run clean.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
</template>
