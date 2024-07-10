<script setup>
import { ref, defineProps } from 'vue'

defineProps({
	item: Object,
	onClickFavourite: Function,
	onClickAdd: Function
})

</script>
<template>
	<div class="relative border rounded-2xl p-5 hover:-top-3 hover:shadow-lg flex flex-col justify-between">
		<button @click="onClickFavourite(item.id)" class="absolute"><img
				:src="item.favourited ? '../../public/like-2.svg' : '../../public/like-1.svg'" alt=""></button>
		<img class="h-64 object-contain w-full max-[500px]:h-44 max-[430px]:h-36" :src="item.imageUrl" alt="">
		<h3 class="text-lg max-[400px]:text-sm max-[500px]:text-base mt-3">{{ item.title }}</h3>
		<div class="flex justify-between relative mt-3">
			<div class="flex flex-col">
				<span class="text-slate-400 max-[430px]:text-sm">Цeна:</span>
				<span class="font-bold max-[430px]:text-sm">{{ item.price }} руб</span>
			</div>
			<button @click="onClickAdd(item.id)"><img
					:src="!item.added ? '../../public/plus.svg' : '../../public/checked.svg'" alt=""></button>
		</div>
	</div>
</template>
