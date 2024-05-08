import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count:0,
        };

    }


    componentDidMount(){
        console.log("component did mount");
    }
   

    render()
    {

        const {name, location} = this.props;
        const {count} = this.state;

        return (
            <div className="user-card">
                <h2>Count: {count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1, 
                    })
                }}>Click</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
            </div>
        )
    }
}

export default UserClass;