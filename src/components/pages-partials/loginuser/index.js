import SecondSharedLayout from '../../../components/layout/shared-layout/SecondSharedLayout'
import FixPart from './FixPart'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <SecondSharedLayout title='login'>
      <div className='grid flex lg:grid-cols-2 md:grid-cols-1 sm:col-auto'>
        <div className=''>
          <FixPart />
        </div>
        <div className=''>
          <LoginForm />
        </div>
      </div>
    </SecondSharedLayout>
  )
}
export default Login
