<template lang="pug">
    .form
        input(type="text" placeholder="login" v-model="user.name")
        input(type='password' placeholder="password" v-model="user.password")
        button(type="button" @click="sendData") Залогиниться
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            user:{
                name: '',
                password: ''
            }
        }
    },
    methods: {
        sendData(){
            axios.post("https://webdev-api.loftschool.com/login", this.user).then(response =>{
                if (response.status === 200) {
                    const ttl =Math.floor( Date.now()/1000 + response.data.ttl)

                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('ttl', ttl);

                }
            })
        }
    }
}
</script>
