<script setup>

defineProps({
	buscketItems: Array,
	hidden: Boolean,
	toggle: Function,
	removeSneaker: Function,
	Price: Number,
	pay: Function
})


</script>

<template>
	<div
		class="w-[500px] max-[520px]:w-full border-l z-10 right-0 h-full fixed top-0 bg-white overflow-y-scroll flex flex-col justify-between">
		<div>
			<div class="flex items-center ml-10 mt-10 gap-5" @click="toggle">
				<img class="rotate-180 opacity-60 w-5" src="../../public/arrow-next.svg" alt="">
				<h2 class="text-2xl font-bold">Корзина</h2>
			</div>
			<div v-auto-animate v-if="buscketItems.length > 0" class="mx-10 max-[500px]:mx-3 max-[500px]:mr-7 mt-8 flex flex-col gap-5 mb-10">
				<div v-for="item in buscketItems" :key="item.id" class="full relative p-7 max-[400px]:p-5  border rounded-2xl">
					<div class="flex gap-4 items-center max-[500px]:gap-2">
						<img class="h-full max-[500px]:w-16 w-28 object-fill" :src="`../../public${item.imageUrl}`" alt="">
						<div class="text-lg">
							<h3 class="max-[400px]:text-sm">{{ item.title }}</h3>
							<h3 class="font-bold max-[400px]:text-base">{{ item.price }} руб.</h3>
						</div>
					</div>
					<button class="w-16 absolute max-[500px]:w-7 max-[500px]:bottom-3 max-[500px]:right-3 -right-3 bottom-5"
						@click="removeSneaker(item.id)"><img src="../../public/close.svg" alt=""></button>
				</div>
			</div>
		</div>
		<div v-if="buscketItems.length > 0" class="mb-14">
			<div class="flex flex-col gap-6 mt-5">
				<div class="flex mx-10 items-end">
					<h2 class="text-lg">Итого:</h2>
					<div class="flex-1 border-b border-gray border-dashed"></div>
					<h2 class="font-bold text-lg">{{ Price }} руб.</h2>
				</div>
				<div class="flex mx-10 items-end">
					<h2 class="text-lg">Ндс 5%:</h2>
					<div class="flex-1 border-b border-gray border-dashed"></div>
					<h2 class="font-bold text-lg">{{ Math.round(Price / 100 * 5) }} руб.</h2>
				</div>
				<button @click="pay"
					class="bg-lime-500 mx-10 p-3 rounded-2xl hover:transition active:bg-lime-700 text-white hover:bg-lime-600">Оформить
					заказ</button>
			</div>
		</div>
		<div v-if="buscketItems.length == 0"
		class="w-[500px] gap-3 max-[520px]:w-full border-l z-5 right-0 h-full relative top-0 overflow-y-scroll flex flex-col items-center justify-center">
			<img src="../../public/package-icon.png" width="120px" alt="">
			<h2 class="font-bold text-2xl">Корзина пустая</h2>
			<h3 class="text-center opacity-40 text-lg">Добавьте хотя бы одну пару <br> кроссовок, чтобы сделать заказ.</h3>
			<button @click="toggle" class="bg-lime-500 text-white p-3 px-6 flex items-center gap-3 rounded-2xl"><svg class="rotate-180" width="16" height="14" viewBox="0 0 16 14" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
				Вернуться назад</button>
		</div>
	</div>
	<div class="bg-black opacity-70 z-15 w-full h-full fixed top-0" />
</template>
<style>
	.z-4{
		width: 6.25rem;
	}
</style>