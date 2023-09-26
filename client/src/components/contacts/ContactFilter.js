import React, { useContext, useEffect, useRef } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const { filterContacts, clearFilter, filtered } = useContext(ContactContext);
  const text = useRef("");
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  const onChange = (e) => {
    // console.log(e.target.value);
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <div>
      <form>
        <input
          ref={text}
          type="text"
          placeholder="Filtered Contacts..."
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default ContactFilter;
