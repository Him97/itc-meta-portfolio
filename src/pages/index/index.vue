<template>
  <view class="content">
    <banner/>
    <skills/>
    <projects/>
    <contact/>
    <appfooter/>
  </view>
</template>

<script setup lang="ts">
import banner from './banner.vue';
import skills from './skills.vue';
import projects from './projects.vue';
import contact from './contact.vue';
import appfooter from './footer.vue'
</script>

<style lang="less">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
