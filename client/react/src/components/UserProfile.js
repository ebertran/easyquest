import React, { Component } from 'react';

class App extends React.Component {
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
        return  
            <div class="col-sm-2 profile">  
                <img class="avatar" src="../images/user5.png    " alt="#" />
                <h3 class="text-left">Username</h3>
                <h5 class="text-left">Ocupation</h5>
                <h5 class="text-left">Organization</h5>
                <h5 class="text-left">Ubication</h5>
                <br />
                <h5 class="text-left"><strong>X</strong> quizs created</h5>
                <h5 class="text-left"><strong>Y</strong> quizs answered</h5>
            </div>
   }
}

export default UserProfile