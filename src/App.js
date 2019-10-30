import React,{Component} from 'react';
import {Switch,Redirect} from "react-router-dom"
import routerEach from "@utils/routerEach"
import LayoutWrapper from "@layout"
import {layoutRouter} from "@router";
import authRouter from "@common/authRouter"
let routerEachComponent=routerEach(layoutRouter)
class App extends Component {
  render(){
    return (
      <Switch>
      <LayoutWrapper>
        <Redirect from="/" to="/home" exact/>
        {routerEachComponent}
      </LayoutWrapper>
      </Switch>
    )
  }
}

export default authRouter(App);
