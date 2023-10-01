<template>
	<div class="wrapper">
		<div class="objects">
			<div class="object">void</div>
			<div v-for="a of templateDataLocal" class="object">
				<img :src="a.data" class="object-image" :data-src="a.src" @click="onObjectClick" />
			</div>
		</div>
		<button class="btn" @click="onRotateClick" style="display: none">Rotate</button>
		<button class="btn" @click="onDeleteClick">Delete</button>
		<InputNumber
			v-model="value2"
			inputId="minmax-buttons"
			mode="decimal"
			showButtons
			:min="-40"
			:max="40"
			@input="(event) => setLayer(parseInt(String(event.value)))"
		/>
		<router-link to="generate" class="btn">Generate</router-link>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { meshPreviewRenderer } from '@/ts/graphics/MeshPreviewRenderer'
import { useEditor } from '@/ts/hooks/useEditor'
import InputNumber from 'primevue/inputnumber'

const templateDataLocal = ref<{ src: string; data: string }[]>([])

const { addObject, rotateObject, deleteCell, setLayer } = useEditor()

const value2 = ref(0)

onMounted(async () => {
	const templatesData = ['void', 'meshes/corner.obj', 'meshes/wall.obj']
	for (let i = 0; i < templatesData.length; ++i) {
		const src = templatesData[i]
		const data = await meshPreviewRenderer.render(src)
		if (data) templateDataLocal.value.push({ data, src })
	}
})

function onObjectClick(event: MouseEvent) {
	const el = event.target as HTMLDivElement
	const src: string = el.getAttribute('data-src')
	addObject(src)
}

function onRotateClick() {
	rotateObject()
}

function onDeleteClick() {
	deleteCell()
}
</script>

<style lang="scss" scoped>
.wrapper {
	padding: 48px 24px;
	gap: 24px;
	display: flex;
	flex-direction: column;
}
.objects {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 8px;
}

.object {
	width: 100px;
	height: 80px;
	background-color: black;
	border: 1px solid #292c45;
	border-radius: 3px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
}

.object-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
