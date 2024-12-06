import React, { useState, useEffect } from "react";
import StarRating from "./components/StarRating";
import StarDisplay from "./components/StarDisplay";

const App = () => {
    const [ratings, setRatings] = useState([
        { id: 1, rating: 1 },
        { id: 2, rating: 0 },
        { id: 3, rating: 2 },
        { id: 4, rating: 3 },
        { id: 5, rating: 5 },
    ]);
    const [averageRating, setAverageRating] = useState(0);

    // Calculate average rating
    useEffect(() => {
        const totalRatings = ratings.reduce((acc, item) => acc + item.rating, 0);
        const avgRating = ratings.length > 0 ? totalRatings / ratings.length : 0;
        setAverageRating(avgRating.toFixed(2));
    }, [ratings]);

    // Add or Update Rating
    const updateRating = (id, star) => {
        const updatedRatings = ratings.map((item) =>
            item.id === id ? { ...item, rating: star } : item
        );
        setRatings(updatedRatings);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Star Rating App</h1>
            <h2>
                Overall Average Rating: <StarDisplay rating={averageRating} /> {averageRating}
            </h2>
            <div>
                <h3>Rate Items Below:</h3>
                {ratings.map((item) => (
                    <div key={item.id} style={{ margin: "10px 0" }}>
                        <strong>Item {item.id}:</strong>
                        <StarRating
                            currentRating={item.rating}
                            onStarClick={(star) => updateRating(item.id, star)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;