const app = new Vue ({
    el: '#app',
    data: {
        APIurl: 'https://flynn.boolean.careers/exercises/api/random/mail',
        email: [
            "test",
        ]
    },
    created() {
        this.genEmailList()
    },
    methods: {
        genEmailList() {
            axios.get(this.APIurl)
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                }
            )
        }
    },
})