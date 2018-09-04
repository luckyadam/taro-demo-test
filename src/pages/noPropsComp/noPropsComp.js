import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class NoPropsComp extends Component {
  static defaultProps = {
    unusedProp: 'ok',
    usedProp: 'will be null',
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <View>
        {this.props.usedProp}
      </View>
    )
  }
}
