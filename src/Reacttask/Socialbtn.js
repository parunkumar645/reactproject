import React from "react";

export default function Socialbtn() {
  return (
    <div
      className="conainer container-fluid bg-dark d-flex flex-column align-items-center justify-content-center vh-100 text-white p-4"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-bold mb-8">Social Buttons</h1>
      <div className="d-flex gap-4">
        <button className="btn btn-warning px-4 py-2 rounded-pill">Like</button>
        <button className="btn btn-secondary px-4 py-2 rounded-pill">
          Comment
        </button>
        <button className="btn btn-primary px-4 py-2 rounded-pill">
          Share
        </button>
      </div>
    </div>
  );
}
