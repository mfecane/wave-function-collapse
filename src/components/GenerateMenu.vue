<template>
	<div class="container">
		<div class="label">iterations</div>
		<div class="counter">20000000</div>
		<button class="btn" @click="onClick">Generate</button>
	</div>
</template>

<script setup lang="ts">
import { useGenerator } from '@/ts/hooks/useGenerator'

const { build, stop } = useGenerator()

function onClick() {
	stop()
	build()
}
</script>

<style scoped lang="scss">
.label {
	font-size: 0.8rem;
	color: #666666;
}

.counter {
	margin-bottom: 10px;
}

.container {
	position: absolute;
	display: flex;
	flex-direction: column;
	gap: 4px;
	background: white;
	bottom: 20px;
	right: 20px;
	padding: 16px;
	border-radius: 12px;
	align-items: end;
}
</style>
