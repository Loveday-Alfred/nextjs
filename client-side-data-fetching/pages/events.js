import { useState } from "react";
import { useRouter } from "next/router";

export default function event({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=sports`
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <>
      <h1>List of Events</h1>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h1>
              {event.id} {event.title} {event.date} | {event.category}{" "}
            </h1>
            <p>{event.desc}</p>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";

  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
