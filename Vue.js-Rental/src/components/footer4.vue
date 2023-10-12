<template>
  <div>
    footer4 지역 범위를 가진 동적속성 연습!
    <button v-on:click="counter +=1">{{counter}}</button><br />

    속성 검증하기 연습!<br />
    숫자: {{num}}<br />
    문자열: {{str}}<br />
    짝수?: {{even}}<br />
    객체: {{obj.message}}
  </div>
</template>

<script>
export default {
data() {
    return {
      counter: 0
    }
  },
  props: {
    num: {
      type: Number,
      required : true,
    },
    str: {
      type: String,
      default: "안녕",
    },
    obj: {
      type: Object,
      default: () => {
        return {message: '안녕, 객체로부터'}
      }
    },
    even: {
      validator: (value) => {
        return (value % 2 === 0)
      }
    }
  }
}
</script>

<style>

</style>