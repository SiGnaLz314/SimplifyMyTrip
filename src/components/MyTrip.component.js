import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class MyTrip extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeOrigin = this.onChangeOrigin.bind(this);
        this.onChangeDestination = this.onChangeDestination.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDays = this.onChangeDays.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state ={
            originCity: '',
            destCity: '',
            departureDate: new Date(),
            days: ''

        }
    }

    onChangeOrigin(e){
        this.setState({
            originCity: e.target.value
        });
    }
    onChangeDestination(e){
        this.setState({
            destCity: e.target.value
        });
    }
    onChangeDate(departureDate){
        this.setState({
            departureDate: departureDate
        });
    }
    onChangeDays(e){
        this.setState({
            days: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        // console.log(this.state.originCity);

        let amadeusURL = 'https://test.api.amadeus.com/v1/shopping/flight-offers?origin=' 
                + this.state.originCity 
                + '&destination=' + this.state.destCity 
                + '&departureDate=' + 2019-10-10
        
        axios.get(amadeusURL,
            {headers: {
                "Authorization" : "Bearer 7Fi6X1vNef0ouT3JvrQmqAT78RWi"
            }})
            .then(res => console.log(res.data))
        
        //window.location = '/';
    }
    render() {
        return(
            <div>
                <h3>MyTrip Details</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Origin City: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.originCity}
                        onChange={this.onChangeOrigin}
                        />
                    </div>
                    <div className="form-group">
                    <label>Destination City: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.destCity}
                        onChange={this.onChangeDestination}
                        />
                    </div>
                    <div className="form-group">
                    <label>Start Date: </label>
                        <DatePicker
                            selected={this.state.departureDate}
                            onChange={this.onChangeDate}
                        />
                    </div>
                    <div className="form-group">
                    <label>Number Days: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.days}
                        onChange={this.onChangeDays}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit My Trip Details" className="btn btn-primary" />
                    </div>
                </form>
            </div>
            )
    }
}