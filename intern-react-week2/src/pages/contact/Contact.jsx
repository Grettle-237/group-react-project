import React from "react";
import "./contact.css"
function Contact(){
    return(
        <body>
            
        
        <div className="contact-card">
            <h1>Contact Us</h1>
            <form onsubmit="event.preventDefault(); alert('Message sent!');">
                <div className="form-group">
                    <input type="text" required placeholder="Name" />
                </div>

                  <div className="form-group">
                    <input type="email" required placeholder="Email" />
                </div>

                  <div className="form-group">
                    <textarea rows="4" required placeholder="Your message..." ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>


            </form>
        </div>
      
   </body>

    


    


   
    )
}

export default Contact;