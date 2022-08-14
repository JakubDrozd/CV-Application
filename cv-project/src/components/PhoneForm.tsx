import React, { Component} from 'react'
import {handleChange} from "../utils"

export class PhoneForm extends Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            value: ""
        }
    }
    render() {
        return (
            <input type="tel" name="phone" id="phone" onChange={handleChange.bind(this)}/>
        )
    }
}