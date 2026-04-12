// import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(
  //       "https://qdhpdjqiwibuznqaqxnf.supabase.co/rest/v1/settings",
  //       {
  //         method: "GET",
  //         headers: {
  //           apikey:
  //             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkaHBkanFpd2lidXpucWFxeG5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3ODQ2NjcsImV4cCI6MjA5MTM2MDY2N30.gfTPZaFkDoaI1LvD-bMe6b41-wswMtbqodWSk0YisVw",
  //         },
  //       },
  //     );

  //     const data = await res.json();
  //     console.log(data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">Dashboard</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Dashboard;
