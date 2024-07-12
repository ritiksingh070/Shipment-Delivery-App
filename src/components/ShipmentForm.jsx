// src/components/ShipmentForm.jsx
import  { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const ShipmentForm = () => {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [packageSize, setPackageSize] = useState("");
  const [address, setAddress] = useState("");

  const handleShipment = async (e) => {
    e.preventDefault();

    // Razorpay payment integration
    const options = {
      key: import.meta.REACT_APP_RAZORPAY_KEY, 
      amount: 50000, // Amount in paise (example: 50000 paise = INR 500)
      currency: "INR",
      name: "Shipment Delivery App",
      description: "Shipment initiation fee",
      handler: async (response) => {
        try {
          await addDoc(collection(db, "shipments"), {
            sender,
            receiver,
            packageSize,
            address,
            status: "Pending",
            payment_id: response.razorpay_payment_id,
            createdAt: new Date(),
          });
          alert("Shipment initiated successfully!");
        } catch (error) {
          alert(error.message);
        }
      },
      prefill: {
        name: sender,
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <form onSubmit={handleShipment}>
      <input
        type="text"
        placeholder="Sender"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
      />
      <input
        type="text"
        placeholder="Receiver"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
      />
      <input
        type="text"
        placeholder="Package Size"
        value={packageSize}
        onChange={(e) => setPackageSize(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit">Initiate Shipment</button>
    </form>
  );
};

export default ShipmentForm;
