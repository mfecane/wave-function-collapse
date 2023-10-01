<template>
	<editor-layout>
		<div class="canvas" ref="canvas"></div>
	</editor-layout>
</template>

<script setup lang="ts">
import EditorLayout from '@/components/EditorLayout.vue'
import { useEditor } from '@/ts/hooks/useEditor'

import { ref, onMounted } from 'vue'

const { createEditor } = useEditor()

const canvas = ref<HTMLDivElement>()

onMounted(() => createEditor(canvas.value))
</script>

<style lang="scss" scpoed>
.canvas {
	width: 100%;
	height: 100%;
	position: relative;
}
</style>
