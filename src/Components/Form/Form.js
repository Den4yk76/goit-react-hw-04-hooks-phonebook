import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Form({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="label">
        Name{' '}
        <input
          value={name}
          className="label"
          type="text"
          name="name"
          onChange={e => {
            setName(e.target.value);
          }}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className="label">
        Phone{' '}
        <input
          value={number}
          className="label"
          type="tel"
          name="number"
          onChange={e => {
            setNumber(e.target.value);
          }}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}

Form.propTypes = {
  addContact: PropTypes.func,
};
