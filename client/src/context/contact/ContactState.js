import React, { useReducer } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [],
    current: null,
    filtered: null,
  };

  // Get state and dispatch from reducer by using useReduer hook
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    // contact.id = uuid.v4();
    contact.id = uuid(); //will also work
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = (id) => dispatch({ type: DELETE_CONTACT, payload: id });

  // Set Current Contact
  const setCurrent = (contact) =>
    dispatch({ type: SET_CURRENT, payload: contact });

  // Clear Current Contact
  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT, payload: null });

  // Update Contact
  const updateContact = (contact) =>
    dispatch({ type: UPDATE_CONTACT, payload: contact });

  // Filter Contacts
  const filterContacts = (filterText) =>
    dispatch({ type: FILTER_CONTACTS, payload: filterText });

  // Clear Filter
  const clearFilter = () => dispatch({ type: CLEAR_FILTER, payload: null });

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
