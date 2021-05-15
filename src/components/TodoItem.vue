<template>
    <div class="item" v-on:mouseover="mouseOver()" v-on:mouseleave="mouseOut()" v-on:click="clickOn()" :class="todo.state"> 
        <span>{{ todo.task }}</span> <MyButton :id="todo.id" @deleted="deleteItem" v-show="visibleBTN" state="delete">Delete</MyButton>
    </div>
</template>
<script>
export default {
    props: ["todo"],
    emits: ["pending","done","deleted"],
    data(){
        return{
            state: "pending",
            visibleBTN : false
        }
    },
    methods:{
        deleteItem(id){
            this.$emit('deleted',id)
        },
        mouseOut(){
            this.visibleBTN = false
        },
        mouseOver(){
            this.visibleBTN = true
        },
        clickOn(){
            if(this.state=="pending"){
                this.state ="done"
            }
            else{
                this.state="pending"
                this.$emit("pending")
            }
        }
    }
}
</script>
<style scoped>
    .item{
        border: 1px solid rgb(255, 136, 0);
        width: 300px;
        padding: 2%;
        margin: 0 auto;
    }
    .done{
        background-color: rgb(0, 177, 236);
        color:white;
    }
    .pending{
        background-color: rgb(181, 255, 230);
        color: rgb(0, 75, 0);
    }
</style>