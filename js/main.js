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
    methods: {
        genEmailList() {
            for(let i = 0; i < 10; i++) {
                axios.get(this.APIurl)
                    .then( response => {
                        // handle success
                        console.log(response.data.response);
                        this.emailList.push(response.data.response);
                        console.log(this.emailList)
                    })
                    .catch( error => {
                        // handle error
                        console.log(error);
                    }
                )
            }
        }
    },
})