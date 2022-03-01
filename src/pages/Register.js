
import React,{useRef} from "react";
import {observer} from 'mobx-react';
import {useStores} from "../stores";

const Component=observer(()=>{
    const { AuthStore }=useStores();

    return (
        <>
            <h1>register: {AuthStore.values.username}</h1>

        </>
    );
});
export default Component;
