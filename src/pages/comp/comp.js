/**
 * Create by geekeryoung on 2018/7/29
 *
 * 底部菜单
 */

import PropTypes from "prop-types";
import Taro, {Component} from '@tarojs/taro';
import {View, Text} from '@tarojs/components';
import Btn from '../btn/btn'

import "./menu.less";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  handler1 () {
    console.log('sdsd')
  }

  componentDidMount() {
    this.handler1()
    const query = Taro.createSelectorQuery().in(this.$scope)
    query.select('.df').boundingClientRect(res => {
      console.log(res)
    }).exec()

    console.log(Taro.request)
    this.timerID = setInterval(
      () => {
        this.tick()

      },
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <View onClick={this.handler1}>
        <View className='df'>Hello, world!</View>
        <Btn />
        <Text>现在的时间是 {this.state.date.toLocaleTimeString()}.</Text>
      </View>
      )
  }
}
