import http from "./http";

export const getEvents = () => {
    return http.get("/events");
};

export const getEvent = (id: string) => {
    return http.get(`/events/${id}`);
};

export const createEvent = (data: any) => {
    return http.post("/events", data);
};

