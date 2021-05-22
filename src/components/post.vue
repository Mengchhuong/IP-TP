<template>
<div class="container">
     <!-- add post -->
    <div class="d-flex">
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" v-model="post">
        <button type="button" class="btn btn-light" @click="addPost">Post</button>
    </div>

    <!-- post content -->
    <form class="shadow p-3 mb-5 bg-body rounded" action="" v-for="post in getPost" :key="post">
        <h5 >{{post.title}}</h5>
        <span>{{post.postedAT}}</span>
        <p>{{post.content}}</p>

        <!--add comment-->
        <div class="d-flex">
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" v-model="comment">
            <button type="button" class="btn btn-light" @click="addComment">comment</button>
        </div>

        <!-- comment content -->
        <div class="container-fluid" v-for="comment in getComment" :key="comment">
            <p>{{comment.name}}</p>
            <span>{{comment.commentAt}}</span>
            <p>{{comment.content}}</p>
        </div>
    </form>
</div>

    
</template>
<script>
export default {
    data(){
        return{
            post:"",
            comment:"",
        }
    },
    methods:{
        addPost(){
            this.$store.dispatch("addPost",this.post)
        },
        addComment(){
            this.$store.dispatch("addComment",this.comment)
        }
    },
    computed:{
        getPost(){
            return this.$store.getters.getPosts
        },
        getComment(){
            return this.$store.getters.getComments
        }
    }
}
</script>
<style scoped>
    @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
    @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css';
form{
    margin: 0 auto;
    border: 1px solid rgb(112, 0, 0);
    padding: 2%;
    margin-top:2%;
}
.container{
    width: 35%;
    margin-top: 2%;
}
.container-fluid{
    border: 1px solid gray ;
    margin-bottom: 3%;
    margin-top: 3%;
}
</style>