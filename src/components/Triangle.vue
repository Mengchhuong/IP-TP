<template>
    <div id="triangle" :style='{"--color":color}'></div>
</template>

<script>
export default {
    name: "MyTriangle",
    props:["color"],
}
</script>

<style scoped>
    :root{
        --color:red ;
    }
    #triangle{
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 100px solid var(--color);
    }
</style>