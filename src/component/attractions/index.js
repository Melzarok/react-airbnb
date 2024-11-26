import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import { Fragment } from "react";

export default function Attractions({ list }) {
  return (
    <Box shadow className="attractions">
      <Heading border>Зручності:</Heading>

      <ul className="attractions__list">
        {list.map(({ id, ...rest }) => (
          <ListItem>
            <Item {...rest} />
          </ListItem>
        ))}
      </ul>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <Fragment>
      <a href={link} className="attraction__link">
        {name}
      </a>
    </Fragment>
  );
}
