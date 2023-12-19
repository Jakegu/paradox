import React from "react";

export default function Banner() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: "url('/images/banner.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          height: 400,
          overflow: "auto",
        }}
      >
        <div
          className="mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: 15 }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h2 className="mb-3">List of Curiosities</h2>
              <h4 className="mb-3">Statistical Paradoxes</h4>
              <a
                className="btn btn-outline-light btn-lg"
                href="/montyHall"
                role="button"
              >
                Monty Hall Problem
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
