import React from "react";
import { HomeOutlined, UserOutlined , CustomerServiceOutlined,WindowsOutlined, EditOutlined, PhoneOutlined  } from "@ant-design/icons";


export const menuList = [{
  key:'nav-1',
  label: 'Home',
  icons: React.createElement(HomeOutlined),
  
},
{
  key:'nav-2',
  label: 'About',
  icons: React.createElement(UserOutlined),
  
},
{
  key:'nav-3',
  label: 'Services',
  icons: React.createElement(CustomerServiceOutlined),
  
},
{
  key:'nav-4',
  label: 'Work',
  icons: React.createElement(WindowsOutlined),
  
},
{
  key:'nav-5',
  label: 'Blog',
  icons: React.createElement(EditOutlined),
  
},
{
  key:'nav-6',
  label: 'Contact',
  icons: React.createElement(PhoneOutlined)
},
]