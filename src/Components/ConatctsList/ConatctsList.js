import { Component } from 'react';
import PropTypes from 'prop-types';
import ContactsListItem from './ContactsListItem';
import Filter from '../Filter/Filter';

export default class ContactsList extends Component {
  onChange = e => {
    console.log('onChange');
    this.props.findContact(e.currentTarget.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="name"
          onChange={this.onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <ul>
          {!filter ? (
            <ContactsListItem
              contacts={this.props.contacts}
              deleteContact={this.props.deleteContact}
            />
          ) : (
            <Filter
              filter={this.props.filter}
              contacts={this.props.contacts}
              deleteContact={this.props.deleteContact}
            />
          )}
        </ul>
      </>
    );
  }
}

ContactsList.propTypes = {
  state: PropTypes.object,
  findContact: PropTypes.func,
  deleteContact: PropTypes.func,
};
