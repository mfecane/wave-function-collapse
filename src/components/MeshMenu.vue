<template>
	<div id="mesh_menu_panel" class="hidden">
		<button class="mesh-menu__button rotate__button"></button>
		<button class="mesh-menu__button delete__button"></button>
	</div>
</template>

<style scoped lang="scss">
#mesh_menu_panel {
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	background: white;
	border-radius: 5px;
	padding: 4px;
	gap: 4px;
	transform: translateX(-50%);

	&.hidden {
		display: none;
	}
}

.mesh-menu__button {
	width: 24px;
	height: 24px;
}

.rotate__button {
	background: center center / 70% no-repeat;
	background-image: url(/svg/rotate.svg);
}

.delete__button {
	background-color: red;
	mask: center center / 70% no-repeat;
	mask-image: url(/svg/delete.svg);
}
</style>
