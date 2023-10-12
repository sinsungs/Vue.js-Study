<template>
<div>
  <div class="black-bg" v-if="modal == true">
            <div class="white-bg">
                <div class="modal-top">
                </div>
                <div class="modal-mid">
                    <h4>상세페이지임</h4>
                    <p>상세페이지 내용임</p>
                </div>
                <div class="modal-bottom">
                    <button type="button" @click = "showModal"><a>신청</a></button>
                    <button type="button" @click = "showModal"><a>닫기</a></button>
                    
                </div>
                
            </div>
        </div> 

  <my-header :cartItemCount="cartItemCount"></my-header>

  <main>
      <div class="content">
                <div class="null">
                    <h1 style="line-height:100px; text-align:center">전체 상품</h1>
                </div>
                <div class="sort">
                        <button @click="starHigh"><span>평점 높은순</span></button>
                        <button @click="priceSort"><span>낮은 가격순</span></button>
                        <button @click="priceHigh"><span>높은 가격순</span></button>
                        <button @click="sortBack" ><span>기본정렬</span></button>
                </div>
                <div class="content2">
                    <input class="input" type="text" placeholder="ex. 샤넬, 구찌" style="margin-top: 20px;">
                    <h4 style="font-size: 16px;">제품상태</h4>
                    <div class="rental" style="margin-bottom: 30px;">
                        <button @click="currentState('대여중')">대여중</button> 
                        <button @click="currentState('대여가능')">대여가능</button>
                    </div>

                    <div class="category">
                        <h1 style="margin-bottom: 10px;">CATEGORIES</h1>
                        <hr>
                        <div @click="currentCategory('outer')"><h2 style="margin-bottom: 10px;">OUTER</h2></div>
                        <hr>
                        <div @click="currentCategory('top')"><h2 style="margin-bottom: 10px;">TOP</h2></div>
                        <hr>
                        <div @click="currentCategory('bottom')"><h2 style="margin-bottom: 10px;">BOTTOM</h2></div>
                        <hr>
                        <div@click="currentCategory('shoes')"><h2 style="margin-bottom: 10px;">SHOES</h2></div>
                        <hr>
                    </div>
                </div>


    <div class="content1">
    <div v-for="(product,index) in products" :key="index">
      <li class="product">
        <div>
          <figure>
            <img class="product-img" v-bind:src="product.image">
          </figure>
        </div>
        <div class="product-text">
            <router-link tag="h2"
              :to="{name: 'Id', params: {id: product.id}}">
            {{product.title}}
            </router-link>
           <p>{{product.name}}</p>
           <p class="price">{{product.price}}원</p>
           <p>1일 대여비 : {{product.price/10}}원 <span style="float:right">{{product.state}}</span></p>
           

          <button class="put" v-if="canAddToCart(product)" @click="addToCart(product)"><span>장바구니 담기</span></button>
          <button v-else disabled class="put"> 재고 소진 </button>
          <button class="rental" @click="showModal">대여 실행</button>
          <span class="inventory-message"
                v-if="product.availableInventory - cartCount(product.id) === 0">
              품절!
          </span>
          <span class="inventory-message"
                v-else-if="product.availableInventory - cartCount(product.id) < 5">
              {{product.availableInventory - cartCount(product.id)}} 남았습니다!
          </span>
          <span class="inventory-message"
                v-else>지금 구매하세요!
          </span>
          <div class="rating">
            <span v-bind:class="{'rating-active': checkRating(n, product)}"
                v-for="n in 5" :key="n">☆
            </span>
          </div>
        </div>
      </li><!-- end of row -->
    </div><!-- end of v-for -->
    </div>
    </div>
  </main>
</div>
</template>


<script>
  import MyHeader from './Header.vue';
export default {

    name: 'imain',
     data() {
        return {
                products: [],
                cart: [],
                modal : false,
        }
    },

  props: {
    
  },

    components: { MyHeader },

    methods: {
      
    priceHigh() {
      this.products.sort(function(a,b){
        return b.price - a.price
      });
    },
      
    priceSort() {
      this.products.sort(function(a,b){
        return a.price - b.price
      });
    },

     starHigh() {
      this.products.sort(function(a,b){
        return b.rating - a.rating
      });
    },

    sortBack() {
       axios.get('/static/products.json').then(response => {
      this.products = response.data.products;
      console.log(this.products);
    });
    },

    checkRating(n, myProduct) {
        return myProduct.rating - n >= 0;
    },
    addToCart(aProduct) {
        console.log(aProduct.id)
        this.cart.push(aProduct.id);
    },
    canAddToCart(aProduct) {
        return aProduct.availableInventory > this.cartCount(aProduct.id);
    },
                // canAddToCart : 장바구니 담기 if 조건
         cartCount(id) {
            let count = 0;
            for (var i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                count++;
                }
            }
            return count;
            },

    //  currentState() {
    //   axios.get('/static/products.json').then(response => {
    //   this.products = response.data.products;
    //   console.log(this.products);
    // });
    //     },

    currentState(s) {
    axios.get('/static/products.json')
    .then((response) => {
      this.products = response.data.products.filter(data => data.state == s);
      // this.product.image = '/' + this.product.image;
    });
  },
  currentCategory(c) {
    axios.get('/static/products.json')
    .then((response) => {
      this.products = response.data.products.filter((data) => data.category == c);
      // this.product.image = '/' + this.product.image;
    });
  },
  getCategoryProducts() {
        this.categoryProducts = this.products.filters((item)=> item.category == "top");
        console.log(this.categoryProducts);
      },
    showModal() {
                    this.modal = !!!this.modal;
                    console(this.modal)
                },
    },
    
    computed: {
         cartItemCount: function() {
            return this.cart.length || '';
        },
                // cartItemCount : 장바구니 주문하기 개수 = cart 배열의 길이 
       
    },
    created: function() {
    axios.get('/static/products.json').then(response => {
      this.products = response.data.products;
      // this.categoryProducts = this.getCategoryProducts(this.category);
      console.log(this.products);
    });
  },
    // created: function() {
    //     axios.get('/static/products.json').then(response => {
    //     this.products = response.data.products;
    //     console.log(this.products);
    //   });
    // }


  }
</script>

<style>

</style>

