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

// class Chart extends React.Component {
const Chart = props => {
  // constructor(props){
  //   super(props)
  //   this.state = {
    const datasets = {
        labels : ['January', 'February', 'March', 'April', 'May'],
    //   labels: {this.props.labels}
        datasets: [
        {
          label: 'Rainfall',
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgba(22,44,15,1)',
            'rgba(66,192,192,1)',
            'rgba(66,0,192,1)',
            'rgba(66,192,192,1)',
          ],
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 100, 80, 81, 56]
        //   data: {this.props.values}
        }
      ]}
    
  return (
    <div>
      <Pie
        data={datasets}
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





//  componentDidMount(){
//     let chartData = this.dataHolding.setData();
//        categories = Object.keys(chartData)
//        amounts = Object.values(chartData)
//        this.setState({
//         labels: categories,
//        })
    //    this.setState({
    //     datasets[data](amounts)
    //    })
//     })
//   .catch(err => console.log(err))
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
 

//  ComponentDidUpdate(){
//     fetch()
//     .then()
//     .then()
//     .catch()

//  }

//  render() {














// const Chart = () => {

//  render(
//    <div>
  
//    </div>
//  );
// }

// export default Chart;
 
