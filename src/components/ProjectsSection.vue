<script setup>
import { ref } from 'vue'
import { AnimatePresence, motion, useReducedMotion } from 'motion-v'
import { projects } from '../data/content'
import ProjectVisual from './ProjectVisual.vue'

const reduced = useReducedMotion()
const activeId = ref(projects[0].id)
const hasInteracted = ref(false)
const exitingIds = ref(new Set())

function isShown(id) {
  return activeId.value === id || exitingIds.value.has(id)
}

function activate(id) {
  if (id === activeId.value) return
  hasInteracted.value = true
  const next = new Set(exitingIds.value)
  next.add(activeId.value)
  exitingIds.value = next
  activeId.value = id
}

function finished(id) {
  if (!exitingIds.value.has(id)) return
  const next = new Set(exitingIds.value)
  next.delete(id)
  exitingIds.value = next
}

const flipEase = [0.22, 1, 0.36, 1]
</script>

<template>
  <section id="projects" class="scroll-mt-20 pt-16 md:pt-24">
    <div class="mx-auto flex max-w-[100rem] items-end justify-between gap-6 px-5 pb-4 sm:px-6 md:px-12 lg:px-16">
      <h2 class="sr-only">Projects</h2>
      <p class="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
        Selected work
        <span class="text-white/50 md:hidden">· tap a row</span>
        <span class="hidden text-white/50 md:inline">· hover a row</span>
      </p>
    </div>

    <div class="border-t border-white/15">
      <article
        v-for="project in projects"
        :key="project.id"
        class="border-b border-white/15 transition-colors duration-300"
        :class="isShown(project.id) ? 'bg-black' : 'bg-transparent'"
        @mouseenter="activate(project.id)"
        @focusin="activate(project.id)"
      >
        <div
          class="px-5 sm:px-6 md:px-12 lg:px-16"
          :class="isShown(project.id) ? 'md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-stretch' : ''"
        >
          <h3 class="flex items-center">
            <button
              type="button"
              class="w-full py-5 text-left font-condensed uppercase leading-[0.84] tracking-wide md:py-6"
              :class="
                isShown(project.id)
                  ? 'text-[clamp(2.6rem,4.8vw,5rem)] text-accent md:pr-6'
                  : 'text-[clamp(3.15rem,7.6vw,7rem)] text-white'
              "
              :aria-expanded="activeId === project.id"
              @click="activate(project.id)"
            >
              {{ project.title }}
            </button>
          </h3>

          <div class="[perspective:87.5rem]">
            <AnimatePresence :on-exit-complete="() => finished(project.id)">
              <motion.div
                v-if="activeId === project.id"
                :key="project.id"
                class="origin-center overflow-hidden"
                style="transform-style: preserve-3d"
                :initial="reduced || !hasInteracted ? false : { rotateX: -78, opacity: 0 }"
                :animate="{ rotateX: 0, opacity: 1 }"
                :exit="reduced ? { opacity: 0 } : { rotateX: 72, opacity: 0 }"
                :transition="{ duration: reduced ? 0 : 0.5, ease: flipEase }"
              >
                <div class="grid items-stretch gap-5 pb-6 sm:grid-cols-[minmax(0,1.15fr)_minmax(11.25rem,0.85fr)] md:h-full md:py-6 md:pb-6">
                  <ProjectVisual :tone="project.tone" class="h-44 sm:h-full sm:min-h-48" />
                  <div class="flex flex-col justify-center md:items-end md:pr-1 md:text-right">
                    <p class="max-w-xs text-sm leading-relaxed text-white/75 sm:text-[0.95rem]">
                      {{ project.summary }}
                    </p>
                    <ul class="mt-4 flex flex-wrap gap-2 md:justify-end">
                      <li
                        v-for="tag in project.tags"
                        :key="tag"
                        class="border border-white/20 px-2 py-1 text-[0.65rem] font-semibold tracking-[0.16em] text-white/70 uppercase"
                      >
                        {{ tag }}
                      </li>
                    </ul>
                    <div class="mt-4 flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
                      <a
                        v-for="link in project.links"
                        :key="link.href"
                        :href="link.href"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase transition-colors hover:text-white"
                      >
                        {{ link.label }} ↗
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </article>
    </div>

    <div class="h-3.5 bg-black" aria-hidden="true"></div>
  </section>
</template>
