import * as React from 'react';
import { TaxiFormData } from '../types/ITaxi';
import { createTaxi } from '../services/TaxiService.ts';


export function RegisterTaxi() {
  const [formData, setFormData] = React.useState<TaxiFormData>({
    ownerName: '',
    address: '',
    mobileNumber: '',
    taxiNumber: '',
    brandName: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createTaxi(formData)
    .then((createdTaxiRecord) => {
      alert('Taxi record created successfully: ' + JSON.stringify(createdTaxiRecord));
    })
    .catch((error) => {
      alert('Error creating taxi record:' + error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Owner Name:
          <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Mobile Number:
          <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Taxi Number:
          <input type="text" name="taxiNumber" value={formData.taxiNumber} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Brand Name:
          <input type="text" name="brandName" value={formData.brandName} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

