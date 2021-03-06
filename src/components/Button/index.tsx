import classnames from 'classnames'
import { Button, ButtonProps, Spinner } from 'reactstrap'
import styles from './styles.module.scss'

interface Props extends ButtonProps {
  loading?: boolean
}

export const CustomButton = ({ loading, ...otherProps }: Props) => {
  const { children } = otherProps

  return (
    <Button
      {...otherProps}
      className={classnames(otherProps.className, styles.coreButton)}
      disabled={loading || otherProps.disabled}
    >
      {children}
      {loading && <Spinner className={styles.spinner} size="sm" />}
    </Button>
  )
}

export default CustomButton
