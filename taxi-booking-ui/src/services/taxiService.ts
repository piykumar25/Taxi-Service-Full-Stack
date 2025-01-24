import { API_URL } from '../config.tsx';
import { TaxiFormData } from '../types/ITaxi.ts';

/**
 * Creates a new taxi record in the backend.
 *
 * @param formData - The taxi form data to be sent to the API.
 * @returns A promise that resolves with the created taxi record, or rejects with an error.
 */
export async function createTaxi(formData: TaxiFormData): Promise<TaxiFormData> {
  try {
    const response = await fetch(`${API_URL}/create/taxi`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating taxi record:', error);
    throw error;
  }
}
