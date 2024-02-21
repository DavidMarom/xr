"use client";

import { getUserActivityStack, addUserActivity } from '@/store/events';
import { postEvents } from "@/services/events";


export const transmitEvent = (event: any) => {
    console.log(getUserActivityStack());

    // add event to store
    addUserActivity(event);

    
    // post event only if local storage value - current time is less than 3000ms

}