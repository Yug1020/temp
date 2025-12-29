import {Component} from 'react'
import User from "./UserClass.js"

class About extends Component{
    constructor(props){
        super(props)
        // console.log("constructor parent class")
    }
    componentDidMount(){
        // console.log("parent did mount")
    }
    render(){
        return(
        <div>
            <h1>About a hagesh developer</h1>
            <User name={"The King In North"}></User>
            {/* {console.log("render parent class")} */}
        </div>
    )
    }
}

export default About;