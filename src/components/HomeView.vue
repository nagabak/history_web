<script>
// import { ref } from 'vue'
// import Shadow from './components/Shadow.vue'
import { useRoute } from 'vue-router';

export default {
  name: 'HomePage',
  // components:{
  //   Shadow
  // }
  data() {
    
    const route = useRoute();
    const image = route.query.img;
    const text = decodeURIComponent(route.query.text);
    return {
      selectedFile: null,
      imageUrl: image,
      imageBase64: '',
      result1: text ,
      result2:text ,
      token: '4c689883-242f-4097-a8f0-f0f1f07a11ae', // 替换为你的API Token
      email: '2577989239@qq.com' // 替换为你的邮箱地址

    };
  },
  mounted(){
    document.title="古籍识别";
  },
  methods: {
    onFileChange(event) {
      // 获取选择的文件
      this.selectedFile = event.target.files[0];
      if (this.selectedFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          // 将文件转换为URL并设置为图片的src
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(this.selectedFile);
      }
    },
    uploadImage() {
      const params = {
        token: this.token,
        email: this.email,
        image: this.imageUrl,
        char_ocr: false, // 根据需要设置
        det_mode: 'auto', // 根据需要设置
        image_size: 0, // 根据需要设置
        return_position: false, // 根据需要设置
        return_choices: false // 根据需要设置
      };

      this.callApi(params);
      
    },
    callApi(params) {
      fetch('https://ocr.kandianguji.com/ocr_api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      })
      .then(response => response.json())
      .then(data => {
        console.log('OCR Result:', data);
        this.result1 = data.data; // 更新结果
        this.result2=this.result1;
      })
      .catch(error => {
        console.error('Error:', error);
        this.result1 = 'Error: ' + error.message; // 显示错误信息
        this.result2=this.result1;
      });
    },
    async uploadData() {
      try {
        const response = await fetch('http://localhost:3000/upload-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ imgUrl: this.imageUrl, result: this.result, result2:this.result2 })
        });
        const result = await response.json();
        alert(result.message);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
}

</script>
<template>
  <div id="head" class="head">
    <h1>古籍识别</h1>
    <a href="/src/App.vue" class="history">历史记录</a>
  </div>
  <div class="main">
    
    <div class="box">
      <div class="pic">
        <div v-if="true" class="input-container">
          <input type="file" id="fileInput" @change="onFileChange" />
        </div>
        <div class="img-container" onerror="this.style.display='none';">
          <img :src="imageUrl" alt=" "  />
        </div>
      </div>

      <div class="myTextArea">
        <textarea rows="5" cols="20" v-model="result1"></textarea>
      </div>
    </div>

    <div class="box2">
      <button @click="uploadImage">开始识别</button> 
      <button @click="uploadData">保存</button>
    </div>
  </div>
</template>



<style>
*{
  margin: 0;
  padding: 0;
  background-color: rgb(226, 226, 207);
  background-image: url('../assets/head2.jpeg');
  background-repeat: no-repeat;
}

.head{
  width: 100vw;
  height: 35vh;
  background-color: #888;
  background-image: url('../assets/head2.jpeg');
  opacity: 0.7;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding-top: 0;
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.head h1 {
  color: #000000;
  background: none;
  font-size: 64px;
  text-align: center;
  margin: 20px 0;
}

.head .history{
  color: #000000;
  border: none;
  background: none;
  font-size: 13px;
  text-align: right;
  position: absolute;
  right: 20px; /* 距离右边20px */
}

.main{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0px;
  /* background-color: #f00; */
  width: 80vw;
  height: auto;
  margin-left: 10vw;
  margin-top: 10vh;
  background-image: url('../assets/background.png');
  background-size: 100% 100%;
}

.main .box{
  /* background-color: #fff; */
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 0;
}

.main .box .pic{
  margin: 0;
  padding: 0;
  height: 80vh;
  /* background-color: #888; */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0;
}

.main .box .pic .input-container{
  margin: 0;
  padding: 0;
  height: 5vh;
  /* background-color: yellow; */
  border: none;
  background: none;
}

.main .box .pic .img-container{
  margin: 0;
  padding: 0;
  height: 75vh;
  /* background-color: blue; */
  width: 100%;
}


.main .box .pic .img-container img{
  width: 100%; /* 图片宽度设置为100%，使其填满外边框 */
  height: 100%;
  object-fit: contain; /* 图片缩放以适应容器,保持宽高比 */
}

.main .box2{
  margin: 0;
  padding: 0;
  height: 15vh;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 0;
}

.main .myTextArea{
  /* background-color: aqua; */
  margin: 0;
  padding: 0;
  height: 80vh;
  resize: none;
  overflow:auto;
  font-size: 20px;
  /* box-shadow: none; */
}

.main .myTextArea textarea{
  margin: 0;
  padding: 1px;
  height: 100%;
  width: 100%;
  resize: none;
  overflow:auto;
  font-size: 20px;
}

.main button{
  margin: 0;
  padding: 0;
  height: 10vh;
}
</style>
