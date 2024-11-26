import "./index.css";
import Heading from "../heading";
import { Fragment } from "react";
import Box from "../box";

export default function Reviews({ list }) {
  return (
    <div className="review__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="review__list">
        {list.map(({ id, ...rest }) => (
          <Fragment>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="review">
      <div className="review__heading">
        <span className="review__heading-title">{guestName}</span>
        <span className="review__heading-text">Rating: {rating}</span>
      </div>
      <div className="review__description">{review}</div>
    </Box>
  );
}
