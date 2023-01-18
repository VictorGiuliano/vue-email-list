const app = Vue.createApp({
    data(){
        return{
            emails: []
        }
    },
    methods:{
        getEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            const email = response.data.response;
            this.emails.push(email);
        });
        }
    },
    mounted(){
        for(let i=0; i<=9;i++){
            this.getEmail();
        }
    }
});



app.mount('#root');

