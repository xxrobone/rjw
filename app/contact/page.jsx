
/* import React, { useState, useRef } from 'react' */
import Image from 'next/image';
/* import { useRouter } from 'next/navigation'; */
/* import emailjs from '@emailjs/browser'; */
/* import {motion} from 'framer-motion' */
import { FcCheckmark } from 'react-icons/fc'
/* import Modal from '../components/modal/Modal'; */
import IMG from '/public/images/robIcon.png'
import { socials } from '@/assets/data/pageData'
import LinkCard from '../components/linkcard/LinkCard'

// styles
import styles from './contact.module.scss'

/* const ModalContent = () => {
  return (
    <div className={styles.contactPageModal}>
      <h2>Thanks for your email!</h2>
      <p>I&apos;ll get back to you as soon as possible :D</p>
      <Image src={IMG} alt="" style={{
        position: 'absolute',
        left: '0',
        top: '0',
        opacity: '0.5',
        zIndex: '-1',
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        objectPosition: 'center'
      }}
        priority
      />
    </div>
  );
}; */

export default async function Contact() {
 /*   const [modalOpen, setModalOpen] = useState(false);
   const router = useRouter()
 
   const close = () => {
     setModalOpen(false);
     router.push('/')
   }
   const open = () => setModalOpen(true);
   const form = useRef();   
 
     const handleSubmit = (e) => {
       e.preventDefault()
       
       if (!form.current.checkValidity()) {
         console.log('not valid')
       } else {
         console.log('valid')
         emailjs.sendForm(process.env.NEXT_PUBLIC_SENDER_ID, process.env.NEXT_PUBLIC_TEMP_ID, form.current, process.env.NEXT_PUBLIC_KEY)
       .then((result) => {
         console.log(result.text);
         form.current.reset();
       }, (error) => {
           console.log(error.text);
       });
       }           
         
   }   
   const handleModal = () => {
     if (!form.current.checkValidity()) {
       setModalOpen(false)
       console.log('not valid')
     } else {
       console.log('valid')
       modalOpen ? close() : open() 
       
     }
   }
 */
  return (
    <div className={styles.contact}>
    <main className={styles.main}>
      <h2>Contact</h2>
      
      <h4>Connect with me thru my socials</h4>
      <div className={styles.links}>
            {socials.map(({ title, href}) => (
              <LinkCard key={href} title={title} href={href} />             
      ))}
        
        </div>
        
        <h2>Or send and email</h2>
        <h4>robertwagar@gmail.com</h4>
          
     {/*  <h2
        initial={{x: -300, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 0.4, delay: 0.4, ease: 'easeOut'}}
      >Bookings</h2>
      <h2
      initial={{x: -300, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 0.4, delay: 0.6, ease: 'easeOut'}}
      >&</h2>
      <h2
      initial={{x: -300, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 0.4, delay: 0.8, ease: 'easeOut'}}
      >Contact</h2>
      <form className={styles.contact_form} ref={form} onSubmit={handleSubmit}
       initial={{opacity: 0}}
       animate={{opacity: 1}}
       transition={{duration: 0.6, delay: 1, ease: 'easeOut'}}
      >
        <label >Name</label>
        <div className={styles.input_field}>
          <input
            type="text"
            name="name"
            required
            minLength={3}
            maxLength={15} />
          <span className={styles.check_icon}><FcCheckmark /></span>
        </div>
        <label >Email</label>
        <div className={styles.input_field}>
          <input
            type="email"
            name="email" 
            required />
          <span className={styles.check_icon}><FcCheckmark /></span>
        </div>
        <label >Subject</label>
        <div className={styles.input_field}>
          <input type="text" name="subject"
            minLength={5}
            maxLength={30}
            required />
          <span className={styles.check_icon}><FcCheckmark /></span>
        </div>
        <label >Message</label>
        <div className={styles.input_field}>
          <textarea type="textarea" name="message"
            minLength={20}
            maxLength={200}
            required />
          <span className={styles.check_icon}><FcCheckmark /></span>
        </div>
        <input className={styles.submit_btn} type="submit" name="submit" value="Submit"
        onClick={(e) => handleModal(e)}
        />
      </form>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          content={<ModalContent />}
        ></Modal>
        )}  */}    
      </main>
      </div>
  )
}
