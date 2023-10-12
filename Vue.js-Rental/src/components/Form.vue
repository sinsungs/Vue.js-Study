<template>
    <div>
      <my-header :cartItemCount="cartItemCount"></my-header>
      <div class="content">
          <div class="null">
                    <h1 style="line-height:100px; text-align:center">주문 하기</h1>
                </div>

                  <h2><strong>주문 상품 정보</strong></h2>
                  <hr>
                  <div class="form">
                  <div class="order_item" style="width:100%; height:200px;">
                    <ul style="width:100%; height: 70px; " >
                        <li style="width:200px; display:inline-block;line-height: 70px;">
                          로랑051
                        </li> 
                        <li style="width:650px; display:inline-block;line-height: 70px;">
                        </li> 
                        <li style="width:250px; display:inline-block;line-height: 70px;">쿠폰적용</li>
                        <li style="width:200px; display:inline-block;line-height: 70px;">주문금액</li>
                    </ul>
                    <hr>
                    <ul ul style="width:100%; height: 130px; " >
                        <li style="width:200px; display:inline-block;"><a href=""><img style="width:130px; height:130px;" src="https://image.brandi.me/cproduct/2020/12/01/24652915_1606751982_image1_S.jpg" alt="[특가] [로랑051 그레이 당일출고] 베이직 루즈핏 퍼 자켓(3color) 상품 썸네일"></a></li> 
                        <li style="width:650px; display:inline-block;"><a href=""><span>[특가] [로랑051 그레이 당일출고] 베이직 루즈핏 퍼 자켓(3color)</span></a> <span>Dark Gray/Free</span> <span>1개</span></li> 
                        <li style="width:250px; display:inline-block;">적용 가능한 쿠폰이 없습니다.</li> 
                        <li style="width:200px; display:inline-block;">69,000원</li>
                    </ul>
                    
                  </div>
                  <hr>
                  <div div class="price_sum" style="width:100%; height:70px;">

                  </div>
                  <hr>
                  </div>
                  
                  <div class="form2" style="width:600px;">
                          <strong>이름:</strong>
                          <input v-model.trim="order.firstName" class="form-control" /><br/>

                          <strong>성:</strong>
                          <input v-model.trim="order.lastName" class="form-control" /><br/>
                        
                          <strong>주소:</strong>
                          <input v-model.trim="order.address" class="form-control" /><br/>
                        
                          <strong>도시:</strong>
                          <input v-model.trim="order.city" class="form-control" /><br/>
            
                          <strong>우편번호:</strong>
                          <input v-model.number="order.zip"
                            class="form-control"
                            type="number"/>

                        <div class="col-md-6 boxes">
                          <input type="checkbox"
                            id="gift" value="true"
                            v-bind:true-value="order.sendGift"
                            v-bind:false-value="order.dontSendGift"
                            v-model="order.gift">
                          <label for="checkbox">선물로 보내기?</label>
                      </div>

                          <input type="radio"
                            id="home"
                            v-bind:value="order.home"
                            v-model="order.method">
                          <label for="home">자택</label>
                          <input type="radio"
                            id="business"
                            v-bind:value="order.business"
                            v-model="order.method">
                          <label for="business">직장</label>
                          <button type="submit" class="btn btn-primary submit" v-on:click="submitForm">주문하기</button>
                        
               
                      <pre style="width:300px; float:right">
                          이름: {{order.firstName}}
                          성: {{order.lastName}}
                          주소: {{order.address}}
                          도시: {{order.city}}
                          우편번호: {{order.zip}}
                          배송지: {{order.method}}
                          선물: {{order.gift}}
                      </pre>
         
                </div>
          </div>
      </div><!-- end of row -->
</template>

<script>
import MyHeader from './Header.vue';
export default {
  name: 'Form',
  props: ['cartItemCount'],
  data() {
    return {
      order: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        state: '',
        method: '자택 주소',
        business: '직장 주소',
        home: '자택 주소',
        gift: '선물로 보내기',
        sendGift: '선물로 보내기',
        dontSendGift: '선물로 보내지 않기'
      }
    }
  },
  components: { MyHeader },
  methods: {
    submitForm() {
      alert('제출 완료');
    }
  }
}
</script>

<style>

</style>