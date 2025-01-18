import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <>
        <footer className="text-center text-lg-start">
            <div className="text-center p-3">
            © {year} Created by:&nbsp;
            <a className="text-dark text-white" href="https://github.com/marufmks">Maruf Khan</a>   
            </div>
        </footer>                                
    </>
  )
}

export default Footer