import { useState } from "react";
import { useSnackbar } from "notistack";

import { Contact } from ".";

const ContactContainer = () => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const [formValues, setFormValues] = useState({ name: "", body: "", contact: "" });

  const sendHandler = async () => {
    const { name, body, contact } = formValues;

    // check if message body is empty
    if (!body) {
      enqueueSnackbar("Message body cannot be empty", { variant: "warning" });
      setLoading(false);
      return;
    }
    setLoading(true);
    const apiRes = await fetch("/api/contactDeveloper", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ name, body, contact }),
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .catch((err) => false);
    setLoading(false);

    if (apiRes) {
      enqueueSnackbar("Message received, You'll hear from me shortly", { variant: "success" });
      setFormValues({ name: "", body: "", contact: "" });
    } else {
      enqueueSnackbar("Failed to send mail, Kindly Try again", { variant: "error" });
    }
  };

  return <Contact sendHandler={sendHandler} formValues={formValues} setFormValues={setFormValues} loading={loading} />;
};

export default ContactContainer;
