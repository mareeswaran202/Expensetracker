import React from 'react'
import './ChartBar.css'
function ChartBar(props) {
    let chartBarHeight = '0%';
    if(props.maxvalue > 0){
        chartBarHeight = Math.round((props.value / props.maxvalue) * 100) + '%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
              <div className="chart-bar__fill" style={{height:chartBarHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.value}</div>
        </div>
    )
}

export default ChartBar
