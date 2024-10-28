<script>

</script>

<template>
  <nav>
    <RouterLink to="/" class="home-link">Home</RouterLink>
    <RouterLink to="/History" class="history-link">History</RouterLink>
  </nav>
 
  <RouterView />
</template>
<style scoped>  
/* 为Home链接定义样式 */  
.home-link {  
  text-decoration: none;  
  color: #3498db; /* 蓝色 */  
  padding: 10px 20px;  
  border-radius: 5px;  
  transition: background-color 0.3s;  
}  
  
.home-link:hover {  
  background-color: #ecf0f1; 
}  
  
/* 为History链接定义样式 */  
.history-link {  
  text-decoration: none;  
  color: #2ecc71;  
  padding: 10px 20px;  
  border-radius: 5px;  
  transition: background-color 0.3s;  
}  
  
.history-link:hover {  
  background-color: #dcedc8; 
}  
</style>
