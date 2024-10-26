import { createRouter, createWebHistory } from 'vue-router';  
import History from '../components/HistoryView.vue'; 
import Test from '../components/TestView.vue'; 
  
const routes = [  
  {  
    path: '/',  
    name: 'History',  
    component: History 
  },  
  {  
    path: '/Test',  
    name: 'Test',  
    component: Test  
  }  
];  
  
const router = createRouter({  
  history: createWebHistory(),  
  routes  
});  
  
export default router;