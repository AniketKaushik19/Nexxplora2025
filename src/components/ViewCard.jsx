import { useParams } from "react-router-dom";
import Card2 from "./Card2";
import { eventdetail } from "./Eventdetail";
import Carddata from "./CardData";

const ViewCard = () => {
  const { id } = useParams();

  const basicInfo = Carddata.find(val => val.key == id);
  const extraDetails = eventdetail[id];
  return (
    <>
      {basicInfo && extraDetails ? (
        <Card2
          key={basicInfo.key}
          name={extraDetails.name}
          room_number={extraDetails.room_number}
          hosted_by={extraDetails.hosted_by}
          about={extraDetails.about}
          mobile_number={extraDetails.mobile_number}
          rounds={extraDetails.rounds}
        />
      ) : (
        <p>No card found for ID: {id}</p>
      )}
    </>
  );
};

export default ViewCard;