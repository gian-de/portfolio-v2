<script setup>
import { motion, useReducedMotion } from 'motion-v'

const reduced = useReducedMotion()
</script>

<template>
  <section id="contact" class="scroll-mt-20">
    <div class="mx-auto grid max-w-[100rem] items-end gap-12 px-5 py-16 sm:px-6 md:px-12 md:py-24 lg:grid-cols-[minmax(0,1.3fr)_auto] lg:px-16 lg:py-28">
      <motion.div
        :initial="reduced ? false : { opacity: 0, y: '1.75rem' }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true, amount: 0.4 }"
        :transition="{ duration: reduced ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }"
      >
        <p class="text-xs font-semibold tracking-[0.24em] text-accent uppercase">Contact</p>
        <h2 class="mt-4 font-condensed text-[clamp(4rem,11vw,8.5rem)] uppercase leading-[0.84] tracking-wide">
          Let's build it
        </h2>
        <p class="mt-6 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
          Full stack, Shopify, and web content. If it needs to look sharp and work cleanly, send it over.
        </p>
        <a
          href="mailto:giande.jaen@gmail.com"
          class="mt-8 inline-block text-[clamp(1.2rem,2.3vw,1.75rem)] font-medium tracking-tight text-accent underline decoration-transparent underline-offset-[0.375rem] transition hover:decoration-accent"
        >
          giande.jaen@gmail.com
        </a>
        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/giande/"
            target="_blank"
            rel="noopener noreferrer"
            class="border border-accent/50 px-4 py-3 text-[0.75rem] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-accent hover:text-wine"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/gian-de"
            target="_blank"
            rel="noopener noreferrer"
            class="border border-accent/50 px-4 py-3 text-[0.75rem] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-accent hover:text-wine"
          >
            GitHub
          </a>
        </div>
      </motion.div>

      <motion.figure
        class="w-fit border-[0.5rem] border-accent bg-black shadow-[0.75rem_0.75rem_0_#120108]"
        :initial="reduced ? false : { opacity: 0, rotate: -2, y: '1.25rem' }"
        :while-in-view="{ opacity: 1, rotate: 0, y: 0 }"
        :in-view-options="{ once: true, amount: 0.5 }"
        :transition="{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.08 }"
      >
        <img
          src="/oh-get-a-job.gif"
          alt="Oh get a job"
          width="200"
          height="150"
          loading="lazy"
          decoding="async"
          class="block h-auto w-[min(78vw,20rem)]"
        />
      </motion.figure>
    </div>

    <footer class="border-t border-white/10 px-5 py-6 text-xs tracking-[0.16em] text-white/50 uppercase sm:px-6 md:px-12 lg:px-16">
      Giandé Jaen · {{ new Date().getFullYear() }}
    </footer>
  </section>
</template>
