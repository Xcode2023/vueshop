<template>
  <el-dialog v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <el-button type="danger" @click="close">
          <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
          Close
        </el-button>
      </div>
    </template>
    <div class="img-fluid">
      <img
        src="https://pic.imgdb.cn/item/62c4d60f5be16ec74a976191.jpg"
        alt=""
      />
    </div>
  </el-dialog>
  <div class="foot container-fluid bgc">
    <div class="box container">
      <div class="row mt-3 align-items-center">
        <main class="col-md-7 lh-lg">
          <p>
            <i class="bi bi-shield-fill-check"></i>
            ICP备案信息:赣ICP备2022002789
          </p>
          <p>
            <i class="bi bi-clipboard2-check-fill"></i> 公安备案信息:
            公网安备xxxxx
          </p>
          <p>
            <i class="bi bi-telephone-outbound-fill"></i> 联系电话:18620560777
          </p>
          <p>
            <i class="bi bi-geo-alt-fill"></i>
            地址:佛山市南海区里水镇大冲社区大冲工业区大道19号C栋503室504室
          </p>
          <p>
            <i class="bi bi-lock-fill"></i>@版权信息:
            欧德薇儿医药科技有限公司Odwer Pharmaceutical Technology Co., LTD
          </p>
        </main>
        <div
          class="col-md-5 d-md-block d-lg-block d-xxl-block d-none"
          @click="visible = true"
        >
          <img
            src="https://pic.imgdb.cn/item/62c439b65be16ec74a000039.png"
            alt=""
            class="wx img-fluid nv-button"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { ElButton, ElDialog } from "element-plus";
import { CircleCloseFilled } from "@element-plus/icons-vue";

const visible = ref(false);
</script>
<style scoped>
.foot {
  background-color: rgb(54, 142, 126);
  color: #fff;
}
.bgc {
  background-color: rgb(54, 142, 126);
}
</style>
