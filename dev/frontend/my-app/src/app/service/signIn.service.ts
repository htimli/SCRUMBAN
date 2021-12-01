export class SignInService{

    signIn(){
        console.log('signIn service work!');
        
        return new Promise(
            (resolve,reject) => {
                setTimeout(() =>{
                    resolve(true);
                }, 2000);
            }
        );
    }

}