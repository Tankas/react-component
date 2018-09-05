import React, { Component } from 'react';
import TabComponent from './components/TabComponent.js';
import logo from './logo.svg';
import './App.css';

/**
 * 远程搜索组件 
 * tab切换组件 complete-- 
 * 日期组件 
 * 上传组件 
 * 分页组件 
 * dialog对话框组件
 */
class App extends Component {
  constructor(props){
    super(props);
    this.clickNav = this.clickNav.bind(this);
  }
  clickNav(argu){
    console.log('你刚刚点击了第'+argu+'个');
  }
  render() {
    let data = [
      {
        select : 1,
        context : "左边"
      },
      {
        select : 0,
        context : "右边"
      }
    ]
    return (
      <div className="App">
        <TabComponent data={data} clickNav={this.clickNav}></TabComponent>
      </div>
    );
  }
}

export default App;
