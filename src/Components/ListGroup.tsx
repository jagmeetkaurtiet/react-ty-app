import { Fragment, useState } from "react";

//props
interface ListGroupProps {
  fruits: string[];
  heading: string;
  onSelectItem: (fruit: string) => void;
}

function ListGroup({ fruits, heading, onSelectItem }: ListGroupProps) {
  //Hook - each component have their own states
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      {/* react allows only one control to return. Framents are used if we need to
      add more than one control. Use<></> or <Fragment></Fragment> */}
      <h1>{heading}</h1>
      {fruits.length === 0 ? (
        <p>No results</p>
      ) : (
        <ul className="list-group">
          {fruits.map((fruit, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={fruit}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(fruit);
              }}
            >
              {fruit}
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}
export default ListGroup;
