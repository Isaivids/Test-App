import { useState } from "react";
import emailjs from "emailjs-com";
import './Contact.css'
import {FaLinkedin, FaWhatsapp, FaInstagram} from 'react-icons/fa'

function Contact() {
  const initialValues = { username: "", email: "" , desc: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
      emailjs.sendForm('service_vg3512t', 'template_zxryvtr', e.target,  'd3O38lCYfhfkrt6nG')
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });
  };

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if(!values.desc){
      errors.desc = "Enter something"
    } else if(values.desc.length < 10){
      errors.desc = "Must be greater than 10"
    }
    return errors;
  };

  return (
    <div className="contact">
      <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <h4> E-Mail</h4>
          <div className="usrname">
            <label>Username</label>
            <input type="text" name="username" placeholder="Enter your Name" value={formValues.username} onChange={handleChange} />
            <p>{formErrors.username}</p>
          </div>
          <div className="email">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" value={formValues.email} onChange={handleChange} />
            <p>{formErrors.email}</p>
          </div>
          <div className="desc">
            <label>Description</label>
            <textarea rows="3" type="text" name="desc" placeholder="Type here..." value={formValues.desc} onChange={handleChange} />
            <p>{formErrors.desc}</p>
          </div>
          <div className="submit">
            <button value="sending">Send</button>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
            <span>Email sent to Author</span>
      ) : ""}
          </div>
      </form>
      </div>
      <div className="right-contact">
          <div className="dev-detail">
            <div className="dev-span">
              <span>Feel free to react out to me for any queries</span>
            </div>
            <div className="dev-icons">
              <span><FaLinkedin /></span>
              <span><FaWhatsapp /></span>
              <span><FaInstagram /></span>

            </div>
            <div className="dev-span2">
              <span>Built with ReactJs, HTML & CSS</span>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Contact;


// const handleSubmit = (e)=>{
//   e.preventDefault();
//   emailjs.sendForm('service_vg3512t', 'template_zxryvtr', e.target,  'd3O38lCYfhfkrt6nG')
//   .then(function(response) {
//      console.log('SUCCESS!', response.status, response.text);
//   }, function(error) {
//      console.log('FAILED...', error);
//   });
// }