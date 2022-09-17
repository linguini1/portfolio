import React from "react";
import { capitalize } from "../../../utils/strformat";

export default function CVContact({ contact }) {
  const addr = contact.address;

  return (
    <section id="cv-contact">
      <h2>Contact</h2>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
      <p>{`${addr.street}, ${capitalize(
        addr.city
      )}, ${addr.province.toUpperCase()}`}</p>
      <p>{addr.postal_code.toUpperCase()}</p>
      <a href={contact.github}>{contact.github}</a>
      <br />
      <a href={contact.linkedin}>{contact.linkedin}</a>
    </section>
  );
}
