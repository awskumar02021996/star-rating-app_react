import React from "react";

const StarDisplay = ({ rating }) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0; // 1 half star if decimal >= 0.5
    const emptyStars = 5 - fullStars - halfStar; // Remaining empty stars

    return (
        <span>
            {Array(fullStars)
                .fill()
                .map((_, i) => (
                    <span key={`full-${i}`} style={{ color: "gold", fontSize: "24px" }}>
                        ★
                    </span>
                ))}
            {halfStar === 1 && (
                <span style={{ color: "gold", fontSize: "24px" }}>☆</span>
            )}
            {Array(emptyStars)
                .fill()
                .map((_, i) => (
                    <span key={`empty-${i}`} style={{ color: "gray", fontSize: "24px" }}>
                        ★
                    </span>
                ))}
        </span>
    );
};

export default StarDisplay;