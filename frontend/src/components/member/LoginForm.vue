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
    <button class="btn btn-default" @click="count">숫자 조회</button>
    <button class="btn btn-default" @click="deleteById">1지우기</button>
    <button class="btn btn-default" @click="existsById">존재하냐1</button>
    <button class="btn btn-default" @click="findAll">모두 찾기</button>
    <button class="btn btn-default" @click="findById">아이디에 맞는 멤버 찾기</button>
    <button class="btn btn-default" @click="save">등록하기</button>
    
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
      context :'http://localhost:9000/customers',
      customerId: 'hong',
      customerName: '홍길동',
      password: '1234',
      ssn: '1111111',
      phone: '1231412',
      city: '서울 종로',
      address: 'ymca',
      postalcode: '1234123',
      photo: 'hong.png'
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
        alert(res.data)
        // alert(`count() SUCCESS: ${res.data}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },
    deleteById(){
      axios.delete(`${this.context}/delete/1`)
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
        alert(`findAll() : ${res.data[0].customerName}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },

    findById(){
      axios.get(`${this.context}/1`)
      .then(res=>{
        alert(`findById() SUCCESS: ${res.data.customerName}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },

    save(){
      let data = {
        id: 40,
        customerId: this.customerId,
        customerName: this.customerName,
        password : this.password,
        ssn : this.ssn,
        phone : this.phone,
        city: this.city,
        address: this.address,
        postalcode: this.postalcode,
        photo: this.photo
      }
      let headers = {
        'Content-Type' : 'application/json',
        'Authorization' : 'JWT fefege...'
      }
      axios.post(`${this.context}`,
                 JSON.stringify(data),
                {headers: headers})
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