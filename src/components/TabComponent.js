import React , {Component} from 'react';

/**
 * author tanka
 * Tab 切换组件 
 * <NavComponent data = [{select:1,context="xxxx"},{select:0,context:"xxxx"} clickNav={xxx} ] >
 * clickNav 点击事件,参数为当前点击了哪一个 
 * data:    array
 * select   boolean 默认的选中状态
 * context   
 * 组件只提供功能 , 样式自由 
 */

class TabComponent extends Component{
    constructor(props){
        super(props); 
        this.clickNav = this.clickNav.bind(this);
        this.state = {
            classArray : []
        }
        this.props.data.forEach((ele , index)=>{
            ele.select ? (this.state.classArray[index]='active') : (this.state.classArray[index]='');
        });
    }
    clickNav(index){
        let ans = [];
        this.state.classArray.forEach((ele , index)=>{
            ans[index] = "";
        })
        ans[index] = "active";
        this.setState({
            classArray : ans
        })
        // 通知调用者,刚刚你点击了哪一个tab, 是时候做你自己的事儿了
        this.props.clickNav((++index));
    }

    arrayEqual(source , des){
        if(source.length !== des.length){
            return false;
        }
        for(let i=0; i<source.length;i++){
            if(source[i] !== des[i]){
                return false;
            }
        }
        return true;
    }
    shouldComponentUpdate(props , state){
        return !this.arrayEqual(this.state.classArray,state.classArray);
    }
    render(){
        let data = this.props.data;
        return(
            <div className="nav-wapper">
                {
                 data.map((ele,index)=>{return <div className={"nav-item " + this.state.classArray[index]} key={index} onClick={this.clickNav.bind(this,index)} >{ele.context}</div>})   
                }
            </div>
        )
    }
}
export default TabComponent;