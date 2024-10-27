<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';  
import axios from 'axios'
const list = ref([])

getList()
const router = useRouter(); 
function pass(item) {
  
  const encodedText = encodeURIComponent(item.text);  
  router.push({ name: 'Test', query: { img: item.img, text: encodedText , time: item.time } });  
  console.log(item.img)
}

async function getList() {
  const res=await axios(
    {
        url:"https://r1t7b701mq.hzh.sealos.run/get_list",
        method:"GET"
    }
  )
  list.value=res.data.list
}

async function del(id) {
  await axios(
    {
        url:"https://r1t7b701mq.hzh.sealos.run/del",
        method:"POST",
        data:{
          id: id,
        },
    }
  )
  getList()
}
</script>

<template>
  <div >
    <div class="title">history</div>

    <div
      v-for="(item, index) in list"
      :key="index" 
      class="item"
      
    >
      <img class="image" :src=item.img alt="">
      <div class="text">{{ item.text }}</div>
      <div>{{ item.time }}</div>
      <button @click="pass(item)"  class="edit">edit</button>
      <button @click="del(item._id)" class="del">del</button>
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
  background-color: #f44336; 
  border: none; 
  color: white;   
  padding: 10px 20px; 
  text-align: center;  
  text-decoration: none;  
  display: inline-block;  
  font-size: 16px; 
  border-radius: 5px; 
  cursor: pointer; 
  transition: background-color 0.3s; 
}
.edit {  
  background-color: #4CAF50; 
  border: none;  
  color: white;  
  padding: 10px 20px;  
  text-align: center; 
  text-decoration: none;  
  display: inline-block; 
  font-size: 16px;  
  margin-right: 10px; 
  border-radius: 5px; 
  cursor: pointer; 
  transition: background-color 0.3s;  
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
