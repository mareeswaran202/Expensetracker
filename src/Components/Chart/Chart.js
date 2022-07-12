import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'
function Chart(props) {
    const datapointvalues = props.datapoint.map(datapts => datapts.value);
    const totalvalue = Math.max(...datapointvalues);
    return (
        <div className="chart">
            {props.datapoint.map((datapoint) => 
            <ChartBar 
            key={datapoint.label} 
            value={datapoint.value}
            maxvalue={totalvalue} 
            label={datapoint.label}/>)}
        </div>
    )
}

export default Chart
