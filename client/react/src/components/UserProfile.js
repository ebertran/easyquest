import React, { Component } from 'react';
import axios from 'axios'

class UserProfile extends Component {
    constructor() {
        super()

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/users')
            .then(({data:{data:users}}) => {
                const [user] = users.filter(user => user.id === "5a04c5ae1d195c4e88dbfcaa")

                this.setState({user})
            })
            .catch(function (err) {
                console.error(err)
            })
    }

    render() {
        return  (
        <div className="col-sm-2 profile">  
            <img className="avatar" src="../images/user5.png    " alt="#" />
            <h3 className="text-left">Username: { this.state.user.username }</h3>
            <h5 className="text-left">Name: { this.state.user.name }</h5>
            <h5 className="text-left">Surname: { this.state.user.surname }</h5>
        </div>
            )
            
   }
}

export default UserProfile