import {
  Button,
  Card,
  CardContent,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

const CarAuction = () => {
  const matches: boolean = useMediaQuery("(max-width:600px)");

  const [price, setPrice] = useState(100);
  const [ammount, setAmmount] = useState(5);

  const handleMinus = () => {
    if (price === 100) return;
    setPrice((prev) => price - ammount);
  };
  
  return (
    <div className="container mx-auto mt-8">
      <Card
        sx={{
          width: matches ? "320px" : "500px",
          margin: "auto",
          borderRadius: "20px",
          px: 2,
          py: 1,
        }}
      >
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ borderBottom: "1px solid gray", p: 1 }}
          >
            <Typography variant="h6">السعر الأولي</Typography>
            <Typography variant="h6">
              <span>100</span>/مليون ليرة
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 2, p: 1 }}
          >
            <Stack alignItems="center" sx={{ p: 1 }}>
              <Typography variant="h6">
                <span>100</span>/مليون ليرة
              </Typography>
              <Typography variant="h6">السعر الحالي</Typography>
            </Stack>
            <Stack alignItems="center">
              <Typography variant="h6">
                <span>5</span>/مليون ليرة
              </Typography>
              <Typography variant="body1">قيمة المزايدة</Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{ gap: "20px", my: 2 }}
          >
            <button
              className="w-8 h-8 text-xl font-bold bg-gray-300 rounded-lg"
              onClick={() => setPrice((prev) => prev + ammount)}
            >
              +
            </button>
            <Typography variant="h6">
              <span>{price}</span>/مليون ليرة
            </Typography>
            <button
              className="w-6 h-6 text-xl font-bold bg-gray-300 rounded-lg"
              onClick={handleMinus}
            >
              -
            </button>
          </Stack>
          <Button
            variant="contained"
            sx={{ width: "100%", fontSize: "18px", fontWeight: "bold" }}
          >
            اضافة المزيد
          </Button>
        </CardContent>
      </Card>
      <div className="mt-8">
        <Typography
          variant="h6"
          sx={{
            color: "#30455e",
            mt: 2,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {" "}
          اخر المزايدين
        </Typography>
        {[1, 2, 3, 4].map((element, index) => (
          <Paper
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              px: 2,
              py: 1,
              backgroundColor: "#80808047",
              my: 2,
            }}
          >
            <div>
              <Typography variant="h6" sx={{ color: "#30455e" }}>
                Alex
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet adipisicing elit. Sapiente, veniam.
              </Typography>
            </div>
            <div>
              <img
                src="/assets/car-1.jpg"
                alt=""
                className="w-[25px] h-[25px] object-cover rounded-full"
              />
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default CarAuction;
