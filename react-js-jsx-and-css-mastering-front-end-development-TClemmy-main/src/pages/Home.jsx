import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="page">
                <h1 className="text-2x1 font-semibold text-gray-800 mb-2">Welcome to the Home Page</h1>
                <Card
                    title="The Card"
                    description="This is the card for the project"
                    image="C:/Users/Boitumelo Dorothy/Desktop/FullStack_WebDevelopment/react-js-jsx-and-css-mastering-front-end-development-TClemmy-main/src/utility/MR_Lion.jpg"
                />
                <Button className="bg-aqua-600 text-red px-4 py-2 rounded-lg hover:bg-blue-700 transition" label="click Me" onClick={() => alert("Button clicked")}/>
            </div>
        </div>
    );
};
export default Home;