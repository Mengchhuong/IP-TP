<template>
    <MyTriangle v-if="name=='Triangle'" :color="color"></MyTriangle>
    <MyHexagone v-else-if="name=='Hexagone'" :color="color"></MyHexagone>
    <MyHeart v-else-if="name=='Heart'" :color="color"></MyHeart>
    <MyStar v-else-if="name=='Star'" :color="color"></MyStar>
    <MyDiamond v-else-if="name=='Diamond'" :color="color"></MyDiamond>
</template>
<script>
export default {
    props:["name","color"]
}
</script>
<style scoped>

</style>