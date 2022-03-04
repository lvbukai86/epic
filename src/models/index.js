import AV,{Query,User} from "leancloud-storage";
AV.init({
    appId: "QABl2aomt1BbYB4sCYcK0R6N-gzGzoHsz",
    appKey: "0oJbV3HKGc2Ce7sfouqW5x0a",
    serverURL: "https://qabl2aom.lc-cn-n1-shared.com"
});

const Auth = {
    register(username, password) {
        let user = new User();
        user.setUsername(username);
        user.setPassword(password);
        return new Promise((resolve, reject) => {
            user.signUp().then(loginedUser => resolve(loginedUser), error => reject(error))
        });
    },

    login(username, password) {
        return new Promise((resolve, reject) => {
            User.logIn(username, password).then(loginedUser => resolve(loginedUser), error => reject(error));
        });
    },

    logout() {
        User.logOut();
    },

    getCurrentUser() {
        return User.current();
    },


}
    //操作数据库
const Upload={
    add(file,filename){
        const item=new AV.Object('Image');
        const avFile=new AV.File(filename,file);
        item.set('filename',filename);
        item.set('owner',AV.User.current());
        item.set('url',avFile);
        return new Promise((resolve,reject)=>{
            item.save().then(serverFile=>resolve(serverFile),error=>reject(error));
        })
    },
    find(page=0,limit=10){
        const query=new AV.Query('Image');
        query.include('owner');
        query.limit(limit);
        query.skip(limit*page);
        query.descending('createAt');
        query.equalTo('owner',AV.User.current())
        return new Promise((resolve,reject)=>{
            query.find()
                .then(results =>resolve(results))
                .catch(error =>reject(error))
        })

    }
}

window.Upload=Upload

export {
    Auth,Upload
};
