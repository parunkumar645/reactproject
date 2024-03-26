import React from "react";

export default function Cskrcb() {
  return (
    <div className="container-fluid bg-dark d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="text-white fw-bold mb-4">Super Over League</h1>
        <div className="row">
          <div className="col">
            <div className="bg-danger p-4">
              <img
                alt="Royal Challengers"
                className="w-100"
                src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className="col">
            <div className="bg-warning p-4">
              <img
                alt="Chennai Super Kings"
                className="w-100"
                src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
