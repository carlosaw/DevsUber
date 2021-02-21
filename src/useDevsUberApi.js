export default () => ({

    signin:(email, password) => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let json = {
                    error:'',
                    token:'123',
                    name:'Paulo da Silva'
                };
                resolve(json);
            }, 1000);
        });
    },

    signup:(name, email, password) => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let json = {
                    error:''
                };
                if(email == 'erro@hotmail.com') {
                    json.error = 'E-mail já existe!';
                } else {
                    json.token = '123';
                    json.name = 'Paulo da Silva';
                }
                resolve(json);
            }, 1000);
        });
    },
    getRequestPrice:(distance) => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let json = {
                    error:''
                };

                json.price = distance * 2;

                resolve(json);
            }, 1000);
        });
    },

    findDriver:(options) => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let json = {
                    error:''
                };

                json.driver = {
                    name:'Gabriel Medina',
                    avatar:'https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2017/12/15_pl537_pessoa-324x235.jpg',
                    stars:4,
                    carName:'Honda Civic',
                    carColor:'Branco',
                    carPlate:'OBC 1385'
                };

                resolve(json);
            }, 3000);
        });
    },

    setRating:(rating)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let json = {
                    error:''
                };



                resolve(json);
            }, 1000);
        });
    },

});