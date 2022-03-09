import React from 'react';
import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

class Chart extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      labels: [],
      datasets: [
        {
          label: 'Rainfall',
          backgroundColor: [
              'rgba(75,192,0,1)',
              'rgba(55,192,192,1)',
              'rgba(100,192,192,1)',
              'rgba(75,192,192,1)',
              'rgba(66,192,192,1)',
              'rgba(66,0,192,1)',
              'rgba(66,192,192,1)'
          ],
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 100, 80, 81, 56]
        }
      ]
    }
 }

 componentDidMount(){
    let chartData = this.dataHolding.setData();
       categories = Object.keys(chartData)
       amounts = Object.values(chartData)
       this.setState({
        labels: categories,
       })
       this.setState({
        datasets[data](amounts)
       })
    })
  .catch(err => console.log(err))
 //  this.setState({
 //   labels: ['January', 'February', 'March',
 //          'April', 'May'],
 //   datasets: [
 //     {
 //       label: 'Rainfall',
 //       backgroundColor: 'rgba(0,0,192,1)',
 //       borderColor: 'rgba(0,0,0,1)',
 //       borderWidth: 2,
 //       data: [65, 100, 80, 81, 56]
 //     }
 //   ]
 // })
 }

 ComponentDidUpdate(){
    fetch()
    .then()
    .then()
    .catch()

 }

 render() {
  return (
    <div>
      <Pie
        data={this.state}
        options={{
          title:{
            display:true,
            text:'Average Rainfall per month',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </div>
  );
} 
 
}
  export default Chart;



// import {
//  Chart as ChartJS,
//  CategoryScale,
//  LinearScale,
//  PointElement,
//  LineElement,
//  Title,
//  Tooltip,
//  Legend,
//  } from 'chart.js';
 
//  ChartJS.register(
//  CategoryScale,
//  LinearScale,
//  PointElement,
//  LineElement,
//  Title,
//  Tooltip,
//  Legend
//  );




















// const Chart = () => {

//  render(
//    <div>
  
//    </div>
//  );
// }

// export default Chart;
 
