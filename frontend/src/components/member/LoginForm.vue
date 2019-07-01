<template>
<div>
  <Nav></Nav>
  <form>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password">
    </div>
    <div class="checkbox">
      <label><input type="checkbox"> Remember me</label>
    </div>
    <button class="btn btn-default" @click="get">조 회</button>
    <button class="btn btn-default" @click="post">입 력</button>
    <button class="btn btn-default" @click="put">수 정</button>
    <button class="btn btn-default" @click="del">삭 제</button>
    
  </form>
  <Footer></Footer>
</div>
</template>

<script>
import Nav from '@/components/common/Nav.vue'
import Footer from'@/components/common/Footer.vue'
import ListTable from '@/components/member/ListTable'
import axios from 'axios'

export default {
  data(){
    return{
      context :'http://localhost:9000/customers/'
    }
  },
  components: {
    Nav,
    Footer
  },
  methods:{
    count(){
      axios.get(`${this.context}/count`)
      .then(res=>{
        alert(`SUCCESS: ${res.data}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },
    deleteById(){
      axios.get(`${this.context}/1`)
      .then(res=>{
        alert(`SUCCESS: ${res.data}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },
    existsById(){
      axios.get(`${this.context}/exists/1`)
      .then(res=>{
        alert(`SUCCESS: ${res.data}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },
    findAll(){
      axios.get(`${this.context}`)
      .then(res=>{
        alert(`SUCCESS: ${res.data}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },

    findById(){
      axios.get(`${this.context}/1`)
      .then(res=>{
        alert(`SUCCESS: ${res.data}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },

    save(){
      axios.post(`${this.context}`)
      .then(res=>{
        alert(`SUCCESS: ${res.data}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },


  }
}
</script>

<style scoped>
</style>