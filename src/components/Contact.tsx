import React, { useState, FormEvent } from 'react';
import { PersonalInfo } from '../data/resumeData';

interface ContactProps {
  personalInfo: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Alert state
  const [alert, setAlert] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    show: false,
    message: '',
    type: 'success'
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validate email format
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setAlert({
        show: true,
        message: 'Please fill in all fields',
        type: 'error'
      });
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      setAlert({
        show: true,
        message: 'Please enter a valid email address',
        type: 'error'
      });
      return;
    }
    
    // In a real application, you would send the form data to a server here
    // For now, we'll just simulate a successful submission
    
    setAlert({
      show: true,
      message: 'Your message has been sent successfully!',
      type: 'success'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Hide alert after 3 seconds
    setTimeout(() => {
      setAlert(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark inline-block mb-4">Contact Me</h2>
          <span className="block w-20 h-1 bg-primary mx-auto"></span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <i className="fas fa-envelope text-3xl text-primary mb-4"></i>
              <h3 className="text-xl font-semibold text-dark mb-2">Email</h3>
              <p className="text-gray">{personalInfo.email}</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <i className="fas fa-phone text-3xl text-primary mb-4"></i>
              <h3 className="text-xl font-semibold text-dark mb-2">Phone</h3>
              <p className="text-gray">{personalInfo.phone}</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <i className="fas fa-map-marker-alt text-3xl text-primary mb-4"></i>
              <h3 className="text-xl font-semibold text-dark mb-2">Location</h3>
              <p className="text-gray">{personalInfo.location}</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            {alert.show && (
              <div className={`p-4 mb-6 rounded-lg font-medium ${
                alert.type === 'success' 
                  ? 'bg-green-100 text-green-600 border border-green-600' 
                  : 'bg-red-100 text-red-600 border border-red-600'
              }`}>
                {alert.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  className="w-full p-4 border border-gray-light rounded-lg focus:border-primary focus:outline-none transition-all duration-300"
                  required 
                />
              </div>
              
              <div className="mb-6">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  className="w-full p-4 border border-gray-light rounded-lg focus:border-primary focus:outline-none transition-all duration-300"
                  required 
                />
              </div>
              
              <div className="mb-6">
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  className="w-full p-4 border border-gray-light rounded-lg focus:border-primary focus:outline-none transition-all duration-300"
                  required 
                />
              </div>
              
              <div className="mb-6">
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  className="w-full p-4 border border-gray-light rounded-lg focus:border-primary focus:outline-none transition-all duration-300 h-40 resize-none"
                  required 
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn primary-btn w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;