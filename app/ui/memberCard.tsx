import { fetchMember } from "@/app/lib/data";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Chip,
} from "@mui/material";
import Link from "next/link";

export default async function MemberCard({ memberUrl }: { memberUrl: string }) {
  const memberId = memberUrl.split("/").pop();
  const { name, gender, culture, born, died } = await fetchMember(memberUrl);
  const MALE_PROFILE_PICTURE = "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-male-icon.png";
  const FEMALE_PROFILE_PICTURE = "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-female-icon.png";

  return (
    <>
      <Box sx={{ minWidth: 275, width: "25%", borderRadius: "16px" }}>
        <Card variant="outlined">
          <CardHeader
            avatar={
              <Avatar
                alt={name}
                src={
                  gender === "Male"
                    ? MALE_PROFILE_PICTURE
                    : FEMALE_PROFILE_PICTURE
                }
              />
            }
            title={name}
            subheader={
              died ? (
                <Chip label="Dead" color="error" variant="outlined" />
              ) : (
                <Chip label="Alive" color="success" variant="outlined" />
              )
            }
          />
          <CardActions>
            <Link
              href={{
                pathname: `/swornmembers/${memberId}`,
                query: { name, gender, culture, born, died },
              }}
              passHref
            >
              <Button variant="contained" size="small" type="button">
                More info
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
