import  { Component } from 'react'
import {handleChange} from "../utils"


export class NameForm extends Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            value: ""
        }
    }

    render(){
        return(
            <input type="text" name="name" id="name" onChange={handleChange.bind(this)} />
        )
    }
}