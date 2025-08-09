<template>
  <div class="recruitment-page">
    <h1>加入我们，共创未来</h1>
    <p>
      我们正在寻找充满激情、富有创造力的人才，与我们一同构建智慧城市的未来。
    </p>
    <div class="job-opening">
      <h2>高级前端工程师</h2>
      <p><strong>地点：</strong>北京</p>
      <p><strong>职责：</strong>负责H5和服务端渲染项目开发，优化前端性能，探索前沿技术。</p>
      <p><strong>要求：</strong>精通Vue.js，熟悉Vite、Pinia，有大型项目经验者优先。</p>
    </div>
    <div class="job-opening">
      <h2>高级后端工程师 (Node.js)</h2>
      <p><strong>地点：</strong>北京</p>
      <p><strong>职责：</strong>负责API服务设计与开发，数据库设计，微信生态集成。</p>
      <p><strong>要求：</strong>精通Node.js、Express，熟悉Prisma，有高并发处理经验者优先。</p>
    </div>
    <div class="contact-us">
      <p>有意者请将简历发送至：<a href="mailto:hr@dc-sl.com">hr@dc-sl.com</a></p>
    </div>
  </div>
</template>

<script setup>
// Static page, no script needed for now.
</script>

<style scoped>
.recruitment-page {
  padding: 20px;
  font-family: sans-serif;
  color: #333;
}
.job-opening {
  border: 1px solid #eee;
  padding: 15px;
  margin-top: 20px;
  border-radius: 8px;
}
h1, h2 {
  color: #0056b3;
}
.contact-us {
  margin-top: 30px;
  text-align: center;
  font-weight: bold;
}
</style>
