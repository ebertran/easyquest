import React, { Component } from 'react';
import axios from 'axios'

class UserProfile extends Component {
    constructor() {
        super()

        this.state = {
            user: "",
            quizs: []
        }
    }

    componentDidMount() {
        axios.get('https://facebook.github.io/react-native/movies.json')
            .then(({data: {quizs}}) => {
                console.log(quizs)
                this.setState({quizs})
            })
            .catch(function (err) {
                console.error(err)
            })
    }

    render() {
        return  (
        <div className="col-sm-2 profile">  
            <img className="avatar" src="../images/user5.png    " alt="#" />
            <h3 className="text-left">Username</h3>
            <h5 className="text-left">Ocupation</h5>
            <h5 className="text-left">Organization</h5>
            <h5 className="text-left">Ubication</h5>
            <br />
            <h5 className="text-left"><strong>X</strong> quizs created</h5>
            <h5 className="text-left"><strong>Y</strong> quizs answered</h5>
        </div>
            )
            
   }
}

export default UserProfile