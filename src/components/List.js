import React,{useEffect} from "react";
import {observer} from "mobx-react";
import {useStores} from "../stores";
import { List,Spin , Divider,Skeleton,Avatar} from 'antd';
import styled from "styled-components";
const Img=styled.img`
width: 100px;height:130px ;
`;
const Component =()=>{
    const {HistoryStore}=useStores();
    const loadMore = () => {
        HistoryStore.find();
    };
    HistoryStore.getList();
    const data=HistoryStore.list;
    useEffect(()=>{
        console.log('进入组件');
        return()=>{
            console.log('卸载');
        }
    },[])
    return(
        <div>
           {/* <InfiniteScroll
                initialLoad={true}
                pageStart={0}
                loadMore={loadMore}
                hasMore={!HistoryStore.isLoading&&HistoryStore.hasMore}
                useWindow={true}
                dataLength={10}
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            >*/}
           {/* {item.attributes.filename}*/}
            <List
                dataSource={data}
                renderItem={item => (
                    <List.Item>


                        <div>
                            <Img src={item.attributes.url.attributes.url}/>
                        </div>
                        <h5>{item.attributes.url.attributes.url}</h5>
                        <h5>{item.attributes.filename}</h5>

                    </List.Item>

                )}
            />
            {/*</InfiniteScroll>*/}
        </div>
    )

};
export default Component;
