import React, { useEffect } from 'react';

class User extends React.Component{
    constructor(props){
        super(props)

        // this.state = {
        //     count:0,
        //     count2: 1
        // }

        this.state = {
            userInfo:{
                name:"user_name",
                location:"user_location"
            }
        }

    }
    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/abhay333d")
        const json = await data.json();
        console.log(json)
        
        this.setState({
            userInfo: json
        })
    }
    
    render(){         
        // console.log("Render child class")
        const { name, location, avatar_url} =  this.state.userInfo
        return(
            <div>
                <img width="155vw" src={avatar_url}></img>
                <h1>Name: {name}</h1>
                {/* <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count + 2 
                    })
                }}></button> */}
                {/* <p>count: {this.state.count}</p>
                <p>count2: {this.state.count2}</p> */}
                <h2>Location: {location}</h2>
                <h2>insta: @abhay333d</h2>
            </div>
        );
    };
};

export default User;