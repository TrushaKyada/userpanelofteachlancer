import FormSharedLayout from '../../layout/shared-layout/FormSharedLayout'
import FixPart from './FixPart'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <FormSharedLayout>
      <div className='grid flex lg:grid-cols-2 md:grid-cols-1 sm:col-auto'>
        <div className=''>
          <FixPart />
        </div>
        <div className=''>
          <LoginForm />
        </div>
      </div>
    </FormSharedLayout>
  )
}
export default Login
