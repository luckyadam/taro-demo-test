import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class B extends Component {
  static defaultProps = {
    unusedProp: 'ok',
    usedProp: 'will be null',
  }

  static df () {
    console.log('df')
  }

  componentDidMount () {
    console.log(this.props)
  }

  render() {
    return (
      <View className='B'>
        B
        {this.props.usedProp}
      </View>
    )
  }
}
