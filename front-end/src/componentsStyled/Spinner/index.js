import React from "react"
import "./index.css"
import { Wrapper } from "./styled"

export const Spinner = () => (
  <Wrapper>
    <div className="lds-ripple">
      <div />
    </div>
  </Wrapper>
)

export default Spinner
