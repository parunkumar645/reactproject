import React from "react";
export default function Design() {
  return (
    <div className=" container bg-danger text-center">
      <div className="card bg-info" style={{ width: "450px" }}>
        <div className="d-flex" justify-content="center">
          <h1>Welcome</h1>
          <img
            src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="car"
            style={{
              height: "200px",
              width: "250px",
            }}
          ></img>
          <h3>Car</h3>
        </div>
      </div>
    </div>
  );
}
