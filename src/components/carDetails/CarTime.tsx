import React from "react";
import { Paper, Stack, Typography } from "@mui/material/";

const CarTime = () => {
  return (
    <div className="mt-8 flex justify-center items-center">
      <Paper
        sx={{
          width: "80%",
          backgroundColor: "#30455e",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          flexWrap: "wrap",
          px: 4,
          py: 2,
          borderRadius: "20px",
          color: "#fff",
          boxShadow: "0px 0px 10px #00000029",
        }}
      >
        <Stack direction="row" justifyContent="space-between" spacing={3} sx={{gap: "20px"}}>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            00 يوم
          </Typography>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            01 ساعة
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" spacing={3} sx={{gap: "20px"}}  >
          <Typography variant="h6" sx={{ color: "#fff" }}>
            23 دقيقة
          </Typography>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            09 ثانية
          </Typography>
        </Stack>
      </Paper>
    </div>
  );
};

export default CarTime;
