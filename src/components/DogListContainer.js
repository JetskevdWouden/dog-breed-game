import React, { Component } from "react";
import DogList from './DogList'
import * as request from 'superagent'


export default class DogListContainer extends Component {


    render(){
        console.log("hello")
        return (
            <div>
                <DogList />
            </div>
        )
    }
}