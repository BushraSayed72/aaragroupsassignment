import React from 'react'
import Chart from "react-apexcharts"

function PieCharts() {
 
  return (
    <React.Fragment>
      <div className='container-fluid'>
        <Chart
       
        type='pie'
        width={500}
        height={150}
        color='white'
        

        series={[10,10,80]}

        options={{ 
          
          labels:[ 'Overall Concerns', 'Open Concerns', 'Resolved Concern']

        }}
        
      
        
        
        
        
        >

        </Chart>
      </div>
    </React.Fragment>
  )
}

export default PieCharts