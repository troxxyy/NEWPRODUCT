
import React, { useState } from 'react';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (!name || !description || !category || !quantity || !price) {
      setErrorMessage('please fill in all fields.');
      return; }

    console.log(`Product Details:
    Name: ${name}
    Description: ${description}
    Category: ${category}
    Quantity: ${quantity}
    Price: ${price}`);
    setSubmissionMessage('Product submitted successfully!');

    handleReset();
  };

  const handleReset = () => {
    setName('');
    setDescription('');
    setCategory('');
    setQuantity('');
    setPrice('');
    setSubmissionMessage('');
    setErrorMessage('');
  };

  return (
    <div className="product-form-container">
      <h2>New Product</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-field">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Quantity:</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" onClick={handleReset} className="cancel-btn">Cancel</button>
        </div>
      </form>
      {submissionMessage && <div className="submission-message">{submissionMessage}</div>}
      <style jsx>{`
        .product-form-container {
          max-width: 500px;
          margin: 20px auto;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          background-color: #fff;
        }
        .product-form h2 {
          text-align: center;
          color: #333;
        }
        .error-message {
          color: red;
          margin-bottom: 15px;
        }
        .form-field {
          margin-bottom: 15px;
        }
        .form-field label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }
        .form-field input,
        .form-field textarea {
          width: 100%;
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #ddd;
          box-sizing: border-box;
        }
        .form-field textarea {
          resize: vertical;
        }
        .form-actions {
          text-align: right;
        }
        .submit-btn,
        .cancel-btn {
          padding: 10px 15px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-left: 10px;
        }
        .submit-btn {
          background-color: #5cb85c;
          color: white;
        }
        .cancel-btn {
          background-color: #f0ad4e;
          color: white;
        }
        .submit-btn:hover,
        .cancel-btn:hover {
          opacity: 0.9;
        }
        .submission-message {
          margin-top: 15px;
          padding: 10px;
          background-color: #dff0d8;
          color: #3c763d;
          border: 1px solid #d6e9c6;
          border-radius: 4px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default ProductForm;
