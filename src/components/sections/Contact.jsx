import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Toast from '../shared/Toast';
import '../../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, type: '', message: '' });

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
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setToast({
          show: true,
          type: 'success',
          message: 'Message sent successfully! Thank you for reaching out.'
        });
        setFormData({
          user_name: '',
          user_email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setToast({
        show: true,
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      {toast.show && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
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
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? <span className="loading-spinner"></span> : 'Send Message'}
            </button>
          </form>

          <div className="contact-info">
            <div className="contact-info-item">
              <i className="email-icon">✉</i>
              <div className="contact-info-text">
                <h3>Email</h3>
                <p>walihaiderofficial@outlook.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <i className="phone-icon">📱</i>
              <div className="contact-info-text">
                <h3>Phone</h3>
                <p>+92 346 7002245</p>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                GH
              </a>
              <a href="https://linkedin.com/in/wali-haider4699" target="_blank" rel="noopener noreferrer" className="social-link">
                IN
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
