import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state(){
        return{
            user: {
                name: "Meng Chhuong",
                gender: "M",
                phone: "012345667",
                id: "1"
            },
            posts:[
                {
                    title: "Snow White",
                    content: "hello im the author of this story .......",
                    postedAT: "30/12/2020",
                    postedBy: "1",
                    id: 1
                }, 
                {
                    title: "The Mermaid",
                    content: "hello im the author of this story kind of blah blah blah .......",
                    postedAT: "22/1/2020",
                    postedBy: "2",
                    id: 2
                },
                
            ],
            comments:[
                // {
                //     name:"Mengchhuong",
                //     content: "this is a great story for kid",
                //     commentAt: "15:30:23",
                //     commentBy: "1",
                //     postId: "1",
                //     id: "1",
                // },
                // {

                //     content: "this is a great story for kidjhbvdbcij",
                //     commentAt: "5:10:23",
                //     commentBy: "1",
                //     postId: "2hbdsfd",
                //     id: "h4hfg",
                // },
            ]
            
        }
    },
    mutations:{
        addPost(state,data){
            state.posts.push({
                title: "Mengchuong",
                content: data,
                postedAT: "15/5/2021",
                id: state.posts.length + 1,
        }); 
        },
        addComment(state,data){
            state.comments.push({
                name:"Mexis",
                content: data,
                commentAt: "16/5/2021",
                id:state.comments.length +1,
            });
        }
    },
    actions:{
        addPost({commit},data){
            commit('addPost',data)
        },
        addComment({commit},data){
            commit('addComment',data)
        }

    },
    getters:{
        getPosts(state){
            return state.posts
        },
        getComments(state){
            return state.comments
        },
        // getCommentsByPost:(state) =>(postId) =>{
        //     return state.comments.filter(comment => comment.postId == postId)
        // }
    }
})
const app = createApp(App)
app.use(store)
app.mount('#app')
