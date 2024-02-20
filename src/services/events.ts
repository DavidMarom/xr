import http from "./http";

export const getEvents = () => {
    return http.get("/events");
};

export const postEvents = (data: Array<object>) => {
    return http.post("/events", data);
}

