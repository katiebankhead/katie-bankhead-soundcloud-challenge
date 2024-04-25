import { Typography } from "@mui/material";
import { fetchHouses } from "./lib/data";
import HouseCard from "./ui/houseCard";
import { House } from "./lib/definitions";

export default async function Page() {
  const houses: House[] = await fetchHouses();

  return (
    <>
      <Typography variant="h2" gutterBottom>
        Ice and Fire
      </Typography>
      {houses.map((house: House, idx: number) => {
        return <HouseCard house={house} key={idx} />;
      })}
    </>
  );
}
