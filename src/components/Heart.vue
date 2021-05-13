<template>
    <div id="heart" :style='{"--color":color}'></div>
</template>
<script>
export default {
    props:["color"]
}
</script>
<style scoped>
  :root{
    --color:pink;
  }
    #heart {
      position: relative;
      width: 50px;
      height: 40px;
    }
    #heart:before,
    #heart:after {
      position: absolute;
      content: "";
      left: 25px;
      top: 0;
      width: 25px;
      height: 40px;
      background: var(--color);
      border-radius: 25px 25px 0 0;
      transform: rotate(-45deg);
      transform-origin: 0 100%;
    }
    #heart:after {
      left: 0;
      transform: rotate(45deg);
      transform-origin: 100% 100%;
    }
</style>