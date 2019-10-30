import React, { Component } from 'react'
import {Menu} from "antd"
import {withRouter} from "react-router-dom"
import {layoutRouter} from "@router";
import sliderEach from "@utils/sliderEach"

let sliderComponents = sliderEach(layoutRouter)
class SliderTabBar extends Component {
    render() {
        return (
            <Menu 
                theme="dark" 
                defaultSelectedKeys={['/home']} 
                mode="inline"
                onClick={this.handleToggle}>
                {sliderComponents}      
            </Menu>
        )
    }
    handleToggle=({key})=>{
        this.props.history.push(key)
    }
}
export default withRouter(SliderTabBar)