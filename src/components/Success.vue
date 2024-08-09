<template>
  <div class="w-[500px] gap-3 max-[520px]:w-full border-l z-10 right-0 h-full fixed bg-white top-0 overflow-y-scroll flex flex-col items-center justify-center">
    <img src="../../public/order-success-icon.png" width="83px" alt="">
    <h2 class="text-[#87C20A] font-bold text-2xl">Заказ оформлен!</h2>
    <h3 class="text-center text-slate-500 text-lg">Ваш заказ скоро будет передан <br> курьерской доставке</h3>
    <RouterLink to="/" class="bg-lime-500 text-white p-3 px-6 flex items-center gap-3 rounded-2xl"><svg class="rotate-180" width="16" height="14" viewBox="0 0 16 14" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
				Вернуться назад</RouterLink>
  </div>
  <div class="w-full h-full left-0 top-0 fixed z-5 bg-black opacity-70"></div>
</template>