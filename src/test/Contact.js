import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

function Contact() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    desc: "",
  });
  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    desc: "",
  });
  const [isSubmit, setIsSubmit] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(formValues);
    setFormErrors(validateResult);
    if (!formErrors.username && !formErrors.desc && !formErrors.email) {
      emailjs
        .sendForm(
          "service_vg3512t",
          "template_zxryvtr",
          e.target,
          "d3O38lCYfhfkrt6nG"
        )
        .then(
          function (_response) {
            setIsSubmit("Message sent successfully");
          },
          function (_error) {
            setIsSubmit("Message failed to send. Please try after sometime");
          }
        );
    }
  };

  const validate = (values) => {
    const errors = { username: "", email: "", desc: "" };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.desc) {
      errors.desc = "Enter your thoughts";
    } else if (values.desc.length < 10) {
      errors.desc = "comments length must be greater than 10";
    }
    return errors;
  };

  return (
    // <div classNameName="contact">
    //   <div classNameName="contact-form">
    //     <form onSubmit={handleSubmit}>
    //       <h4> E-Mail</h4>
    //       <div classNameName="usrname">
    //         <label>Username</label>
    //         <input
    //           type="text"
    //           name="username"
    //           placeholder="Enter your Name"
    //           value={formValues.username}
    //           onChange={handleChange}
    //         />
    //         <p>{formErrors.username}</p>
    //       </div>
    //       <div classNameName="email">
    //         <label>Email</label>
    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="Enter your email"
    //           value={formValues.email}
    //           onChange={handleChange}
    //         />
    //         <p>{formErrors.email}</p>
    //       </div>
    //       <div classNameName="desc">
    //         <label>Description</label>
    //         <textarea
    //           rows="3"
    //           type="text"
    //           name="desc"
    //           placeholder="Type here..."
    //           value={formValues.desc}
    //           onChange={handleChange}
    //         />
    //         <p>{formErrors.desc}</p>
    //       </div>
    //       <div classNameName="submit">
    //         <button value="sending">Send</button>
    //         {Object.keys(formErrors).length === 0 && isSubmit ? (
    //           <span>Email sent to Author</span>
    //         ) : (
    //           ""
    //         )}
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className="connect">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Feel free to reach me</p>
        <div className="input-container">
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            value={formValues.username}
            onChange={handleChange}
          />
          {formErrors.username && <pre>{formErrors.username}</pre>}
        </div>
        <div className="input-container">
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email && <pre>{formErrors.email}</pre>}
        </div>
        <div className="input-container">
          <textarea
            type="text"
            placeholder="Enter your short message"
            name="desc"
            rows={3}
            value={formValues.desc}
            onChange={handleChange}
          />
          {formErrors.desc && <pre>{formErrors.desc}</pre>}
        </div>
        <button className="submit">Share</button>
        {isSubmit && <small>{isSubmit}</small>}
      </form>
    </div>
  );
}

export default Contact;
