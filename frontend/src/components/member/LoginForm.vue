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
      context :'http://localhost:9000/'
    }
  },
  components: {
    Nav,
    Footer
  },
  methods:{
    get(){
      axios.get(`${this.context}/customers/count`)
      .then(res=>{
        alert(`SUCCESS: ${res.data}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
      // this.$router.push("/ListTable")
    },
    post(){
      axios.post('/customers')
      .then(d=>{
        console.log('post 연동')
        alert(`post 연동 성공 : ${res.data.result}`)
      })
    },
    put(){
      axios.put('/customers/id')
      .then(d=>{
        alert(`put 연동 성공 : ${res.data.result}`)
      })
    },
    del(){
      axios.delete('/customers/id')
      .then(d=>{
        alert(`del 연동 성공: ${res.data.result}`)
      })
    }
  }
}
</script>

<style scoped>
</style>