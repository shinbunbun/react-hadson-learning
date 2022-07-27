import React, { useState } from "react";
import { Star } from "./Star";

export default function StarRating({ style = {}, totalStars = 5, ...props}) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      <div style={{ padding: "5px", ...style }} {...props}>
        {[...Array(totalStars)].map((_, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
          />
        ))}
      </div>
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
