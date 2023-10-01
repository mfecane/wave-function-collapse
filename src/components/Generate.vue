<template>
	<router-link to="/editor" class="btn editor-button">Editor</router-link>
	<div class="canvas" ref="canvas"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

import { build, stop } from '@/ts/wfc/collapse'

const canvas = ref<HTMLDivElement>()

onMounted(() => {
	build(canvas.value)
})

onBeforeUnmount(() => {
	stop()
})
</script>

<style lang="scss" scoped>
.canvas {
	width: 100%;
	height: 100%;
}

.editor-button {
	position: absolute;
	top: 20px;
	left: 20px;
	z-index: 2;
}
</style>
