// src/pages/TrackShipment.jsx
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import './TrackShipment.css';

const TrackShipment = () => {
  const [trackingId, setTrackingId] = useState("");
  const [shipments, setShipments] = useState([]);

  const handleTrack = async (e) => {
    e.preventDefault();
    const q = query(collection(db, "shipments"), where("trackingId", "==", trackingId));
    const querySnapshot = await getDocs(q);
    const shipmentsList = querySnapshot.docs.map(doc => doc.data());
    setShipments(shipmentsList);
  };

  return (
    <div className="container">
      <h1>Track Shipment</h1>
      <form onSubmit={handleTrack}>
        <input
          type="text"
          placeholder="Enter Tracking ID"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
        />
        <button type="submit">Track</button>
      </form>
      <div>
        {shipments.length > 0 ? (
          shipments.map((shipment, index) => (
            <div key={index} className="shipment-details">
              <h2>Shipment Details</h2>
              <p>Sender: {shipment.sender}</p>
              <p>Receiver: {shipment.receiver}</p>
              <p>Package Size: {shipment.packageSize}</p>
              <p>Address: {shipment.address}</p>
              <p>Status: {shipment.status}</p>
            </div>
          ))
        ) : (
          <p>No shipment found with the provided Tracking ID.</p>
        )}
      </div>
    </div>
  );
};

export default TrackShipment;
