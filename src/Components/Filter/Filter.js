// import PropTypes from 'prop-types';

export default function Filter({ contacts, filter, deleteContact }) {
  const findUsers = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return findUsers().map(el => {
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

// Filter.propTypes = { state: PropTypes.object };
