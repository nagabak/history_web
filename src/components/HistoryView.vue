<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';  

const list = ref([
  {img:"images/1.png",text: '发生的垃圾啊发软fsfjlksjsfjlsfsfjgflksddjflasfjflsdkjfkslafjlwelajwfldgkld;sjglkjf' ,time:'10-04'},
  {img:"images/1.png",text: '吃饭' ,time:'10-04'},
  {img:"images/1.png",text: '吃饭' ,time:'10-01'},
])


const router = useRouter(); 
function pass(item) {
  
  const encodedText = encodeURIComponent(item.text);  
  router.push({ name: 'Test', query: { img: item.img, text: encodedText , time: item.time } });  
  console.log(item.img)
}

function del(index) {
  list.value.splice(index, 1)
}
</script>

<template>
  <div >
    <div class="title">history</div>

    <div
      v-for="(item, index) in list"
      :key="index" 
      class="item"
      @click="pass(item)"
    >
      <img class="image" :src=item.img alt="">
      <div class="text">{{ item.text }}</div>
      <div>{{ item.time }}

    </div>
      
      <div @click="del(index)" class="del">del</div>
    </div>
  </div>
</template>

<style scoped>

.title {
  text-align: left;
  font-size: 30px;
  font-weight: 700;
}

.item {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 100px;
  margin: 8px auto;
  padding: 16px;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 20px;
}

.del {
  color: red;
}
.text
{
  white-space: nowrap;    
  overflow: hidden;    
  text-overflow: ellipsis;  
  width: 60%; 
}

.image{
  height: 90%;
  width: auto;
  object-fit: cover;
}

</style>
