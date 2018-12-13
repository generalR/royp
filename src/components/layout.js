import React from 'react'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
//import '../styles/flexboxgrid.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <div className="layoutComponentSomSkickasUt ">
        <Navigation />

        {children}
        <Footer />
      </div>
    )
  }
}

export default Template
