import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EachEvent() {
  const params = useParams();
  const [event, setEvent] = useState({});
  useEffect(() => {
    fetch(`/api/v1/events/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvent(data);
      });
  }, [params.id]);
  const eachEvent = (
    <div>
      <p>{event.name}</p>
      <p>{event.artists}</p>
    </div>
  );
  return (
    <div>
      EachEvent
      {eachEvent}
    </div>
  );
}

export default EachEvent;