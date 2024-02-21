import http from "./http";
import { EventType } from "@/types";

export const getEvents = () => {
    return http.get("/events");
};

export const postEvents = (data: EventType) => {
    return http.post("/events", data);
}

