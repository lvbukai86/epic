import React from "react";
import {observable} from "mobx";
import {useStores} from "../stores";

const Component=observable(()=>{
    const {AuthSore}=useStores();
    return (
        <>
            <h1>login:{AuthSore.values.username}</h1>
        </>
    );
})


export default Component;
