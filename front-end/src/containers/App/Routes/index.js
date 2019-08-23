import React from "react"
import { Route } from "react-router-dom"
import Home from "../../../pages/Home"
import Countries from "../../../pages/Countries"
import Navbar from "../../../components/Navbar"
import Content from "../../../componentsStyled/Content"

const Routes = () => (
  <React.Fragment>
    <Navbar />
    <Content>
      <Route path="/" exact component={Home} />
      <Route path="/countries" exact component={Countries} />
    </Content>
  </React.Fragment>
)

export default Routes
