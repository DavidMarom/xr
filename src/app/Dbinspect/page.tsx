"use client";
import { getEvents, clearEvents } from "@/services/events";

export default function Home() {
  // getEvents().then((response) => { console.log(response.data) })

  return (
    <div className="page-container">
      <h2>DB Inspection</h2>
      <p>(This page is not an actual part of the client UI)</p>
      <p>Open the console to see a GET request from the DB</p>

      <br />
      <button onClick={() => {
        getEvents().then((response) => {
          console.log('DB contents:');
          console.log('============');
          console.log(response.data);

        })
      }}>Plot the database to the console</button>
      <br />
      <br />
      <button onClick={() => {
        clearEvents().then((response) => {
          console.log(response.data)
          alert('Database cleared')
        })
      }}>Clear the database</button>



    </div >
  );
}
