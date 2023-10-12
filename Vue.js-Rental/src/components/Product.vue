<template>
  <div>
    <my-header></my-header>
    <!-- <h1>id {{$route.params.id}} 입니다.</h1> -->
    <div class="content" style="width:800px">
      
      <div class="content2" style="width:400px;">
        <figure>
          <img class="product" style="width:300px; height:300px;" v-bind:src="product.image">
        </figure>
      </div>

      <div class="content1" style="width:400px;">
        <!-- <h1>{{product.title}}</h1>
        <p v-html="product.description"></p>
        <p class="price">{{product.price}}</p> -->

        <p v-html="product.title" style="font-weight: bold;"></p>
           <p>{{product.name}}</p>
           <p class="price">{{product.price}}원</p>
           <p>1일 대여비 : {{product.price/10}}원 <span style="float:right">{{product.state}}</span></p>
           <br/><br/>
        <button @click="edit">상품 수정</button>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './Header.vue'
export default {
  components: { MyHeader },
  data() {
    return {
      product: ''
    }
  },
  methods: {
    edit() {
      this.$router.push({name: 'Edit'})
    }
  },
  created: function() {
    axios.get('/static/products.json')
    .then((response) => {
      this.product = response.data.products.filter(data => data.id == this.$route.params.id)[0];
      // this.product.image = '/' + this.product.image;
    });
  }
}
</script>
