"use client";

import { getUserActivityStack, addUserActivity, clearUserActivityStack } from '@/store/events';
import { postEvents } from "@/services/events";


export const transmitEvent = (event: any) => {
    const lastTransmitted = Number(localStorage.getItem("lastTransmitted"));

    // add event to store
    addUserActivity(event);

    // post event only if local storage value - current time is less than 10000ms
    if (new Date().getTime() - lastTransmitted > 10000) {
        // post event to server
        console.log("========================");
        console.log("Posting event to server: ");
        console.log("========================");
        console.log(getUserActivityStack());

        postEvents(getUserActivityStack());

        localStorage.setItem("lastTransmitted", new Date().getTime().toString());
        clearUserActivityStack();
    }
    else {
        console.log("Event stack not posted to server - too soon.");
        console.log("This is what we have so far: ", getUserActivityStack());
    }

}