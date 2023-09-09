<template>
  <div class="container">
    <h1 class="display-5 text-center alert alert-success">
      期待您珍贵的使用反馈以让我们对产品做出更好的改进
    </h1>
    <el-form action="" id="myform" class="form">
      <div>
        <p>
          <el-input type="text" id="" value="" placeholder="您的姓名：" />
        </p>
        <p>
          <el-input type="text" id="" value="" placeholder="联系方式：" />
        </p>
        <p>
          <el-select name="" placeholder="留言指向：">
            <el-option value="">家居护肤系列</el-option>
            <el-option value="">套盒护肤系列</el-option>
            <el-option value="">院装护肤系列</el-option>
          </el-select>
        </p>
        <p>
          <textarea class="form-control" placeholder="此处编写留言"></textarea>
        </p>

        <button
          type="button"
          @click="
            window.confirm(
              '提交成功!  感谢您给欧德薇儿的建议\r我们将在一个工作日以内给您致电或回信'
            )
          "
          class="btn btn-outline-success"
        >
          提交
        </button>
      </div>
    </el-form>
    <p class="alert alert-success">我们诚诺仔细阅读每条反馈并尽快给您回应</p>
  </div>
</template>
<script setup>
import logo from "@/images/alpha/logo.png";
</script>
<style scoped></style>
