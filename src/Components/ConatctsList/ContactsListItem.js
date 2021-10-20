// import PropTypes from 'prop-types';

export default function ContactsListItem({ contacts, deleteContact }) {
  return contacts.map(el => {
    return (
      <li key={el.id}>
        {el.name}: {el.number}
        <button
          className="button"
          type="button"
          id={el.id}
          onClick={deleteContact}
        >
          Delete
        </button>
      </li>
    );
  });
}

// ContactsListItem.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.object),
// };
