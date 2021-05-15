<template>
<span>
    <button class="delete" v-on:click="click">Delete</button>
    <button  class="add">Add</button>
</span>
    
</template>

<script>
export default {

    props: ['state','id'],
    emits: ['added','deleted'],
    data(){
        return{

        }
    },
    methods:{
        click(){
            if(this.state == "add"){
                this.$emit("added")
            }
            else{
                this.$emit("deleted",this.id)
            }
        }
    }
}
</script>
<style scoped>
    
    .delete{
        background: red;
        padding: 2%;
        float: right;
        border: none;
        margin-left: 2% ;
    }
    .add{
        background: rgb(1, 248, 55);
        padding: 2%;
        float: right;
        border: none;
    }
</style>