<template>
  <h1 class="display-1 text-center">{{ $t('messages.welcome') }}</h1>
  <div></div>
</template>
<script setup>
import { ref, onMounted } from "vue";

import { useI18n } from "vue-i18n";

const { t } = useI18n();
onMounted(() => {
  console.log(t("messages.welcome"));

})
</script>
<style scoped></style>
