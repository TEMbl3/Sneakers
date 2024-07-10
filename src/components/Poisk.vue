<template>
	<div class="flex flex-row items-center mt-8 justify-between max-[800px]:flex max-[800px]:flex-col">
		<div class="flex gap-4 items-center font-bold text-3xl ml-10 max-[800px]:mx-10 max-[800px]:mb-5 max-[430px]:text-2xl whitespace-nowrap">
			<button v-if="favouriteItems" @click="AllFavourite" class="rotate-180 border border-gray py-3 px-4 rounded-xl"><img src="../../public/arrow-right.svg" alt=""></button>
			<h2>{{
				text }}</h2>
		</div>
		<div class="max-[800px]:w-full px-10 max-[500px]:px-5">
			<input
				class="p-3 px-3 border rounded-lg max-[800px]:w-full w-72 outline-none hover:border-slate-400 focus:border-black transition"
				type="text" placeholder="🔎  Поиск...">
		</div>
	</div>
</template>
<style scoped>
input:focus::placeholder {
	color: transparent;
}
</style>
<script setup>
defineProps({
	text: String,
	favouriteItems: Array,
	AllFavourite: Function
})
</script>