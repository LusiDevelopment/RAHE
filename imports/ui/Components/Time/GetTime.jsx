import React, {Component, Fragment} from 'react'

import Typography from '@material-ui/core/Typography';

export default class TimeContainer extends Component {
  constructor() {
    super()
    let d = new Date()
      this.state = {
        day: d.getDay(),
        month: d.getMonth(),
        date: d.getDate(),
        year: d.getFullYear(),
        time: d.toLocaleTimeString()
      }
    this.countingSecond = this.countingSecond.bind(this)
  }
  countingSecond() {
    let d = new Date()
    this.setState({
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      year: d.getFullYear(),
      time: d.toLocaleTimeString()
    })
  }
  componentWillMount() {
    setInterval(this.countingSecond, 1000)
  }
  render() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return (
      <Fragment >
        <Typography variant="body2"    align="center" >
            {days[this.state.day]}, 
            {months[this.state.month]} 
            {this.state.date}, 
            {this.state.year} 
            {this.state.time}
        </Typography>
      </Fragment>
    )
  }
}

