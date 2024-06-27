<script setup>
import { ref } from 'vue'

defineProps({
	title: String,
	price: Number,
	image: String,
	addItem: Function,

})
const added = ref(false)
const favourited = ref(false)
const onClickAdd = () => {
  added.value = !added.value
}
const onClickFavourite = () => {
  favourited.value = !favourited.value
}
</script>
<template>
	<div class="relative border rounded-2xl p-5 hover:-top-3 hover:shadow-lg flex flex-col justify-between">
		<button @click=onClickFavourite class="absolute"><img :src="favourited ? '../../public/like-2.svg' : '../../public/like-1.svg'" alt=""></button>
		<img class="h-64 object-contain w-full max-[500px]:h-44 max-[430px]:h-36" :src="image" alt="">	
		<h3 class="text-lg max-[400px]:text-sm max-[500px]:text-base mt-3">{{ title }}</h3>
		<div class="flex justify-between relative mt-3">
			<div class="flex flex-col">
				<span class="text-slate-400 max-[430px]:text-sm">Цeна:</span>
				<span class="font-bold max-[430px]:text-sm">{{ price }} руб</span>
			</div>
			<button @click="onClickAdd"><img @click="addItem" :src="!added ? '../../public/plus.svg' : '../../public/checked.svg'"
					alt=""></button>
		</div>
	</div>
</template>
