<template>
  <!-- <h1 class="display-1 text-center">{{ $t('messages.welcome') }}</h1> -->
  <div class="text-center  m-auto ">
      <el-pagination :total="100" />

    <!-- <div class="btn btn-primary" @click="change()"></div> -->
    <el-button mb-2 @click="toggle">Switch Language    </el-button>
    <br />

    <el-config-provider :locale="locale">
      <el-table mb-1 :data="[]" />
    </el-config-provider> 
  </div>
<span style="width: .4375rem" class="DocSearch-Button-Key">K</span> 
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
<style scoped>

:root{
  --docsearch-key-gradient: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
  --docsearch-key-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px rgba(30, 35, 90, 0.4);
  --docsearch-primary-color: #5468ff;
    --docsearch-text-color: #1c1e21;
    --docsearch-spacing: 12px;
    --docsearch-icon-stroke-width: 1.4;
    --docsearch-highlight-color: var(--docsearch-primary-color);
    --docsearch-muted-color: #969faf;
    --docsearch-container-background: rgba(101, 108, 133, 0.8);
    --docsearch-logo-color: #5468ff;
    --docsearch-modal-width: 560px;
    --docsearch-modal-height: 600px;
    --docsearch-modal-background: #f5f6f7;
    --docsearch-modal-shadow: inset 1px 1px 0 0 hsla(0, 0%, 100%, 0.5), 0 3px 8px 0 #555a64;
    --docsearch-searchbox-height: 56px;
    --docsearch-searchbox-background: #ebedf0;
    --docsearch-searchbox-focus-background: #fff;
    --docsearch-searchbox-shadow: inset 0 0 0 2px var(--docsearch-primary-color);
    --docsearch-hit-height: 56px;
    --docsearch-hit-color: #444950;
    --docsearch-hit-active-color: #fff;
    --docsearch-hit-background: #fff;
    --docsearch-hit-shadow: 0 1px 3px 0 #d4d9e1;
    --docsearch-key-gradient: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
    --docsearch-key-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px rgba(30, 35, 90, 0.4);
    --docsearch-footer-height: 44px;
    --docsearch-footer-background: #fff;
    --docsearch-footer-shadow: 0 -1px 0 0 #e0e3e8, 0 -3px 6px 0 rgba(69, 98, 155, 0.12);
    --docsearch-primary-color: var(--ifm-color-primary);
    --docsearch-text-color:var(--ifm-font-color-base)
}

.DocSearch-Button-Keys {
    display: flex;
    min-width:calc(40px + .8em)
}

.DocSearch-Button {
    background: var(--docsearch-searchbox-background);
    border: 0;
    border-radius: 40px;
    color: var(--docsearch-muted-color);
    cursor: pointer;
    font-weight: 500;
    height: 36px;
    justify-content: space-between;
    padding: 0 8px;
    user-select:none
}

.DocSearch-Button:active, .DocSearch-Button:focus, .DocSearch-Button:hover {
    background: var(--docsearch-searchbox-focus-background);
    box-shadow: var(--docsearch-searchbox-shadow);
    color: var(--docsearch-text-color);
    outline:0
}

.DocSearch-Search-Icon {
    stroke-width:1.6
}

.DocSearch-Hit-Tree, .DocSearch-Hit-action, .DocSearch-Hit-icon, .DocSearch-Reset {
    stroke-width:var(--docsearch-icon-stroke-width)
}

.DocSearch-Button .DocSearch-Search-Icon {
    color:var(--docsearch-text-color)
}

.DocSearch-Button-Placeholder {
    font-size: 1rem;
    padding:0 12px 0 6px
}

.DocSearch-Input, .DocSearch-Link {
    -webkit-appearance: none;
    font:inherit
}

.DocSearch-Button-Keys {
    display: flex;
    min-width:calc(40px + .8em)
}

.DocSearch-Button-Key {
    align-items: center;
    background: var(--docsearch-key-gradient);
    border-radius: 3px;
    box-shadow: var(--docsearch-key-shadow);
    color: var(--docsearch-muted-color);
    display: flex;
    height: 18px;
    justify-content: center;
    margin-right: .4em;
    padding-bottom: 2px;
    position: relative;
    top: -1px;
    width: 20px;
}

.DocSearch--active {
    overflow:hidden !important
}

.DocSearch-Container {
    background-color: var(--docsearch-container-background);
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index:6
}

.DocSearch-Link {
    appearance: none;
    background: 0 0;
    border: 0;
    color: var(--docsearch-highlight-color);
    cursor: pointer;
    margin: 0;
    padding:0
}

.DocSearch-Modal {
    background: var(--docsearch-modal-background);
    border-radius: 6px;
    box-shadow: var(--docsearch-modal-shadow);
    flex-direction: column;
    margin: 60px auto auto;
    max-width: var(--docsearch-modal-width);
    position:relative
}

.DocSearch-SearchBar {
    display: flex;
    padding:var(--docsearch-spacing) var(--docsearch-spacing) 0
}

.DocSearch-Form {
    align-items: center;
    background: var(--docsearch-searchbox-focus-background);
    border-radius: 4px;
    box-shadow: var(--docsearch-searchbox-shadow);
    display: flex;
    height: var(--docsearch-searchbox-height);
    margin: 0;
    padding: 0 var(--docsearch-spacing);
    position: relative;
    width:100%
}

.DocSearch-Input {
    appearance: none;
    background: 0 0;
    border: 0;
    color: var(--docsearch-text-color);
    flex: 1;
    font-size: 1.2em;
    height: 100%;
    outline: 0;
    padding: 0 0 0 8px;
    width:80%
}

.DocSearch-Hit-action-button, .DocSearch-Reset {
    -webkit-appearance: none;
    border: 0;
    cursor:pointer
}

.DocSearch-Input:-ms-input-placeholder {
    color: var(--docsearch-muted-color);
    opacity:1
}

.DocSearch-Input::placeholder {
    color: var(--docsearch-muted-color);
    opacity:1
}

.DocSearch-Input::-webkit-search-cancel-button, .DocSearch-Input::-webkit-search-decoration, .DocSearch-Input::-webkit-search-results-button, .DocSearch-Input::-webkit-search-results-decoration {
    display:none
}

.DocSearch-LoadingIndicator, .DocSearch-MagnifierLabel, .DocSearch-Reset {
    margin: 0;
    padding:0
}

.DocSearch-Container--Stalled .DocSearch-LoadingIndicator, .DocSearch-MagnifierLabel, .DocSearch-Reset {
    align-items: center;
    color: var(--docsearch-highlight-color);
    display: flex;
    justify-content:center
}

.DocSearch-Cancel, .DocSearch-Container--Stalled .DocSearch-MagnifierLabel, .DocSearch-LoadingIndicator, .DocSearch-Reset[hidden] {
    display:none
}

</style>
