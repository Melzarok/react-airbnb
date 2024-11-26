import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function AdditionalProperties({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
}) {
  console.log(host_languages);

  return (
    <Box shadow className="properties">
      <Heading border>Додаткові властивості:</Heading>

      <ul className="properties__list">
        <ListItem>
          <span className="properties__item--title">House rules</span>
          <span className="properties__item--text">{house_rules}</span>
        </ListItem>

        <ListItem>
          <span className="properties__item--title">Cancellation policy</span>
          <span className="properties__item--text">{cancellation_policy}</span>
        </ListItem>

        <ListItem>
          <span className="properties__item--title">Local transportation</span>
          <span className="properties__item--text">{local_transportation}</span>
        </ListItem>

        <ListItem>
          <span className="properties__item--title">Host languages</span>
          <span className="properties__item--text">
            {host_languages.join(", ")}
          </span>
        </ListItem>

        <ListItem>
          <span className="properties__item--title">Special offers</span>
          <span className="properties__item--text">{special_offers}</span>
        </ListItem>
      </ul>
    </Box>
  );
}
