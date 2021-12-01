
export class LogInService{

    logIn(){
        console.log('logIn service work!');
        
        return new Promise(
            (resolve,reject) => {
                setTimeout(() =>{
                    resolve(true);
                }, 2000);
            }
        );
    }

}