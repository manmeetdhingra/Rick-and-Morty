import React from 'react'
import './Footer.css'
import Modal from 'react-modal'
import { useContext } from 'react'

function Footer() {


  const {darkMode, setDarkMode} = useContext(ThemeContext)


    //create state to control Modal
    const [isOpen, setIsOpen] = React.useState(false);
          //styling for Modal
    
     const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          // marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          zIndex:'3'
        },
        overlay:{
          backgroundColor:"rgba(0, 0, 0, 0.6)"
        }
      };
      
  return (
    <div className={darkMode? "footer-container footer-dark" :'footer-container'}>
        <button className='contact-btn' onClick={()=> setIsOpen(true)}>Contact Us</button>

        <Modal
          isOpen={isOpen}   
          onRequestClose={()=>setIsOpen(false)}
          style={customStyles}
          contentLabel="Contact Us Modal"
      >
        <div className="modal-header">
        <h2>Contact Us</h2>
        <button className="modal-close-btn"
                onClick={()=>setIsOpen(false)}>X
        </button>
      </div>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4"></textarea>
          <button type="submit">Send</button>
        </form>
      </Modal>    
    </div>
  )
}
import './Footer.css'
import ThemeContextProvider, { ThemeContext } from '../../context/ThemeContext'

export default Footer
