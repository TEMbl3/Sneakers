<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import Header from './components/Header.vue'
import Card from './components/Card.vue'
import Poisk from './components/Poisk.vue'
import Buscket from './components/Buscket.vue'

const items = ref([])
const VisiableBuscket = ref(false)
const buscketItems = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/Sneakers')
    items.value = data
  } catch {
    console.error('Ошибка загрузки товаров');
  }
})

const addItem = (index) => {
    buscketItems.value.push({
      title: items[index].title
    })
}

const toggleBuscket = () => {
  VisiableBuscket.value = !VisiableBuscket.value
}


</script>

<template>
  {{ buscketItems }}
  <button @click="addItem">xxxx</button>
  <div class="w-3/4 m-auto shadow shadow-slate-300 bg-white mt-10 rounded-3xl pb-7 mb-5">
    <Header :toggleBuscket="toggleBuscket" />
    <Poisk />
    <div class="grid xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 max-[500px]:mx-5  mx-10 mt-8 gap-8">
      <Card :title="item.title" :image="item.imageUrl" :addItem="addItem" :price="item.price" v-for="(item, index) in items" />
    </div>
  </div>
  <Buscket :buscketItems="buscketItems" :VisiableBuscket="VisiableBuscket" :toggleBuscket="toggleBuscket" />
</template>

<style>
body {
  background-color: #E7F6FF;
  font-family: Arial, Helvetica, sans-serif;
}
</style>