<template>
	<div class="wrapper">
		<MeshesList />
		<button class="btn" @click="loadDefault">Load Default</button>
		<router-link to="generate" class="btn">Generate</router-link>
	</div>
</template>

<script setup lang="ts">
import { useEditor } from '@/ts/hooks/useEditor'
import MeshesList from '@/components/MeshesList.vue'

const { loadDefault } = useEditor()
</script>

<style lang="scss" scoped>
.wrapper {
	padding: 48px 24px;
	gap: 24px;
	display: flex;
	flex-direction: column;
}
</style>
