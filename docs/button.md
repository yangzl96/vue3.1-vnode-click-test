# 按钮

这是一个按钮组件

:::demo

```vue
<template>
  <jinke-button @testClick="handleClick">普通按钮</jinke-button>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const button = ref(null);
onMounted(() => {
});
const handleClick = e => {
  console.log('md trigger',e);
}
</script>
```

:::
