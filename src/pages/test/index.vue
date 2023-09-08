<template>
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      placeholder="Please input"
      @select="handleSelect"
    />
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import {useCounterStore} from '@/stores/autocomplate.js'
  import {useRouter} from 'vue-router'
  const state = ref('')
  const router=useRouter()

  
const counter1=useCounterStore()
const {autoCounterArray} =counter1
  let timeout
  const links = ref([])
  
  const loadAll = () => {
    return autoCounterArray
  }
  
  const querySearchAsync = (queryString,cb) => {
    const results = queryString
      ? links.value.filter(createFilter(queryString))
      : links.value
  
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(results)
    }, 3000 * Math.random())
  }
  const createFilter = (queryString) => {
    return (restaurant => {
      return (
        restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      )
    })
  
}
  const handleSelect = (item) => {
    console.log(item)
    router.push(item.link)

  }
  
  onMounted(() => {
    links.value = loadAll()
  })
  </script>
  