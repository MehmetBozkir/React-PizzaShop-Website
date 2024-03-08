"use client";
import React from "react";
import useStore from "../store";
import Link from "next/link";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Demo } from "@/components/Demo";
import { BackgroundBeams } from "../../components/ui/background-beams";

function Page() {
  const { inc, dec, count, fishies, fetch } = useStore((state) => state);

  const [searchh, setSearchh] = useState("");

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="bg-neutral-950">
      <BackgroundBeams />
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-lg border border-neutral-500 focus:ring-2 focus:ring-teal-500 relative z-10 mt-12  bg-neutral-300 placeholder:text-neutral-700 "
          onChange={(e) => setSearchh(e.target.value)}
        />
        <div className="text-2xl mt-12 ml-2 text-white">
          <IoSearch />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 ml-96 mr-96 mt-24">
        {fishies
          .filter((item) => {
            return searchh.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(searchh);
          })
          .map((item) => (
            <div key={uuidv4()}>
              <Card sx={{ width: 320, boxShadow: "lg" }}>
                <CardOverflow>
                  <AspectRatio sx={{ minWidth: 200 }}>
                    <img
                      className="duration-300 ease-in-out hover:scale-125"
                      src={item.imageUrl}
                      loading="lazy"
                      alt="Pizza Photo"
                    />
                  </AspectRatio>
                </CardOverflow>
                <CardContent>
                  <Typography level="body-xs"> {item.category}</Typography>
                  <Link
                    href="#product-card"
                    fontWeight="md"
                    color="neutral"
                    textColor="text.primary"
                    overlay
                  >
                    {item.title}
                  </Link>

                  <Typography
                    level="title-lg"
                    sx={{ mt: 1, fontWeight: "xl" }}
                    endDecorator={
                      <Chip
                        component="span"
                        size="sm"
                        variant="soft"
                        color="success"
                      ></Chip>
                    }
                  >
                    {item.price} $
                  </Typography>
                </CardContent>
                <CardOverflow>
                  <Button variant="solid" color="success" size="lg">
                    Add to cart
                  </Button>
                </CardOverflow>
              </Card>
            </div>
          ))}
      </div>

      <Demo />
    </div>
  );
}

export default Page;
