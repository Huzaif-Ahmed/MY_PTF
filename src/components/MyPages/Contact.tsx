import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faLocationDot, 
  faPaperPlane, 
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/Contact.css';

// Replace these with your actual EmailJS credentials
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const PUBLIC_KEY = 'your_public_key';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            if (!form.current) return;
            
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                form.current,
                PUBLIC_KEY
            );
            
            // Clear the form and show success message
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            // Show success toast
            toast.success('Message sent successfully! I will get back to you soon.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (error) {
            console.error('Email error:', error);
            
            // Show error toast
            toast.error('Failed to send message. Please try again or contact directly via email.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="profile-container">
            <h2 className="section-title">Contact</h2>
            
            {/* Toast notification container */}
            <ToastContainer 
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            
            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-info-header">
                        <h3>Let's Connect</h3>
                        <p className="contact-tagline">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                        </p>
                    </div>
                    
                    <div className="contact-info-details">
                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <div>
                                <h4>Location</h4>
                                <p>Hyderabad, India</p>
                            </div>
                        </div>
                        
                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p><a href="mailto:huzaif.demha@gmail.com">huzaif.demha@gmail.com</a></p>
                            </div>
                        </div>
                        
                        {/* Phone section is commented out as per your preference */}
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/Huzaif-Ahmed" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/mohammed-huzaif-ahmed-71048a255/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        {/* <a href="https://twitter.com/YourTwitterHandle" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a> */}
                    </div>
                </div>
                
                <div className="contact-form-container">
                    <motion.form 
                        ref={form}
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="form-header">
                            <h3>Send Message</h3>
                            <p>Feel free to reach out about anything!</p>
                        </div>
                        
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="subject" 
                                placeholder="Subject"
                                value={formData.subject}
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
                                rows={5}
                            ></textarea>
                        </div>
                        
                        <button 
                            type="submit" 
                            className="send-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <FontAwesomeIcon icon={faSpinner} spin /> Sending...
                                </>
                            ) : (
                                <>
                                    <FontAwesomeIcon icon={faPaperPlane} /> Send Message
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
            
            <div className="contact-footer">
                <p>Thank you for visiting my portfolio. I look forward to connecting with you!</p>
            </div>
        </div>
    );
};

export default Contact;