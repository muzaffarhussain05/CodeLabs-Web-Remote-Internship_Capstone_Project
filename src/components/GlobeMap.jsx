import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";

const countries = {
  PAK: { name: "Pak", lat: 30.3753, lng: 69.3451 },
  USA: { name: "US", lat: 37.0902, lng: -95.7129 },
  GBR: { name: "UK", lat: 55.3781, lng: -3.4360 }
};

export default function GlobeMap() {
  const globeRef = useRef();
  const [selected, setSelected] = useState("PAK");

  // Zoom to Pakistan on first render and disable zoom interaction
  useEffect(() => {
    if (globeRef.current) {
      // Disable zoom (mouse wheel / pinch)
      globeRef.current.controls().enableZoom = false;

      // Set initial view to Pakistan
      const { lat, lng } = countries.PAK;
      globeRef.current.pointOfView({ lat, lng, altitude: 1.3 }, 1500);
    }
  }, []);

  const flyToCountry = (code) => {
    setSelected(code);
    const { lat, lng } = countries[code];
    globeRef.current.pointOfView({ lat, lng, altitude: 1.3 }, 1500);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 ">
      {/* Buttons */}
      <div className="flex  gap-2">
        {Object.entries(countries).map(([code, data]) => (
          <button
            key={code}
            onClick={() => flyToCountry(code)}
            className={`px-2 py-1  hover:bg-neutral-200  cursor-pointer rounded-lg  ${
              selected === code
                ? "border-blue-500 text-blue-700 bg-blue-100 font-bold"
                : "bg-neutral-300 "
            }
                `}
          >
            <span className="text-[11px]  mr-1.5">{code}</span>
            {data.name}
          </button>
        ))}
      </div>

      {/* Circular Globe */}
      <div
        className="w-[600px] h-[700px]  rounded-full overflow-hidden shadow-lg bg-black flex items-center justify-center border border-gray-300"
        style={{ touchAction: "none" }}
      >
        <Globe
          ref={globeRef}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"
          width={700}
          height={700}
          className="min-w-[700px] max-h-[700px]"
        />
      </div>
    </div>
  );
}
