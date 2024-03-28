import React from "react";
import Events from "../components/Events/events";
import Header from "../components/Header";
import Footer from "../components/Footer"

const EventsPage = () => {
    return (
        <>
            <Header />
            <main>
            <Events />
            </main>
            <Footer />
        </>
    )
}

export default EventsPage;