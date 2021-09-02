<template>
  <router-view />
</template>

<style>
body {
  font-family:
    "Helvetica Neue",
    "Helvetica",
    "PingFang SC",
    "Hiragino Sans GB",
    "Noto Sans CJK SC",
    "Noto Sans CJK",
    "Source Han Sans",
    "WenQuanYi Micro Hei",
    "Microsoft YaHei",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f2f2f2;
  margin: 0;
  box-sizing: border-box;
  font-size: 16px;
}

.-mobile-wrapper {
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  background: #fff;
  position: relative;
  overflow: hidden;
  padding: 1rem;
}
</style>
