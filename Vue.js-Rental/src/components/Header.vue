<template>
  <div class="header">
            <div class="wearshare">
                <div class="wearshare2">
                    <h1  class="logo"><router-link :to="{name: 'iMain'}">{{ sitename }}</router-link></h1>
                    <div class="login">
                      <router-link
                      active-class="active"
                      tag="button" :to="{name: 'Form'}">
                        체크아웃
                      </router-link>
                        <button type="button" style="width:80px; background-color:cornflowerblue;">
                            <a>{{cartItemCount}}장바구니</a>
                        </button>
                        <button>로그인</button>
                        <button>회원가입</button>                  
                    </div>
                </div>
            </div>
            <nav>
                <ul>
                    <hr>
                    <li class="nav-menu"><a class="nav-text" href="#">입점 신청</a></li>
                    <li class="nav-menu"><a class="nav-text" href="#" style="color:blue">Share</a></li>
                    <li class="nav-menu"><a class="nav-text" href="#">전체 상품</a></li>
                    <li class="nav-menu"><a class="nav-text" href="#">지역 매장</a></li>
                    <li class="nav-menu"><a class="nav-text" href="#">리뷰</a></li>
                    <li class="nav-menu"><a class="nav-text" href="./Brand.html">브랜드</a></li>
                    <hr>
                </ul>
            </nav>
        </div>
</template>

<script>

export default {
  name: 'my-header',
  data() {
    return {
      sitename: "Wear Share",
    }
  },
  props: ['cartItemCount'],
  methods: {
    showCheckout() {
      this.$router.push({name: 'Form'});
    }
  }
}
</script>

<style scoped>

.router-link-exact-active {
  background-color:aquamarine;
  /* color: blue; */
  color: black;
}
</style>

