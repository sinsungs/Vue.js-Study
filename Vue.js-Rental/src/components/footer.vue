<template>
  <div class="footer">
    <hr>
    <div class="footer1">
      <div class="footer2">
      </div>
      <div class="footer3">
        <form action="">
          <slot></slot> <!-- 이부분에 <h1> header 들어가게됨 -->
          <slot name="titleSlot"></slot><input id="title" type="text" /><br />
          <slot name="authorSlot"></slot><input id="author" type="text" /><br />
          
          <button>제출하기</button>

       </form>
      </div>
      <div class="footer4">
        고객센터 1670 - 6576
      </div>
    </div>
       
  </div>
</template>

<script>
export default {
    name: 'my-footer',
    props: ['title', 'author']
}
</script>

<style>

</style>