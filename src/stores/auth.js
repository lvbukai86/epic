import {observable,action,makeObservable} from 'mobx';
import {Auth} from "../models";
import UserStore from './user';
import {message} from "antd";
import HistoryStore  from './history'


class AuthStore{
    @observable values={
        username:'',
        password:''
    };
    constructor() {
        makeObservable(this);
    }
    @action setUsername(username){
        this.values.username=username;
    }
    @action setPassword(password){
    this.values.password=password;
     }
     @action login(){
        return new Promise((resolve,reject)=>{
            Auth.login(this.values.username,this.values.password).then(user=>{
                UserStore.pullUser();
               resolve(user);
            }).catch(err=>{
                message.error('登录失败')
              reject(err);
            })
        });

     }
     @action register(){
         return new Promise((resolve,reject)=>{
             Auth.register(this.values.username,this.values.password).then(user=>{
                 UserStore.pullUser()

                 resolve(user);
             }).catch(err=>{
                 UserStore.resetUser();
                 if(err.code == '202'){
                     message.error('此用户名已存在');
                 }else{
                     message.error('注册失败');
                 }
                 reject(err);
             })
         });

    }
    @action logout(){
       Auth.logout()
        UserStore.resetUser()
        HistoryStore.reset()
    }
}

export default new AuthStore();
