<template>
	<div class="objects">
		<div
			v-for="(a, index) of templateDataLocal"
			class="object"
			:class="{ selected: index === selectedObject }"
			@click="() => objectClick(index)"
		>
			<img :src="a.data" class="object-image" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { models } from '@/ts/data/models'
import { meshPreviewRenderer } from '@/ts/graphics/MeshPreviewRenderer'
import { useEditor } from '@/ts/hooks/useEditor'

const templateDataLocal = ref<{ src: string; data: string }[]>([])

const { objectClick, selectedObject } = useEditor()

onMounted(async () => {
	const templatesData = models
	for (let i = 0; i < templatesData.length; ++i) {
		const src = templatesData[i]
		const data = await meshPreviewRenderer.render(src)
		if (data) templateDataLocal.value.push({ data, src })
	}
})
</script>

<style scoped lang="scss">
.objects {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 4px;
}

.object {
	height: 80px;
	background-color: black;
	border: 1px solid #292c45;
	border-radius: 3px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
}

.object.selected {
	border: 1px solid var(--accent);
}

.object-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
