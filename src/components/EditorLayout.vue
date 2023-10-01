<template>
	<div class="layout">
		<aside><editor-menu /></aside>
		<main><slot /></main>
	</div>
</template>

<script setup lang="ts">
import EditorMenu from '@/components/EditorMenu.vue'
</script>

<style lang="scss" scoped>
.layout {
	height: 100%;
	display: flex;
}

main {
	flex: 1 1 auto;
}

aside {
	flex: 0 0 250px;
}
</style>
