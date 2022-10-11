import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";

const Contact = ({ sendHandler, formValues, setFormValues, loading }) => {
  return (
    <Box py={3} sx={{ lineHeight: 5 }} minHeight="70vh">
      <TextField
        fullWidth
        label="Name"
        placeholder="How will you like me to address you? maybe your nickname (optional)"
        variant="outlined"
        value={formValues.name}
        onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
      />

      <TextField
        fullWidth
        sx={{ mb: 3 }}
        minRows={5}
        multiline
        label="Message Body"
        placeholder="What would you like to tell me. I'm interested... *"
        variant="outlined"
        value={formValues.body}
        onChange={(e) => setFormValues({ ...formValues, body: e.target.value })}
      />

      <TextField
        fullWidth
        label="Contact"
        placeholder="How can i reach you, either your eMail address or Whatsapp Number (optional)"
        variant="outlined"
        value={formValues.contact}
        onChange={(e) => setFormValues({ ...formValues, contact: e.target.value })}
      />

      <LoadingButton loading={loading} color="secondary" fullWidth variant="contained" onClick={sendHandler}>
        send message
      </LoadingButton>

      <p align="center">
        <a href="https://www.buymeacoffee.com/chukwu3meka" rel="noopener noreferrer" target="_blank">
          <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="100" />
        </a>
      </p>
    </Box>
  );
};

export default Contact;
