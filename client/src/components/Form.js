import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  // Destructuring the methods provided by react-hook-form
  const { register, handleSubmit } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data); // Logging the form data when submitted
  };

  return (
    <div className='form max-w-sm mx-auto w-96'>
      {/* Form title */}
      <h1 className='font-bold pb-4 text-xl'>Transaction</h1>

      {/* Form */}
      <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid gap-4'>
          {/* Input field for transaction name */}
          <div className='input-group'>
            <input
              type='text'
              {...register('name')} // Registering 'name' field with react-hook-form
              placeholder='Salary, Rent, Groceries'
              className='form-input w-56' // Styling the input field
            />
          </div>

          {/* Dropdown for transaction type */}
          <select className='form-input' {...register('type')}>
            <option value="Investment" defaultValue>Investment</option>
            <option value="Expense">Expense</option>
            <option value="Cash">Cash</option>
          </select>

          {/* Input field for transaction amount */}
          <div className='input-group'>
            <input
              type='text'
              {...register('amount')} // Registering 'amount' field with react-hook-form
              placeholder='Amount'
              className='form-input w-56' // Styling the input field
            />
          </div>

          {/* Submit button */}
          <div className='submit-btn'>
            <button className='border py-2 text-white bg-indigo-500 w-full'>Add Transaction</button>
          </div>
        </div>
      </form>
    </div>
  );
}
