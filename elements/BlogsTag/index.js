import { Label } from './styles';

const BlogsTag = ({ name, label, id, checked = false, onClick }) => {
  return (
    <Label>
      <input
        type="checkbox"
        id={id}
        onClick={onClick}
        checked={checked}
        name={name}
        readOnly
      />
      <span>{label}</span>
    </Label>
  );
};

export default BlogsTag;
