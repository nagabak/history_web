import { createRouter, createWebHistory } from 'vue-router';  
// 从本地组件文件夹中导入HistoryView.vue和TestView.vue组件  
import History from '../components/HistoryView.vue'; 
import Home from '../components/HomeView.vue'; 

// 定义一个路由配置数组，每个对象代表一个路由配置  
const routes = [  
  {  
    path: '/',  
    name: 'Home',  
    component: Home
  },  
  {  
    path: '/History',  
    name: 'History',  
    component: History  
  }  
];  
 // 使用createRouter函数创建路由实例，并传入配置   
const router = createRouter({  
  history: createWebHistory(),  
  routes  
});  
// 导出路由实例，以便在Vue应用中使用   
export default router;