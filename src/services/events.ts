import http from "./http";
import { EventType } from "@/types";

export const getEvents = () => {
    return http.get('/events');
}

export const clearEvents = () => {
    return http.delete('/events');
}

export const postEvents = (data: EventType) => {
    return http.post(
        '/events',
        data,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        },
    );
}
