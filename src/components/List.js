import React,{useEffect,useState } from "react";
import {observer} from "mobx-react";
import {useStores} from "../stores";
import { List,Spin , Divider,Skeleton,Avatar} from 'antd';
import styled from "styled-components";
import VirtualList from 'rc-virtual-list';
import InfiniteScroll from 'react-infinite-scroll-component';
const Img=styled.img`
width: 100px;height:130px ;
`;
const Component =observer(()=>{
    /*const {HistoryStore}=useStores();
    const appendData = () => {//更多数据
        HistoryStore.find();
    };
    useEffect(() => {
        appendData();
    }, []);
    const onScroll = e => {
        if (e.target.scrollHeight - e.target.scrollTop === ContainerHeight) {
            HistoryStore.find();
        }
    };*/

        const {HistoryStore} = useStores();
        const [loading, setLoading] = useState(false);
        const [data, setData] = useState([]);

        const loadMoreData = () => {
            if (loading) {
                return;
            }
            setLoading(true);
            HistoryStore.find();
        };

        useEffect(() => {
            loadMoreData();
        }, []);

return(

  <InfiniteScroll
      dataLength={HistoryStore.list.length}
      next={loadMoreData}
      hasMore={HistoryStore.list.length<10}
      loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
      endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
      scrollableTarget="scrollableDiv"
  >
      <List
          dataSource={HistoryStore.list}
          renderItem={item => (
              <List.Item key={item.id}>
                  <div>
                      <Img src={item.attributes.url.attributes.url}/>
                  </div>
                  <h5>{item.attributes.url.attributes.url}</h5>
                  <h5>{item.attributes.filename}</h5>
              </List.Item>
          )}
      />
  </InfiniteScroll>


)

});
export default Component;
