import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import Clock from '../comp/comp'
// import noPropsComp from '../noPropsComp/noPropsComp'
// import * as echarts from '../../components/ec-canvas/echarts';
import './index.scss'
import './xx.scss'

import IMAGES from '../../utils/x'

import BaseComponent from '../baseComponent'

import Gh from '../../components/gh'
import Jk from './component/Jk'

import config from '../../config.json'

// import WxParse from '../../components/wxParse/wxParse'

// import { B, C } from '../../components/A'
import { AtButton } from 'taro-ui'

console.log(config)

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  const model = {
    yCates: ['Saturday', 'Friday', 'Thursday',
      'Wednesday', 'Tuesday', 'Monday',
      'Sunday'],
    xCates: ['1', '2', '3', '4', '5'],
    data: [
      // [yCateIndex, xCateIndex, value]
      [0, 0, 5], [0, 1, 7], [0, 2, 3], [0, 3, 5], [0, 4, 2],
      [1, 0, 1], [1, 1, 2], [1, 2, 4], [1, 3, 8], [1, 4, 2],
      [2, 0, 2], [2, 1, 3], [2, 2, 8], [2, 3, 6], [2, 4, 7],
      [3, 0, 3], [3, 1, 7], [3, 2, 5], [3, 3, 1], [3, 4, 6],
      [4, 0, 3], [4, 1, 2], [4, 2, 7], [4, 3, 8], [4, 4, 9],
      [5, 0, 2], [5, 1, 2], [5, 2, 3], [5, 3, 4], [5, 4, 7],
      [6, 0, 6], [6, 1, 5], [6, 2, 3], [6, 3, 1], [6, 4, 2]
    ]
  };

  const data = model.data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });

  const option = {
    tooltip: {
      position: 'top'
    },
    animation: false,
    grid: {
      bottom: 60,
      top: 10,
      left: 80
    },
    xAxis: {
      type: 'category',
      data: model.xCates
    },
    yAxis: {
      type: 'category',
      data: model.yCates
    },
    visualMap: {
      min: 1,
      max: 10,
      show: false,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: 10,
      inRange: {
        color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
      }
    },
    series: [{
      name: 'Punch Card',
      type: 'heatmap',
      data: data,
      label: {
        normal: {
          show: true
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  chart.setOption(option);
  return chart;
}

export default class Index extends BaseComponent {
  state = {
    isFinished: true,
    isFinished2: false,
    isLoggedIn: true,
    // ec: {
    //   onInit: initChart
    // },
    IMAGES,
    x: [],
    componentData: {
      background_color: 'red',
      border_radius: '1px solid #000'
    }
  }

  navigateTo () {
    Taro.navigateTo({
      url: '../test/test'
    })
  }

  config = {
    usingComponents: {
      // 'ec-canvas': '../../components/ec-canvas/ec-canvas'
    }
  }

  xxhanlder = () => {

  }

  componentDidMount () {
    // var article = '<div style="color: red">我是HTML代码</div>'
    // WxParse.wxParse('article', 'html', article, this.$scope, 5);
    console.log(this)
    this.setState({
      x: [{ name: 1, type: 'gg'}, { name: 2, type: 'dd' }]
    })
    setTimeout(() => {
      this.setState({
        x: [{ name: 1, type: 'gg'}, { name: 1, type: 'dd' }, { name: 3, type: 'kk' }]
      })
    }, 2000);
    this.say()
    this.setState({
      sd: 'sdsd'
    })
    console.log(Taro.pxTransform(10))
    this.animation = Taro.createAnimation({
      transformOrigin: '50% 50%',
      duration: 5000,
      timingFunction: 'ease',
      delay: 2000
    })
    this.animation.translateX(100).step()
    console.log(this.animation)
    this.setState({
      text: '1111',
      animationData: this.animation.export()
    })
  }

  render() {
    return (
      <View className='container' onClick={this.xxhanlder.bind(this)} style={{
        backgroundColor: this.state.componentData.background_color,
        borderRadius: this.state.componentData.border_radius
      }}>
        <Gh />
        {this.state.x.map(item => <View>{item.name}</View>)}
      </View>
    )
  }
}
