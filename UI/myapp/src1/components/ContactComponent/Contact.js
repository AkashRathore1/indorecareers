import React, { useState } from 'react';

function Contact() {
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:akashrathoresep10@gmail.com?subject=${encodeURIComponent(subject)}&body=From: ${encodeURIComponent(senderEmail)}%0D%0A%0D%0A${encodeURIComponent(message)}`;
  };

  return (

    <div className="login" style={{ backgroundColor: 'white' }}>
      <h1 style={{ color: 'black', fontFamily:'cursive',padding: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>Contact</h1>
      <br/>
      <div style={styles.container}>

        <form onSubmit={handleSubmit} style={styles.form}>

          <label style={styles.label}></label>

          <input
            type="email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            style={styles.input}
            placeholder="Enter Your Email"
            required
          />

          <label style={styles.label}></label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={styles.input}
            placeholder="Subject"
            required
          />

          <label style={styles.label}></label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
            placeholder="Message"
            required
          />

          <button type="submit" style={styles.button}>Send</button>
        </form>
      </div>
      <br /><br /><br /><br /><br />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    padding: '10px',
    backgroundColor: 'white'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  label: {
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '100px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'black',
    backgroundColor: '#b4eb34',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Contact;
