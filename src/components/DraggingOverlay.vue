<template>
	<div class="draggin-overlay__container" :class="{ hidden: selectedObject === null }">
		<div>Press <span class="chip">R</span> to rotate mesh</div>
		<div><span class="chip">Right click</span> to drop</div>
	</div>
</template>

<script setup lang="ts">
import { useEditor } from '@/ts/hooks/useEditor'
const { selectedObject } = useEditor()
</script>

<style lang="scss" scpoed>
.draggin-overlay__container {
	min-width: 400px;
	border-radius: 10px;
	position: absolute;
	bottom: 20px;
	left: 20px;
	background: white;
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	opacity: 1;
	transition: all 200ms ease;
}

.chip {
	display: inline-block;
	background: #eeeeee;
	padding: 2px 4px;
	border-radius: 2px;
	border: 1px solid #cccccc;
}

.draggin-overlay__container.hidden {
	opacity: 0;
}
</style>
