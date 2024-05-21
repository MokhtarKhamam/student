import { Stack, Typography } from "@mui/material";
import React from "react";

const CarDescription = () => {
  return (
    <div className="mt-8 container mx-auto border-b border-gray-400 pb-4">
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: "100%" }}
      >
        <Typography variant="h6">#1 مزاد</Typography>
        <Typography variant="h6">لكزس فل كامل 2019</Typography>
      </Stack>

      <Stack>
        <Typography variant="body1" sx={{mt:2}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore
          sint et obcaecati quod officiis harum quis rem atque, nihil
          dignissimos reprehenderit quasi, blanditiis nemo vel quo voluptatem,
          fugiat dicta!
        </Typography>
      </Stack>
    </div>
  );
};

export default CarDescription;
