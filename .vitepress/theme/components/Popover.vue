<script setup lang="ts">
import { ref, computed } from "vue";
import { withBase } from 'vitepress'

const props = defineProps<{
  text: string;
  path: string;
  alt?: string;
  width?: number | string;
}>();

const open = ref(false);

const imgStyle = computed(() => {
  const w = props.width ?? 260;
  return { width: typeof w === "number" ? `${w}px` : w };
});

function onEnter() {
  open.value = true;
}
function onLeave() {
  open.value = false;
}
</script>

<template>
  <span
    class="vp-popover-trigger"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    @focusin="onEnter"
    @focusout="onLeave"
    tabindex="0"
    role="button"
    aria-haspopup="true"
    :aria-expanded="open"
  >
    {{ text }}

    <transition name="vp-popover-fade">
      <span v-if="open" class="vp-popover">
        <img
          class="vp-popover-img"
          :src="withBase(path)"
          :alt="alt || text"
          :style="imgStyle"
          loading="lazy"
          decoding="async"
        />
      </span>
    </transition>
  </span>
</template>

<style scoped>
.vp-popover-trigger {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: help;
  text-decoration: underline dotted;
  text-underline-offset: 3px;
}

/* Popover Box */
.vp-popover {
  position: absolute;
  z-index: 999;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--vp-c-bg-soft, #fff);
  border: 1px solid var(--vp-c-divider, #e2e2e3);
  border-radius: 10px;
  padding: 6px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  white-space: nowrap;
}

/* kleines Dreieck */
.vp-popover::before {
  content: "";
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid var(--vp-c-divider, #e2e2e3);
}
.vp-popover::after {
  content: "";
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid var(--vp-c-bg-soft, #fff);
}

.vp-popover-img {
  display: block;
  height: auto;
  max-width: 80vw;
  min-width: 400px;
  border-radius: 6px;
}

/* Fade Animation */
.vp-popover-fade-enter-active,
.vp-popover-fade-leave-active {
  transition: opacity 0.12s ease, transform 0.12s ease;
}
.vp-popover-fade-enter-from,
.vp-popover-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-4px);
}
</style>
