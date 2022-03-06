import {observable, action, makeObservable} from "mobx";
import {message} from "antd";
import {Upload} from '../models'

class HistoryStore{
    constructor() {
        makeObservable(this);
    }
    @observable list=[];
    @observable isLoading=false;
    @observable hasMore=true;
    @observable page=0;
    limit=10;
    @action append(newList){
        this.list=this.list.concat(newList);
    }
    @action find(){
        this.isLoading=true;
        Upload.find(this.page,this.limit)
            .then(newList=>{
                this.append(newList);
                this.page++;

                if(newList.length<this.limit){
                    this.hasMore=false;
                }
            }).catch(error=>{
                message.error('加载失败');
        }).finally(()=>{
            this.isLoading=false;
        })
    }
    @action reset(){
        this.list=[];
        this.hasMore=true;
        this.page=0;

    }

}
export default new HistoryStore();
