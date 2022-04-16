import { Chart, registerables } from 'chart.js'
import { round } from 'lodash'
import { observer } from 'mobx-react'
import { Line } from 'react-chartjs-2'
import { useStores } from '../../../../../../hooks/useStores'
import { generateChartData } from './utils'
import styles from './styles.module.scss'

Chart.register(...registerables)

const MemoryChart = () => {
  const { memoryStore } = useStores()

  const chartData = generateChartData(memoryStore)

  return (
    <Line
      data={chartData}
      options={{
        elements: {
          line: {
            fill: true
          }
        },
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            ticks: {
              callback: function (value) {
                const roundedValue = round(Number(value), 2)
                return `${roundedValue * 100}%`
              }
            }
          },
          x: {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 8
            }
          }
        }
      }}
      className={styles.chart}
    />
  )
}

export default observer(MemoryChart)
