import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../Styles/pages/Reservation.css';

const Reservation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [diners, setDiners] = useState(1);

  const increaseDiners = () => setDiners(diners + 1);
  const decreaseDiners = () => {
    if (diners > 1) setDiners(diners - 1);
  };

  const onSubmit = (data) => {
    console.log({ ...data, diners });
  };

  return (
    <div className="reservation-page-container">
      <h1>Reserve Now</h1>
      <div className="reservation-form-container">
      <div className="reservation-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            {...register('name', { required: true })}
          />
          {errors.name && <p className="error">This field is required</p>}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...register('email', { required: true })}
          />
          {errors.email && <p className="error">This field is required</p>}
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            {...register('phone', { required: true })}
          />
          {errors.phone && <p className="error">This field is required</p>}
        </div>

        <div className="form-group">
          <input
            type="date"
            name="date"
            {...register('date', { required: true })}
          />
          {errors.date && <p className="error">This field is required</p>}
        </div>

        <div className="form-group">
          <input
            type="time"
            name="time"
            {...register('time', { required: true })}
          />
          {errors.time && <p className="error">This field is required</p>}
        </div>

        <div className="form-group">
          <label>Number of Diners:</label>
          <div className="diners-control">
            <button type="button" onClick={decreaseDiners} className="control-btn">-</button>
            <span>{diners}</span>
            <button type="button" onClick={increaseDiners} className="control-btn">+</button>
          </div>
        </div>

        <button type="submit" className="reserve-btn">Reserve Table</button>
      </form>
      </div>
      </div>
      
    </div>
  );
};

export default Reservation;