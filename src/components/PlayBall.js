import Taro, { Component } from '@tarojs/taro'

import { View } from '@tarojs/components'
import sys from '../utils/getSystemInfo'

const height = sys.windowWidth * 0.2
const numInfoStyle = {
    width: '100%',
    height: height + 'px',
    backgroundColor: '#fff'
}
const speedInfoStyle = {
    width: '100%',
    height: height + 'px',
    display: 'flex'
}
const itemStyle = {
    flex: 1,
    textAlign: 'center'
}

export default class PlayBall extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            time: 0,
            latitude: '',
            longitude: '',
            speed: 0
        }
        this.timer = null
    }
    componentWillMount () {}
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({time: this.state.time + 1})
        }, 1000)
    }
    componentWillUnmount () {
        clearInterval(this.timer)
        this.timer = null
    }
    componentDidShow () { }
    transTime(time) {
        let h = '00',m = '00', s = '00'
        h = time < 3600 ? '00' : (parseInt(time/3600) < 10 ? ('0' + parseInt(time/3600)) : parseInt(time/3600))
        m = time%3600 < 60 ? '00' : (parseInt(time%3600/60) < 10 ? ('0' + parseInt(time%3600/60)) : parseInt(time%3600/60))
        s = time%60 < 10 ? ('0' + time%60) : time%60
        return h + ':' + m + ':' + s
    }
    render () {
        return (
            <View>
                <View style={numInfoStyle}>
                    <View style={speedInfoStyle}>
                        <View style={itemStyle}>
                            <View style={{fontSize:'28px',fontWeight:'bold',color: '#333'}}>{this.state.speed}</View>
                            <View style={{fontSize:'12px',color: '#999'}}>心率</View>
                        </View>
                        <View style={itemStyle}>
                            <View style={{fontSize:'26px',fontWeight:'bold',color: '#333'}}>{this.state.speed}</View>
                            <View style={{fontSize:'12px',color: '#999'}}>步数</View>
                        </View>
                        <View style={itemStyle}>
                            <View style={{fontSize:'28px',fontWeight:'bold',color: '#333'}}>{this.transTime(this.state.time)}</View>
                            <View style={{fontSize:'12px',color: '#999'}}>时间</View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}