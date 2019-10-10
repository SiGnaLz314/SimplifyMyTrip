import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

export default class MyTrip extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeOrigin = this.onChangeOrigin.bind(this);
        this.onChangeDestination = this.onChangeDestination.bind(this);
        this.onChangeDate = this.onChagneDate.bind(this);
        this.onChangeDays = this.onChangeDays.bind(this);


        this.state ={
            originCity: '',
            destCity: '',
            startDate: new Date(),
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
            destinationCity: e.target.value
        });
    }
    onChangeStartDate(startDate){
        this.setState({
            startDate: startDate
        });
    }
    onChangeDays(e){
        this.setState({
            days: e.target.value
        });
    }
    onSubmit(e){
        
    }
    render() {
        return(
            <div>
                <h3>MyTrip Details</h3>
                <form onSubmit={this.onSubmit} />
                    <div>
                    <label>Origin City: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.originCity}
                        onChange={this.onChangeOrigin}
                        />
                    </div>
                    <div>
                    <label>Destination City: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.destinationCity}
                        onChange={this.onChangeDestination}
                        />
                    </div><div>
                    <label>Start Date: </label>
                        <DatePicker
                            selected={this.state.Date}
                            onChange={this.onChangeDate}
                        />
                    </div><div>
                    <label>Number Days: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.Days}
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