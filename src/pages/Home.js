import React from "react";
import {observer} from 'mobx-react';
import { useStores} from '../stores';

const Home=observer(()=>{
    const {UserStore}=useStores()
    return (
        <>

            {
                UserStore.currentUser? <>
                    欢迎你{UserStore.currentUser.attributes.username}
                </> :<>
                   <h1>请先登录</h1>
                </>

            }
        </>
    )
});
export default  Home
