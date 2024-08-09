<script setup>
defineProps({
	hidden: Boolean,
	toggle: Function,
	AllFavourite: Function,
	getAllItems: Function
})
</script>
<template>
	<header class="p-10 border-b border-gray-200 flex justify-between items-center max-[800px]:flex-col">
		<div class="flex items-center gap-4">
			<img @click="getAllItems" class="w-14" src="../../public/logo.png" alt="">
			<div class="flex flex-col">
				<h1 class="font-bold text-4xl max-[500px]:text-xl whitespace-nowrap">Lux Sneakers</h1>
				<h2 class="text-lg text-slate-400 max-[500px]:text-base">Магазин лучших кроссовок</h2>
			</div>
		</div>
		<div >
			<ul class="flex max-[800px]:text-base  flex-row text-lg gap-12 max-[800px]:gap-10 max-[800px]:text-sm max-[800px]:pr-5 max-[800px]:flex-row max-[1250px]:gap-3 max-[1250px]:flex-col max-[800px]:gap-5 max-[800px]:mt-5 pr-12 text-gray-500">
				<div class="flex gap-3 items-center max-[800px]:gap-2" @click="toggle">
					<img src="../../public/cart.svg" alt="" >
					<li  class="hover:text-black cursor-pointer transition whitespace-nowrap">Корзина</li>
				</div>
				<div class="flex gap-3 items-center max-[800px]:gap-2" @click="AllFavourite()">
					<img src="../../public/heart.svg" alt="">
					<button to="/favourites" class="hover:text-black cursor-pointer transition"><span>Закладки</span></button>
				</div>
				<div class="flex gap-3 items-center max-[800px]:gap-2">
					<img src="../../public/profile.svg" alt="">
					<li class="hover:text-black cursor-pointer transition"><span>Профиль</span></li>
				</div>
			</ul>
		</div>
	</header>
</template>
