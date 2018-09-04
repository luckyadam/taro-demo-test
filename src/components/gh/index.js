import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { B } from '../A'
import './gh.scss'

import { AtButton } from 'taro-ui'

export default class Gh extends Component {
  static defaultProps = {
    unusedProp: 'ok',
    usedProp: 'will be null',
  }

  componentDidMount() {
    this.props.onF()
    console.log(this.props)
  }

  render() {
    return (
      <View>
        gh
        <B />
        <AtButton />
        {this.props.usedProp}
      </View>
    )
  }
}
