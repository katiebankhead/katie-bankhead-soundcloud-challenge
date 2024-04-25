"use client";

import { Chip, Stack, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const gender = searchParams.get("gender");
  const culture = searchParams.get("culture");
  const born = searchParams.get("born");
  const died = searchParams.get("died");

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Typography variant="h4">{name}</Typography>
        {died ? (
          <Chip label="Dead" color="error" variant="outlined" />
        ) : (
          <Chip label="Alive" color="success" variant="outlined" />
        )}
      </Stack>

      <Typography>Gender: {gender || "No gender data"}</Typography>
      <Typography>Culture: {culture || "No culture data"}</Typography>
      <Typography>Born: {born || "No birth data"}</Typography>
      <Typography>Died: {died || "No death data"}</Typography>
    </>
  );
}
