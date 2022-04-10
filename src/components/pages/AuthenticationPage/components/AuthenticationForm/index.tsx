import { useState } from 'react'
import { Card, CardBody, CardGroup, CardImg, CardTitle } from 'reactstrap'
import AWSAuthenticationForm from '../AWSAuthenticationForm'
import DOAuthenticationForm from '../DigitalOceanAuthenticationForm'
import GCAuthenticationForm from '../GoogleCloudAuthenticationForm'
import { ECloudService } from './constants'
import { CloudServices } from './data'
import styles from './styles.module.scss'

function AuthenticationForm() {
  const [currentCloudService, setCurrentCloudService] = useState<ECloudService>(ECloudService.DIGITAL_OCEAN)
  function onClickServiceCard(cloudService: ECloudService): void {
    setCurrentCloudService(cloudService)
  }
  return (
    <div>
      <CardGroup className={styles.cloud}>
        {Array.isArray(CloudServices) &&
          CloudServices.map((cloudItem, index) => {
            const { imageSrc, name } = cloudItem
            return (
              <Card onClick={() => onClickServiceCard(name)} key={index} className={styles.cloudForm}>
                <CardImg alt={name} src={imageSrc} width="100%" />
                <CardBody>
                  <CardTitle className={styles.label} tag="h5">
                    {name}
                  </CardTitle>
                </CardBody>
              </Card>
            )
          })}
      </CardGroup>
      {currentCloudService === ECloudService.DIGITAL_OCEAN && <DOAuthenticationForm /> }
      {currentCloudService === ECloudService.AWS && <AWSAuthenticationForm />}
      {currentCloudService === ECloudService.GOOGLE_CLOUD && <GCAuthenticationForm />}
    </div>
  )
}

export default AuthenticationForm