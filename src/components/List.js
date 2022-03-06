import React,{useEffect} from "react";
import {observer} from "mobx-react";
import {useStores} from "../stores";
import { List,Spin , Divider,Skeleton,Avatar} from 'antd';
import styled from "styled-components";
import VirtualList from 'rc-virtual-list';
const Img=styled.img`
width: 100px;height:130px ;
`;
const Component =observer(()=>{
    const {HistoryStore}=useStores();
    const ContainerHeight = 900;
    const appendData = () => {//更多数据
        HistoryStore.find();
    };
    useEffect(() => {
        appendData();
    }, []);
    const onScroll = e => {

        if (e.target.scrollHeight - e.target.scrollTop === ContainerHeight) {
            appendData();

        }
    };

    return(
        <List>
            <VirtualList
                data={HistoryStore.list}
                height={ContainerHeight}
                itemHeight={47}
                itemKey="id"
                onScroll={onScroll}
            >
                {item => (
                    <List.Item key={item.id}>
                        <div>
                            <Img src={item.attributes.url.attributes.url}/>
                        </div>
                        <h5>{item.attributes.url.attributes.url}</h5>
                        <h5>{item.attributes.filename}</h5>
                    </List.Item>
                )}
            </VirtualList>
        </List>

    )

});
export default Component;
