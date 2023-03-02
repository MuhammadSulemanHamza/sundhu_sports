import React from 'react'

const ContectUs = () => {
  return (

    
    <div className='container border'
    style={{marginTop:"50px",
    width:'50%',
    // The following line was causing problem
    // backgroundImage:url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fsports-background&psig=AOvVaw3E2KDjVrapI6LQINZ8mkUb&ust=1677786087482000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOj2yf6-u_0CFQAAAAAdAAAAABAE ',)   
    }}
    
    >
        <h1>Contact Us</h1>
        <form>
            <label>Name</label>
            <input type="text"name="Your Name (requred)"/>

            <label>Email</label>
            <input type="text"Email="Your Email (requred)"/>

            <label>NMessage</label>
            <textarea name= 'Your Message' rows='4'/>
            <input type='submit'value="send"/>
        </form>
    </div>


  )
}

// this line was missing 
export default ContectUs