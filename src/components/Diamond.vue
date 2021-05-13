<template>
    <div id="diamond" :style='{"--color":color}'></div>
</template>
<script>
export default {
    props:["color"]
}
</script>
<style scoped>
    :root{
      --color:aquamarine;
    }
    #diamond {
      width: 0;
      height: 0;
      border: 50px solid transparent;
      border-bottom-color: var(--color);
      position: relative;
      top: -50px;
    }
    #diamond:after {
      content: '';
      position: absolute;
      left: -50px;
      top: 50px;
      width: 0;
      height: 0;
      border: 50px solid transparent;
      border-top-color: var(--color);
    }
</style>