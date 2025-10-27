import React from "react";
//the css

const card = ({title, description, image}) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="card">
                {image && <img src={image} alt={title} className='card-img' />}
                <h3 className="text-2x1 font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
            </div>
        </div>
    );
};
export default Card;