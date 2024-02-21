"use client";

import { getUserActivityStack, addUserActivity, clearUserActivityStack } from '@/store/events';
import { postEvents } from "@/services/events";

export const transmitEvent = (event: any) => {
    const lastTransmitted = Number(localStorage.getItem("lastTransmitted"));

    // add event to store
    const eventWithTimestamp = { ...event, timestamp: new Date().getTime() };
    addUserActivity(eventWithTimestamp);

    // post the event stack only if 10 seconds have passed since the last post to server
    if (new Date().getTime() - lastTransmitted > 10000) {
        console.log("=========================");
        console.log("Posting events to server: ");
        console.log("=========================");
        console.log(getUserActivityStack());

        postEvents(getUserActivityStack());

        localStorage.setItem("lastTransmitted", new Date().getTime().toString());
        clearUserActivityStack();
    }
    else {
        console.log("Event stack not posted to server - its too soon.");
        console.log("This is what we have so far: ", getUserActivityStack());
    }
}
