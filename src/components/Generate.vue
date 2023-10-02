<template>
	<router-link to="/editor" class="btn editor-button">Editor</router-link>
	<div class="canvas" ref="canvas"></div>
	<generate-menu />
</template>

<script setup lang="ts">
import GenerateMenu from '@/components/GenerateMenu.vue'

import { onMounted, onBeforeUnmount } from 'vue'
import { useGenerator } from '@/ts/hooks/useGenerator'

const { canvas, build, stop } = useGenerator()

onMounted(() => {
	build()
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
