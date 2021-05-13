<template>
    <div id="hexagon" :style='{"--color":color}'>
        <!-- <MyHeart class="heart"></MyHeart> -->
    </div>
</template>
<script>
// import MyHeart from './Heart'
export default {
    
    name: "MyHexagone",
    props:["color"],
    // components:{
    //     MyHeart,
    // }
}
</script>
<style scoped>
:root{
  --color: gray;
}
#hexagon {
  width: 100px;
  height: 57.735px;
  background: var(--color);
  position: relative;
}
#hexagon::before {
  content: "";
  position: absolute;
  top: -28.8675px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 28.8675px solid var(--color);
}
#hexagon::after {
  content: "";
  position: absolute;
  bottom: -28.8675px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 28.8675px solid var(--color);
}
/* .heart{
    background-color: white;
    border: 2px solid green;
} */

</style>