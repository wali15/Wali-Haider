import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const isStandalone = window.location.pathname === '/contact';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.message,
    };
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully! Thank you for reaching out.', {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData({
          user_name: '',
          user_email: '',
          message: ''
        });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={isStandalone ? "page-wrapper" : ""}>
      <section className="contact" id="contact">
        <div className="contact-container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                ></textarea>
              </div>
              <button type="submit" className={`submit-btn ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
                {isLoading ? (
                  <div className="button-content">
                    <span className="spinner"></span>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>

            <div className="contact-info">
              <div className="contact-info-item">
                <div className="icon-container">
                  <MdEmail className="contact-icon" />
                </div>
                <div className="contact-info-text">
                  <h3>Email</h3>
                  <p>walihaiderofficial@outlook.com</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="icon-container">
                  <MdPhone className="contact-icon" />
                </div>
                <div className="contact-info-text">
                  <h3>Phone</h3>
                  <p>+92 325 7262793</p>
                </div>
              </div>
              <div className="social-links">
                <a 
                  href="https://github.com/wali15" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link github"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/wali-haider-6497a5251/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link linkedin"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Contact;
