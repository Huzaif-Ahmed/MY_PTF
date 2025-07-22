// make a cotact page 
import { motion } from 'framer-motion';





const Contact = () => {
    // const x={ register:"", formState: { errors:null } } 
    // const [isSubmitting, setIsSubmitting] = useState(false);
    
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -50
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 0.5,
                ease: 'easeInOut'
            }}
            className="contact-container"
        >
           
        </motion.div>
    );
};

export default Contact;
