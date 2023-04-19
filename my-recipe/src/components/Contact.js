import React from 'react';

const Contact = () => {
  return (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: 'linear-gradient(to right,white)' 
      }}>
      <div style={{ 
          width: '50%', 
          padding: '20px', 
          border: '1px solid black', 
          borderRadius: '15px', 
          background: 'linear-gradient(to right, #f2f2f2, #c6c6c6)',
          color: '#333'
        }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          marginBottom: '30px',
          color: '#333'
        }}>Contact Us</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name" style={{color: '#333'}}>Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" style={{padding: '10px', marginBottom: '10px', width: '100%', backgroundColor: '#eee', color: '#333', border: '1px solid #999'}} />
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{color: '#333'}}>Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" style={{padding: '10px', marginBottom: '10px', width: '100%', backgroundColor: '#eee', color: '#333', border: '1px solid #999'}} />
          </div>
          <div className="form-group">
            <label htmlFor="message" style={{color: '#333'}}>Message</label>
            <textarea className="form-control" id="message" rows="3" style={{padding: '10px', marginBottom: '10px', border: '1px solid #999', borderRadius: '4px', boxSizing: 'border-box', width: '100%', backgroundColor: '#eee', color: '#333'}}></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{padding: '10px', width: '100%', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold'}}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


