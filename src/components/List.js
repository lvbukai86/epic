import React,{useEffect,useState } from "react";
import {observer} from "mobx-react";
import {useStores} from "../stores";
import { List,Spin , Divider,Skeleton,Avatar} from 'antd';
import styled from "styled-components";
import InfiniteScroll from 'react-infinite-scroll-component';
const Img=styled.img`
width: 100px;height:130px ;
`;
const Component =observer(()=>{
        const {HistoryStore} = useStores();
        const [loading, setLoading] = useState(false);
        const [data, setData] = useState([]);
        const loadMoreData = () => {
            setLoading(true);
            HistoryStore.find();
        };

        useEffect(() => {
            loadMoreData();
        }, []);

return(
    <div
        id="scrollableDiv"
        style={{
            height: 400,
            overflow: 'auto',
            padding: '0 16px',
            border: '1px solid rgba(140, 140, 140, 0.35)',
        }}
    >
  <InfiniteScroll
      dataLength={HistoryStore.list.length}
      next={loadMoreData}
      hasMore={HistoryStore.hasMore}
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
    </div>
)

});
export default Component;
