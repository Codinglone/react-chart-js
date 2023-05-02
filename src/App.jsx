import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'

function App() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )

   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      }
    }
  }

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'teal',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000})),
        backgroundColor: 'red'
      }
    ]
  }

  return (
    <>
      <div style={{width: "45vw"}}>
      <Bar options={options} data={data} />
      </div>
    </>
  );
}


export default App;
