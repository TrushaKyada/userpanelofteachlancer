  import PropTypes from 'prop-types'
import SecondHeader from '../../header/SecondHeader'
import Footer from '../../footer'

const SecondSharedLayout = ({ children}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <SecondHeader/>
      <main>{children}</main>
   <Footer/>
    </div>
  )
}

SecondSharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default SecondSharedLayout
