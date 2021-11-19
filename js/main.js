const app = new Vue ({
    el: '#app',
    data: {
        APIurl: 'https://flynn.boolean.careers/exercises/api/random/mail',
        emailList: [
        ]
    },
    created() {
        this.genEmailList();
    },
    computed: {
        listCompleted() {
            return (this.emailList.length === 10) ? true : false;
        },
    },
    methods: {
        genEmailList() {
            for(let i = 0; i < 10; i++) {
                axios.get(this.APIurl)
                    .then( response => {
                        // handle success
                        this.emailList.push(response.data.response);
                    })
                    .catch( error => {
                        // handle error
                        this.$refs.status.innerHTML = `${error}`;
                    }
                )
            }
        }
    },
})