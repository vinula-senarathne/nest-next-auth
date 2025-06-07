import { getProfile } from "@/lib/actions";
import React from "react";

const ProfilePage = async () => {
  const result = await getProfile();
  return (
    <div>
      <p>{JSON.stringify(result)}</p>
    </div>
  );
};

export default ProfilePage;
