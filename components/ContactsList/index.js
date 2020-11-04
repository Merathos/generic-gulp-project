import { List, ListItem, Term, Definition } from './styles';

const ContactsList = ({ data }) => {
  return (
    <List>
      {data.contacts.map((item, index) => (
        <ListItem key={index}>
          <Term>{data.contact[item].title}</Term>
          <Definition>{data.contact[item].value}</Definition>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactsList;
