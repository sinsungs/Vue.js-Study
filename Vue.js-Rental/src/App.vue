<template>
  <div id="app">
    <router-view/>
    <MyFooter>
      <h1>{{header}}</h1>
      <label for="title" slot="titleSlot">{{titleLabel}}</label>
      <label for="author" slot="authorSlot">{{authorLabel}}</label>
      <!-- <button @click="cycle">순환하기</button> -->
      <h2>
        <component :is="currentView" />
      </h2>
      <hr>
       <MyFooter2 text="World"></MyFooter2>
       <MyFooter3 :text="message"></MyFooter3>
       <MyFooter4 :num="myNumber" :str="passedString" :even="myNumber" :obj="passedObject"></MyFooter4>
 
    </MyFooter>
   

  </div>
</template>

<script>

import MyFooter from '@/components/footer'
import MyFooter2 from '@/components/footer2'
import MyFooter3 from '@/components/footer3'
import MyFooter4 from '@/components/footer4'

export default {
  name: 'App',
  components : {
    MyFooter,
    MyFooter2,
    MyFooter3,
    MyFooter4,
  },
  data() {
    return {
      titleLabel: '제목:',
      authorLabel: '저자:',
      header: 'WEAR SHARE',

      currentView: MyFooter3,

      message: '동적 속성 연습입니다!',

      passedString: '안녕, 부모로부터',
      myNumber: 43,
      passedObject: {message: '넘겨준 객체'},
    }
  },
  methods: {
    // cycle() {
    //   if (this.currentView === MyFooter2)
    //     this.currentView = MyFooter3
    //   else
    //     this.currentView = this.currentView === MyFooter3 ? MyFooter4 : MyFooter2;  
    // }
  }
}
</script>