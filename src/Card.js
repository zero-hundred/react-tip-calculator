import { Component } from "react";
import Bill from "./Bill";
import Tip from "./Tip";

function Card() {
    return (
        <main className="card">
            <Bill/>
            <Tip />
        </main>
    )
}

export default Card;