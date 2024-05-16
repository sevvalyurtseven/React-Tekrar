import { Input, InputGroup, InputGroupText } from "reactstrap";

function Search(props) {
  const { search, handleChange } = props;
  return (
    <div className="d-flex justify-content-center">
      <InputGroup className="w-25">
        <InputGroupText>@</InputGroupText>
        <Input
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
          placeholder="Search..."
        />
      </InputGroup>
    </div>
  );
}

export default Search;
