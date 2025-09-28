import React from 'react'

const BlurCircle = ({
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto"
}) => {
  return (
    <div
      className="absolute -z-50 aspect-square rounded-full bg-primary/30 blur-3xl"
      style={{ top, left, right, bottom, height: "230px", width: "230px" }} // ✅ replaced h-58/w-58 (invalid Tailwind)
    >
    </div>
  )
}

export default BlurCircle
