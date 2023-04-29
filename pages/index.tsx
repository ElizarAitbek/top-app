import { Rating } from "@components/Rating/Rating";
import React, { useState } from "react";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
