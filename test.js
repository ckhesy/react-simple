import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
class Counter extends  Component{
	render(){
		return{
			const {value,onIncreaseClick}=this.props
			<div>
			<span>{value}</span>
			<button onclick={onIncreaseClick}>Increase</button>
			</div>
		}
	}
}

//action
const increaseAction={type;:'increase'}

//redcer
function counter(state = {
	count: 0
}, action) {
	const count = state.count;
	switch (action.type) {
		case 'increase':
			return {
				count: count + 1
			}
		default:
			return state;
	}
}

//store,
//就是工作中把reducer里面的方法放到root.js中
const store=createStore(counter)

//page
function mapStateToProps(){
	return {
		value:state.count
	}
}

function mapDispatchToProps(dispatch){
	return {
		onIncreaseClick:()=> dispatch(increaseAction)
	}
}
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

store 是应用的状态管理中心，保存着是应用的状态（state），当收到状态的更新时，会触发视觉组件进行更新。
container 是视觉组件的容器，负责把传入的状态变量渲染成视觉组件，在浏览器显示出来。
reducer 是动作(action)的处理中心， 负责处理各种动作并产生新的状态（state），返回给store。
// 我理解为 dispatch 就是发布，他接受一个 object 发送给 reducer 
// 你发布的object 由 action 决定
// 所以action 是 return 一个 特定的 object
// 你在里面 请求等异步操作 是使用了一个中间件实现的 thunk
// 但最终的你的action 还是返回一个 object
// object 最终给到 reducer ，
// 一般根据 type 区分 改变 reducer 也就是store
// 一般看到的就是一个switch （action.type）
// 当然你也可以换成 if else 也可以不用type 区分
// 因为react 是数据驱动，所以 view 就会相应变化

// 另外一个dispatch 可以触发多个 reducer 改变

// 比如你一个 click 事件，“我要获取帖子列表”dispatch（去服务器拿）

// action 一个纯函数，
// 服务器给我数据，拿到之后
// return 一个｛type：拿到数据了，data：[...]｝

// 然后reducer A 拿到数据了，好！把store.post.push（action.data）

// reducer B 我也关心这个信息store.hasnewpost = true
