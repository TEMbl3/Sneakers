<template>
	<div class="flex flex-row items-center mt-8 justify-between max-[800px]:flex max-[800px]:flex-col">
		<h2 class="font-bold text-3xl ml-10 max-[800px]:mx-10 max-[800px]:mb-5 max-[430px]:text-2xl whitespace-nowrap">Все
			Кроссовки</h2>
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
