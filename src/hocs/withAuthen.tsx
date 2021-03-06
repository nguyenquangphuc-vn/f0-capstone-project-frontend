import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStores } from '../hooks/useStores'
import AuthenticatedLayout from '../layouts/AuthenticatedLayout'
import routes from '../routes'

const withAuthen = (Component: any) => (props: any) => {
  const { authStore, doAuthStore, cloudServiceStore } = useStores()
  const navigate = useNavigate()

  function handleCurrentUserNotFound(): void {
    navigate(routes.login.value)
  }

  function handleCloudServiceAccountNotFound(): void {
    navigate(routes.cloudServiceLogin.value)
  }

  async function getMyUser(): Promise<void> {
    try {
      const myUser = await authStore.getMyUser()
      if (!myUser) {
        handleCurrentUserNotFound()
      }
    } catch (error) {
      handleCurrentUserNotFound()
    }
  }

  async function getMyCloudServiceAccount(): Promise<void> {
    try {
      const doAccount = await doAuthStore.getDOAccount()
      if (!doAccount) {
        handleCloudServiceAccountNotFound()
      }
    } catch (error) {
      handleCloudServiceAccountNotFound()
    }
  }

  async function getCurrentDroplet() {
    await cloudServiceStore.fetchCurrentDroplet()
  }

  useEffect(() => {
    getMyUser()
    getMyCloudServiceAccount()
    getCurrentDroplet()
  }, [])
  return (
    <>
      <AuthenticatedLayout>
        <Component {...props} />
      </AuthenticatedLayout>
    </>
  )
}

export default withAuthen
