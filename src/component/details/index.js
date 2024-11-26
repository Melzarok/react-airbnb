import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import guest from "./guest.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bathroom from "./bathroom.svg";

export default function Details({
  countOfGuests,
  countOfbedrooms,
  countOfbeds,
  countOfbathroom,
}) {
  let guestDeclension = countOfGuests === 1 ? "гість" : "гостей";
  let bedroomDeclension = countOfbedrooms === 1 ? "спальня" : "спальні";
  let bedDeclension = countOfGuests === 1 ? "ліжко" : "ліжка";
  let bathroomDeclension =
    countOfGuests === 1 ? "ванна кімната" : "ванні кімнати";

  return (
    <Box shadow className="details">
      <Heading border>Деталі властивості:</Heading>

      <ul className="details__list">
        <ListItem imageSrc={guest}>
          <span>
            {countOfGuests} {guestDeclension}
          </span>
        </ListItem>

        <ListItem imageSrc={bedroom}>
          <span>
            {countOfbedrooms} {bedroomDeclension}
          </span>
        </ListItem>

        <ListItem imageSrc={bed}>
          <span>
            {countOfbeds} {bedDeclension}
          </span>
        </ListItem>

        <ListItem imageSrc={bathroom}>
          <span>
            {countOfbathroom} {bathroomDeclension}
          </span>
        </ListItem>
      </ul>
    </Box>
  );
}
