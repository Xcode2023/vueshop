<template>
  <!-- <h1 class="display-1 text-center">{{ $t('messages.welcome') }}</h1> -->
  <div class="text-center  m-auto ">
      <el-pagination :total="100" />

    <!-- <div class="btn btn-primary" @click="change()"></div> -->
    <el-button mb-2 @click="toggle">Switch Language</el-button>
    <br />

    <el-config-provider :locale="locale">
      <el-table mb-1 :data="[]" />
    </el-config-provider>
  </div>
</template>
<script setup>
import { ref, onMounted,computed } from "vue";

import { useI18n } from "vue-i18n";import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
  console.log(language);
  
}
// import { I18n } from "vue-i18n";
// console.log(i18n.global.locale);

const { t } = useI18n();
// const change=()=>{
//   i18n.global.locale.value = 'en'
// }
onMounted(() => {

})
</script>
<style scoped></style>
