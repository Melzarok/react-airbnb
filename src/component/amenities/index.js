import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import basin from "./basin.svg";
import sportsHall from "./sports-hall.svg";
import breakfast from "./breakfast.svg";
import wifi from "./Wi-Fi.svg";
import streetParking from "./street-parking.svg";
import pets from "./pets.svg";
import transfer from "./transfer.svg";
import conciergeService from "./concierge-service.svg";
import roomSerice from "./room-service.svg";
import children from "./children.svg";

// const declensions = {
//   guests: countOfGuests === 1 ? "гість" : "гостей";,
//   bedrooms: ,
//   beds: ,
//   bathrooms: ,
// };

export default function Details({ data }) {
  return (
    <Box shadow className="details">
      <Heading border>Зручності:</Heading>

      <ul className="details__list">
        {data.hasPool && (
          <ListItem imageSrc={basin}>
            <span>Басейн</span>
          </ListItem>
        )}

        {data.hasGym && (
          <ListItem imageSrc={sportsHall}>
            <span>Спортивний зал</span>
          </ListItem>
        )}

        {data.hasFreeBreakfast && (
          <ListItem imageSrc={breakfast}>
            <span>Безкоштовний сніданок</span>
          </ListItem>
        )}

        {data.hasFreeWiFi && (
          <ListItem imageSrc={wifi}>
            <span>Безкоштовний Wi-Fi</span>
          </ListItem>
        )}

        {data.hasParking && (
          <ListItem imageSrc={streetParking}>
            <span>Безкоштовний вуличний паркінг</span>
          </ListItem>
        )}

        {data.hasPetsAllowed && (
          <ListItem imageSrc={pets}>
            <span>Дозволено розміщення з домашніми тваринами</span>
          </ListItem>
        )}

        {data.hasAirportShuttle && (
          <ListItem imageSrc={transfer}>
            <span>Трансфер до/з аеропорту</span>
          </ListItem>
        )}

        {data.hasConciergeService && (
          <ListItem imageSrc={conciergeService}>
            <span>Консьєрж-сервіс</span>
          </ListItem>
        )}

        {data.hasRoomService && (
          <ListItem imageSrc={roomSerice}>
            <span>Обслуговування номерів</span>
          </ListItem>
        )}

        {data.hasChildFriendly && (
          <ListItem imageSrc={children}>
            <span>Підходить для дітей</span>
          </ListItem>
        )}
      </ul>
    </Box>
  );
}
