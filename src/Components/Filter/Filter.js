// import PropTypes from 'prop-types';

export default function Filter({ contacts, filter }) {
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
          onClick={this.props.deleteContact}
        >
          Delete
        </button>
      </li>
    );
  });
}

class oldFilter {
  findUsers = () => {
    const { contacts, filter } = this.props;

    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    return this.findUsers().map(el => {
      return (
        <li key={el.id}>
          {el.name}: {el.number}
          <button
            className="button"
            type="button"
            id={el.id}
            onClick={this.props.deleteContact}
          >
            Delete
          </button>
        </li>
      );
    });
  }
}

// Filter.propTypes = { state: PropTypes.object };
