<script setup lang="ts">
defineProps<{
	bucketItems: Array<any>,
	VisiableBuscket: boolean;
	toggleBuscket: () => void;
}>()
</script>

<template>
	<div v-if="VisiableBuscket"
		class="w-[500px] max-[520px]:w-full border-l z-10 right-0 h-full fixed top-0 bg-white overflow-y-scroll">
		<div class="flex items-center ml-10 mt-10 gap-5">
			<img @click="toggleBuscket" class="rotate-180 opacity-60 w-5" src="../../public/arrow-next.svg" alt="">
			<h2 class="text-2xl font-bold">Корзина</h2>
		</div>
		<div class="mx-10 max-[500px]:mx-3 max-[500px]:mr-7 mt-5 flex flex-col gap-5 mb-6">
			<div v-for="item in bucketItems" :key="item.id" class="full relative p-7 max-[400px]:p-5  border rounded-2xl">
				<div class="flex gap-4 items-center max-[500px]:gap-2">
					<img class="h-full max-[500px]:w-16 w-28 object-fill" :src="'../../public/' + item.imageUrl" alt="">
					<div class="text-lg">
						<h3 class="max-[400px]:text-sm">{{ item.title }}</h3>
						<h3 class="font-bold max-[400px]:text-base">{{ item.price }} руб.</h3>
					</div>
				</div>
				<button class="w-16 absolute max-[500px]:w-7 max-[500px]:bottom-3 max-[500px]:right-3 -right-3 bottom-5"><img src="../../public/close.svg" alt=""></button>
			</div>
		</div>
	</div>
	<div v-if="VisiableBuscket" class="bg-black opacity-70 z-15 w-full h-full fixed top-0" />
</template>
