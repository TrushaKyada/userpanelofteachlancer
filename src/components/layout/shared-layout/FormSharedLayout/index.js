import PropTypes from 'prop-types'
import Head from 'next/head'
import Footer from '../../footer'
import FormHeader from '../../header/FormHeader'

const FormSharedLayout = ({ children, title, className = '' }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>TEACHLANCER™ | {title}</title>
      </Head>
            <FormHeader/>
      <main className={className}>{children}</main>
   <Footer/>
    </div>
  )
}

FormSharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default FormSharedLayout
