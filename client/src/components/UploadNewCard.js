import React from "react";
import { Header } from "../components/Header";

export const UploadNewCard = () => {
    return (
        <>
        <Header />
            <div className="container">
                <div className="upload">
                    <div className="dropfile">
                    <h4>Drop file here</h4>
                    <h4>or</h4>
                    <input type="submit" value="Select File"></input>
                    </div>
                </div>
                <form action="">
                    <div className="cardtag">
                        <label for="cardtag">Card Tag:</label>
                        <input type="text" name="cardtag" />
                        <label for="cardtags">Card Tags:</label>
                        <input type="text" name="cardtags" />
                    </div>
                    <div className="name">
                        <label for="firstname">First Name:</label>
                        <input type="text" name="firstname" />
                        <label for="lastname">Last Name:</label>
                        <input type="text" name="lastname" />
                    </div>
                    <label for="companyname">Company Name:</label>
                    <input type="text" name="companyname" />
                    <label for="phonenumber">Phone Number:</label>
                    <input type="text" name="phonenumber" />
                    <label for="email">Email:</label>
                    <input type="email" name="email" />
                    <label for="address">Address:</label>
                    <input type="text" name="address" />
                    <input type="submit" value="Save Card" />
                </form>
            </div>
    </>
    )
};