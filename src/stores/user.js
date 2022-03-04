import {observable, action, makeObservable} from 'mobx';
import {Auth} from "../models";

class UserStore {
    constructor() {
        makeObservable(this);
    }//新版本的 makeObservable都要加这个，不然不变化
    @observable currentUser = null;
    @action pullUser() {
        this.currentUser = Auth.getCurrentUser();
    }
    @action resetUser(){
        this.currentUser=null;
    }
}
export default new UserStore();
