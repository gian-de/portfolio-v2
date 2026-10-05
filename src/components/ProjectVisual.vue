<script setup>
defineProps({
  tone: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="relative h-full min-h-36 w-full overflow-hidden bg-black">
    <template v-if="tone === 'food'">
      <div class="absolute inset-0 bg-[#2a0c16]"></div>
      <div class="drift absolute -top-10 -right-8 size-44 rounded-full bg-accent"></div>
      <div class="absolute bottom-5 left-5 size-24 rounded-full border-[0.625rem] border-white/85"></div>
      <div class="absolute top-7 left-7 h-[0.0625rem] w-24 bg-white/60"></div>
      <div class="absolute top-11 left-7 h-[0.0625rem] w-16 bg-white/35"></div>
      <div class="absolute top-16 left-7 h-[0.0625rem] w-20 bg-accent/80"></div>
    </template>

    <template v-else-if="tone === 'haven'">
      <div class="absolute inset-0 bg-[#102018]"></div>
      <div class="absolute inset-x-0 bottom-0 h-2/5 rounded-t-[50%] bg-[#1d3a28]"></div>
      <div class="absolute inset-x-[-10%] bottom-[-8%] h-1/2 rounded-t-[50%] bg-accent"></div>
      <div class="absolute top-6 left-6 size-10 rounded-full bg-[#f4efe4]"></div>
      <div class="absolute top-10 right-10 h-[0.0625rem] w-16 bg-white/40"></div>
    </template>

    <template v-else-if="tone === 'porsche'">
      <div class="absolute inset-0 bg-[#121214]"></div>
      <div class="absolute inset-y-0 -left-8 w-2/3 -skew-x-12 bg-white/10"></div>
      <div class="streak absolute top-1/3 -left-1/4 h-3 w-[140%] bg-accent"></div>
      <div class="streak streak-delay absolute top-1/2 -left-1/4 h-1.5 w-[140%] bg-white"></div>
      <div class="absolute right-6 bottom-6 font-condensed text-5xl tracking-wide text-white/90">01</div>
    </template>

    <template v-else-if="tone === 'lucid'">
      <div class="absolute inset-0 bg-[#10141c]"></div>
      <div class="absolute inset-x-4 top-4 space-y-2">
        <div class="h-3 w-full bg-white/15"></div>
        <div class="h-8 w-full bg-accent text-[0.65rem] font-semibold tracking-[0.16em] text-wine uppercase flex items-center px-2">
          In stock
        </div>
        <div class="h-3 w-4/5 bg-white/15"></div>
        <div class="h-3 w-full bg-white/10"></div>
        <div class="h-3 w-2/3 bg-white/10"></div>
        <div class="h-3 w-5/6 bg-white/10"></div>
      </div>
    </template>

    <template v-else>
      <div class="absolute inset-0 bg-[#241018]"></div>
      <div class="absolute inset-y-0 left-0 w-1/2 bg-accent"></div>
      <p class="absolute top-1/2 left-4 -translate-y-1/2 font-condensed text-7xl leading-none text-wine">CO</p>
      <div class="absolute right-5 bottom-5 h-10 w-10 border border-white/50"></div>
    </template>
  </div>
</template>
