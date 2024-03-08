"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Demo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mr-44 ml-24">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The pizza I had at Galaxy Pizza Shop was one of the most delicious pizzas I've ever tasted. The dough was cooked to perfection, and the ingredients were fresh and flavorful. I will definitely be back.",
    name: "Wolfgang Puck",
    title: "A Taste of Legend at Galaxy Pizza",
  },
  {
    quote:
      "I ordered a pizza from Galaxy Pizza Shop and it blew me away. The pizza was exactly how it should be: delicious, filling, and cooked to perfection. I highly recommend it.",
    name: "Gordon Ramsay",
    title: "Galaxy Pizza: The New Address for Perfection",
  },
  {
    quote:
      "I found a family-friendly atmosphere at Galaxy Pizza Shop that I could take my kids to. The pizzas were delicious and the kids loved them too. The prices were also very reasonable.",
    name: "Jamie Oliver",
    title: "Family Fun: Galaxy Pizza Shop",
  },
  {
    quote:
      "I was very impressed with the freshness and quality of the ingredients used in the pizzas at Galaxy Pizza Shop. The pizzas were delicious and I will definitely be ordering again.",
    name: "Martha Stewart",
    title: "Freshness and Quality Meet at Galaxy Pizza",
  },
  {
    quote:
      "I had the chance to try different flavors of pizza at Galaxy Pizza Shop. They were all delicious and I had a hard time choosing my favorite. I will definitely be back.",
    name: "Nigella Lawson",
    title: "A Delicious Destination: Galaxy Pizza Shop",
  },
];
