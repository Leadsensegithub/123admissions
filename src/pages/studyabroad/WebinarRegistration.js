import React, { useEffect, useState } from 'react';
import './WebinarRegistration.css';

const WebinarRegistration = () => {
  const [formData, setFormData] = useState({
    degree: '',
    name: '',
    number: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  useEffect(() => {
    // Adding Zoho SalesIQ script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'zsiqchat';
    script.innerHTML = `
      var $zoho = $zoho || {};
      $zoho.salesiq = $zoho.salesiq || {
        widgetcode: "siq8eaac17cd7de7c5512224c8e442b55d574ca087dbbeb4007e12a007874f4ad9c73854ef1cabf400880e95caa57221cfb",
        values: {},
        ready: function () {}
      };
      var d = document;
      s = d.createElement("script");
      s.type = "text/javascript";
      s.id = "zsiqscript";
      s.defer = true;
      s.src = "https://salesiq.zohopublic.com/widget";
      t = d.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(s, t);
    `;
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://gambleland.online/api/restapi/webinar.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        alert('Registration successful!');
        // Optionally, you can clear the form here
        setFormData({
          degree: '',
          name: '',
          number: '',
          email: ''
        });
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="studyabroard">
      <div className="header">
        <div>
          <img src="./assets/Logo/logoabroad.svg" alt="Logo" />
        </div>
        <div className="contact">
          <h3 style={{ fontSize: '16px' }}>
            <a href="tel:9840453188" style={{ textDecoration: 'none', color: 'inherit' }}>
              +91 9840453188
            </a>
          </h3>
        </div>
      </div>
      <div className="content">
        <div className="image">
          <img src="./assets/events-banner.jpeg" alt="Event Banner" />
          <div className="content-body">
            <div className="register-header">
              Register for the Free Webinar
            </div>
            <div className="register-body">
              <form id="registrationForm" onSubmit={handleSubmit}>
                <div className="field">
                  <div className="label">
                    <label htmlFor="degree">Degree</label>
                  </div>
                  <div className="input">
                    <select name="degree" id="degree" value={formData.degree} onChange={handleChange} required>
                      <option value="" disabled>Select</option>
                      <option value="Masters">Masters</option>
                      <option value="Bachelors">Bachelors</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <div className="label">
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="input">
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
                  </div>
                </div>
                <div className="field">
                  <div className="label">
                    <label htmlFor="number">Contact Number</label>
                  </div>
                  <div className="input">
                    <input type="number" name="number" id="number" value={formData.number} onChange={handleChange} required />
                  </div>
                </div>
                <div className="field">
                  <div className="label">
                    <label htmlFor="email">Email ID</label>
                  </div>
                  <div className="input">
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="field">
                  <button type="submit">Book Your Slot Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div style={{ padding: '10px' }}>
          <h3 style={{ color: '#1ea698', margin: 0 }}>EVENT DATE: JUNE 14, 2024(Friday)</h3>
          <h3 style={{ margin: 0 }}>MODE: Online</h3>
        </div>
        <div style={{ padding: '10px' }}>
          <h3 style={{ margin: '0px' }}>STUDY ABROAD WEBINAR | UPGRAD ABROAD </h3>
          <p>Join our enlightening webinar to enhance your career opportunities at top universities worldwide.
            Register now to explore Study Abroad programs and specialized destinations that elevate you to the
            top percentile. Discover study options in countries like the USA, Germany, and more. Secure your
            spot today—best of all, it's completely free!</p>
        </div>
        <div className="floter">
          <div>
            <img src="./assets/Logo/Logo.svg" alt="Logo" style={{ width: '80px' }} />
          </div>
          <div>
            <div className="contact">
              <h3 style={{ fontSize: '16px' }}>
                <a href="tel:9840453188" style={{ textDecoration: 'none', color: 'inherit' }}>
                  +91 9840453188
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarRegistration;
