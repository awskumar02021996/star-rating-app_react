import React from "react";

const StarRating = ({ currentRating, onStarClick }) => {
    return (
        <div style={{ display: "inline-block" }}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => onStarClick(star)}
                    style={{
                        fontSize: "24px",
                        cursor: "pointer",
                        color: star <= currentRating ? "gold" : "gray",
                        marginRight: "5px",
                    }}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;