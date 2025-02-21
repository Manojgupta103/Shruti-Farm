"use client"

import { useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Icon } from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet-defaulticon-compatibility"

const farmLocations = [
  { name: "Main Farmhouse", position: [51.505, -0.09], description: "Our cozy main farmhouse with stunning views." },
  { name: "Barn", position: [51.51, -0.1], description: "Visit our historic barn, home to various farm animals." },
  { name: "Orchard", position: [51.5, -0.08], description: "Explore our lush orchard with a variety of fruit trees." },
  { name: "Lake", position: [51.508, -0.11], description: "Enjoy fishing or a peaceful picnic by our serene lake." },
]

const customIcon = new Icon({
  iconUrl: "/images/farm-marker.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

const InteractiveMap = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null)

  return (
    <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {farmLocations.map((location) => (
          <Marker
            key={location.name}
            position={location.position}
            icon={customIcon}
            eventHandlers={{
              click: () => setActiveLocation(location.name),
            }}
          >
            <Popup>
              <div>
                <h3 className="font-bold mb-2">{location.name}</h3>
                <p>{location.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="mt-4">
        <h3 className="font-playfair text-xl font-bold mb-2">Farm Locations</h3>
        <ul className="space-y-2">
          {farmLocations.map((location) => (
            <li
              key={location.name}
              className={`cursor-pointer p-2 rounded ${
                activeLocation === location.name ? "bg-green-100" : "hover:bg-green-50"
              }`}
              onClick={() => setActiveLocation(location.name)}
            >
              {location.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default InteractiveMap

