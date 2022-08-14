import { Component } from "react";
import { handleChange } from "../utils";


export class EmailForm extends Component<any, any> {
    constructor(props:any){
        super(props)
        this.state = {
            value: ""
        }
    }

    render(){
        return (
            <input type="email" name="phone" id="phone" onChange={handleChange.bind(this)}/>
        )
    }
}