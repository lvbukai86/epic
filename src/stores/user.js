import {observable, action, makeObservable} from 'mobx';
import {Auth} from "../models";

class UserStore {
    @observable currentUser = null;
    constructor() {
        makeObservable(this);
    }//新版本的 makeObservable都要加这个，不然不变化
    @action pullUser() {
        this.currentUser = Auth.getCurrentUser();
    }
    @action resetUser(){
        this.currentUser=null;
    }
}
export default new UserStore();
