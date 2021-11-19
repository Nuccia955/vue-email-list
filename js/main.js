const app = new Vue ({
    el: '#app',
    data: {
        APIurl: 'https://flynn.boolean.careers/exercises/api/random/mail',
        email: [
            "test",
        ]
    },
    created() {
        this.genEmailList();
    },
    methods: {
        genEmailList() {
            axios.get(this.APIurl)
                .then( response => {
                    // handle success
                    console.log(response.data.response)
                    this.email.push(response.data.response);
                })
                .catch( error => {
                    // handle error
                    console.log(error);
                }
            )
        }
    },
})