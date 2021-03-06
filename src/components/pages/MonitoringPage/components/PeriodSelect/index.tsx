import ReactSelect from 'react-select'
import { getOptionItem } from '../../../../../utils/select'
import { PERIOD_OPTIONS } from './constants'
import styles from './styles.module.scss'

interface IPeriodSelectProps {
  currentPeriod: string
  isLoading: boolean
  onChange: (value: string) => void
}

function PeriodSelect(props: IPeriodSelectProps) {
  const { currentPeriod, isLoading, onChange } = props
  const currentOption = getOptionItem(currentPeriod, PERIOD_OPTIONS)

  return (
    <div className={styles.container}>
      <ReactSelect
        isLoading={isLoading}
        options={PERIOD_OPTIONS}
        value={currentOption}
        onChange={(newOption) => {
          if (newOption?.value) {
            onChange(newOption?.value)
          }
        }}
      />
    </div>
  )
}

export default PeriodSelect
