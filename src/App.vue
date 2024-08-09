<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

import Header from './components/Header.vue'
import Card from './components/Card.vue'
import Poisk from './components/Poisk.vue'
import Buscket from './components/Buscket.vue'


const items = ref([])
const hidden = ref(true)
const favouriteItems = ref(null)
const buscketItems = ref(null)
const text = ref("Все кроссовки")
const favouritedOpen = ref(false)
const Price = ref(0)

const toggle = () => {
  hidden.value = !hidden.value
  buscketItems.value = items.value.filter(item => item.added)
  Price.value = buscketItems.value.reduce((sum, item) => sum + item.price, 0)
}



const onClickAdd = (id) => {
  const item = items.value.find(item => item.id === id)
  if (!item.added) {
    item.added = true
  } else {
    item.added = false
  }
}
const onClickFavourite = (id) => {
  const item = items.value.find(item => item.id === id)
  if (!item.favourited) {
    item.favourited = true
  } else {
    item.favourited = false
  }
}

const removeSneaker = (id) => {
  if (id) {
    const item = items.value.find(item => item.id == id)
    item.added = false
    buscketItems.value = items.value.filter(item => item.added)
    Price.value = buscketItems.value.reduce((sum, item) => sum + item.price, 0)
  } else {
    console.error(`Ошибка удаления товара`)
  }
}

const AllFavourite = () => {
  if (!favouritedOpen.value) {
    favouriteItems.value = items.value.filter(item => item.favourited)
    text.value = "Избранные кроссовки"
    favouritedOpen.value = true
  } else {
    favouritedOpen.value = false
    text.value = "Все кроссовки"
    favouriteItems.value = null
  }
}
const getAllItems = async () => {
  try {
    const { data } = await axios.get('https://sneakers-ljcv6noez-tembl3s-projects.vercel.app/Sneakers')
    items.value = data
    favouriteItems.value = null
    items.value = items.value.map(item => ({
      ...item,
      added: false,
      favourited: false
    }))
    text.value = "Все кроссовки"
  } catch {
    console.error('Ошибка загрузки товаров');
  }
}
const pay = async () => {
  try {
    Price.value = buscketItems.value.reduce((sum, item) => sum + item.price, 0)
    const response = await axios.post('https://sneakers-ljcv6noez-tembl3s-projects.vercel.app/create-payment', {
      amount: (Price.value / 100 * 105),
    });
    window.location.href = response.data.confirmation.confirmation_url;
  } catch (error) {
    console.error('Ошибка при создании платежа:', error);
  }
};
onMounted(
  getAllItems
)


</script>

<template>
  <div class="w-3/4 m-auto shadow shadow-slate-300 bg-white mt-10 rounded-3xl pb-7 mb-5">
    <Header :getAllItems="getAllItems" :AllFavourite="AllFavourite" :hidden="hidden" :toggle="toggle" />
    <Poisk :AllFavourite="AllFavourite" :favouriteItems :text="text" />
    <div v-auto-animate v-if="!favouriteItems"
      class="grid xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 max-[500px]:mx-5  mx-10 mt-8 gap-8">
      <Card :onClickFavourite="onClickFavourite" :item="item" :onClickAdd="onClickAdd" v-for="(item, index) in items" />
    </div>
    <div v-if="favouriteItems"
      class="grid xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 max-[500px]:mx-5  mx-10 mt-8 gap-8">
      <Card :onClickFavourite="onClickFavourite" :item="item" :onClickAdd="onClickAdd"
        v-for="(item, index) in favouriteItems" />
    </div>
  </div>
  <Buscket :pay="pay" :Price="Price" :removeSneaker="removeSneaker" v-if="!hidden" :buscketItems="buscketItems" :hidden="hidden"
    :toggle="toggle" />
    <router-view></router-view>
</template>

<style>
body {
  background-color: #E7F6FF;
  font-family: Arial, Helvetica, sans-serif;
}
</style>