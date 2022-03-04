import React,{useState} from "react";
import LogoUrl from './logo.svg'
import {NavLink,useNavigate} from "react-router-dom";
import styled from 'styled-components';
import  {Button} from 'antd';
import { useStores } from '../stores';
import { observer } from 'mobx-react';


const Header=styled.header`
  padding: 10px 100px;
  background-color: #02101f;
  display: flex;
  align-items: center;
  color: #fff;
  
`
const  Logo=styled.img`
  height: 30px;
`
const StyledLink=styled(NavLink)`
  color:#fff;
  margin-left: 30px;
  
  &.active{
    border-bottom: 1px solid #fff;
  }
  
`
const Login=styled.div`
    margin-left:auto;
`
const StyledButton=styled(Button)`
margin-left: 10px;
`

const  Component = observer(() => {
    let navigate = useNavigate();
    const {UserStore,AuthStore}=useStores();
    UserStore.pullUser();//重新拉取数据
    const handleLogout=()=>{
            AuthStore.logout();
    };
    const handleLogin=()=>{
        console.log('跳登录');
        navigate('/login');
    };
    const handleRegister=()=>{
        console.log('跳注册');
        navigate('/register');
    };
    return (
        <Header>
            <Logo src={LogoUrl} />
        <nav>
            <StyledLink to={'/'} activeclassname={'active'}>首页</StyledLink>
            <StyledLink to={'/history'} activeclassname={'active'}>上传记录</StyledLink>
            <StyledLink to={'/about'} activeclassname={'active'}>关于我</StyledLink>
        </nav>
            <Login>
                {
                    UserStore.currentUser? <>
                        {UserStore.currentUser.attributes.username} <StyledButton type="primary" onClick={handleLogout}>注销</StyledButton>
                    </> :<>
                        <StyledButton type="primary" onClick={handleLogin}>登录</StyledButton>
                        <StyledButton type="primary" onClick={handleRegister}>注册</StyledButton>
                    </>

                }
            </Login>
        </Header>
    );
});
export default Component
