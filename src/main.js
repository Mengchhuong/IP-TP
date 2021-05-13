import { createApp } from 'vue'
import App from './App.vue'
import MyTriangle from './components/Triangle'
import MyHexagone from './components/Hexagone'
import MyHeart from './components/Heart'
import MyStar from './components/Star'
import MyDiamond from './components/Diamond'


const app=createApp(App);
app.component('MyTriangle', MyTriangle)
app.component('MyHexagone', MyHexagone)
app.component('MyHeart', MyHeart)
app.component('MyStar',MyStar)
app.component('MyDiamond',MyDiamond)

app.mount('#app')
