import {observable,action} from 'mobx';

class AuthStore{
    @observable isLogin=false;
    @observable isLoading=false;
    @observable values={
        username:'',
        password:''
    };
    @action setIsLogin(isLogin){
        this.isLogin=isLogin;
    }
    @action setUsername(username){
        this.values.username=username;

    }
    @action setPassword(password){
    this.values.username=password;
     }
     @action login(){
        console.log('登录成功');
        this.setUsername('ada');
        this.isLogin=true;
        this.isLoading=false;
     }
     @action register(){
         console.log('注册成功');
         this.setUsername('ada');
         this.isLogin=true;
         this.isLoading=false;
    }
    @action logout(){
       console.log('已注销') ;
    }
}

export  {AuthStore};
