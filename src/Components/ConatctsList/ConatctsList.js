// import PropTypes from 'prop-types';
import ContactsListItem from './ContactsListItem';
import Filter from '../Filter/Filter';

export default function ContactsList({
  filter,
  contacts,
  findContact,
  deleteContact,
}) {
  const onChange = e => {
    findContact(e.currentTarget.value);
  };

  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="name"
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <ul>
        {!filter ? (
          <ContactsListItem contacts={contacts} deleteContact={deleteContact} />
        ) : (
          <Filter
            filter={filter}
            contacts={contacts}
            deleteContact={deleteContact}
          />
        )}
      </ul>
    </>
  );
}

// ContactsList.propTypes = {
//   state: PropTypes.object,
//   findContact: PropTypes.func,
//   deleteContact: PropTypes.func,
// };
