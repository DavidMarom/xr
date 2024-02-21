import http from "./http";
import { EventType } from "@/types";

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
