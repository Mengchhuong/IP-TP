<template >
  <div class="container">
    <h4 class="text">I'm the root components</h4> 
    <div class="component">
      <Shape name="Triangle" color="red"></Shape>
      <Shape name="Heart" color="pink"></Shape>
      <Shape name="Star" color="yellow"></Shape>
      <Shape name="Hexagone" color="gray"></Shape>
      <Shape name="Diamond" color="white"></Shape>
    </div>
  </div>
</template>

<script>
import Shape from "./components/Shape"
export default {
  components:{
    Shape
  }
}
</script>

<style>
.container{
  text-align: center;
  background: rgb(59, 241, 241);
  border: 2px solid black;
  width: 100%;
  height: 350px;
  
}
.component{
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  
}

</style>
