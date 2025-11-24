import { useState } from "react";
import "../styles/nearbydoctors.css";

function NearbyDoctors() {
    const [doctors] = useState([
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            specialty: "Cardiologist",
            distance: "0.8 km",
            rating: 4.9,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
        },
        {
            id: 2,
            name: "Dr. Michael Chen",
            specialty: "General Practitioner",
            distance: "1.2 km",
            rating: 4.8,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
        },
        {
            id: 3,
            name: "Dr. Emily Williams",
            specialty: "Pediatrician",
            distance: "2.5 km",
            rating: 4.7,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
        },
        {
            id: 4,
            name: "Dr. James Wilson",
            specialty: "Orthopedic Surgeon",
            distance: "3.1 km",
            rating: 4.9,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
        },
        {
            id: 5,
            name: "Dr. Lisa Brown",
            specialty: "Dermatologist",
            distance: "4.0 km",
            rating: 4.6,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa"
        },
        {
            id: 6,
            name: "Dr. David Miller",
            specialty: "Neurologist",
            distance: "5.2 km",
            rating: 4.8,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
        }
    ]);

    return (
        <div className="nearby-doctors-wrapper">
            <div className="nearby-doctors-container">
                <div className="header">
                    <h1>Nearby Doctors</h1>
                    <p>Find the best medical professionals near you</p>
                </div>

                <div className="doctors-grid">
                    {doctors.map((doctor) => (
                        <div key={doctor.id} className="doctor-card">
                            <div className="doctor-image">
                                <img src={doctor.image} alt={doctor.name} />
                            </div>
                            <div className="doctor-info">
                                <h3>{doctor.name}</h3>
                                <span className="specialty">{doctor.specialty}</span>
                                <div className="details">
                                    <span className="distance">
                                        <span className="icon">📍</span> {doctor.distance}
                                    </span>
                                    <span className="rating">
                                        <span className="icon">⭐</span> {doctor.rating}
                                    </span>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NearbyDoctors;
