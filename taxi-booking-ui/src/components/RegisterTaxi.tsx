import * as React from 'react';
import { TaxiFormData } from '../types/ITaxi';
import { createTaxi } from '../services/TaxiService.ts';
import { Button, Spinner, Toast, ToastContainer } from 'react-bootstrap';

export function RegisterTaxi() {
  const initialFormData: TaxiFormData = {
    ownerName: '',
    address: '',
    mobileNumber: '',
    taxiNumber: '',
    brandName: '',
  };

  const [formData, setFormData] = React.useState<TaxiFormData>(initialFormData);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setShowSuccess(false);
    setShowError(false);

    try {
      await createTaxi(formData);
      setIsLoading(false);
      setShowSuccess(true);
      setErrorMessage('');

      // Reset form data to initial state after successful submission
      setFormData(initialFormData);
    } catch (error) {
      setIsLoading(false);
      setShowError(true);
      setErrorMessage(error.message || 'An error occurred while creating the taxi record.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register a Taxi</h2>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="ownerName" className="form-label">
            Owner Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">
            Mobile Number:
          </label>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="taxiNumber" className="form-label">
            Taxi Number:
          </label>
          <input
            type="text"
            className="form-control"
            id="taxiNumber"
            name="taxiNumber"
            value={formData.taxiNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="brandName" className="form-label">
            Brand Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="brandName"
            name="brandName"
            value={formData.brandName}
            onChange={handleChange}
            required
          />
        </div>

        <Button 
          type="submit" 
          className="btn btn-primary" 
          disabled={isLoading}>
          {isLoading ? <Spinner animation="border" size="sm" /> : 'Submit'}
        </Button>
      </form>

      {/* Success and Error Toasts */}
      <ToastContainer position="top-end">
        {showSuccess && (
          <Toast bg="success" onClose={() => setShowSuccess(false)} show={showSuccess} delay={3000} autohide>
            <Toast.Body>Taxi record created successfully!</Toast.Body>
          </Toast>
        )}

        {showError && (
          <Toast bg="danger" onClose={() => setShowError(false)} show={showError} delay={3000} autohide>
            <Toast.Body>{errorMessage}</Toast.Body>
          </Toast>
        )}
      </ToastContainer>
    </div>
  );
}
