import { Box, Stack, Typography } from "@mui/material";
import MemberCard from "./memberCard";
import { House } from "../lib/definitions";

export default async function HouseCard({ house }: {house: House}) {
  const swornMembers = house.swornMembers;

  return (
    <Box pb={4}>
      <Typography variant="h4" gutterBottom>{house.name}</Typography>
      {swornMembers.length > 0 ? (
        <>
          <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
            {swornMembers.map((member: string, idx: number) => {
              return <MemberCard memberUrl={member} key={idx} />;
            })}
          </Stack>
        </>
      ) : (
        <Typography>This house has no sworn members.</Typography>
      )}
    </Box>
  );
}
