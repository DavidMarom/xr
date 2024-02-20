import { z } from "zod";

const EventSchema = z.object(
    {
        timestamp: z.string(),
        page: z.string(),
        entity_id: z.string(),
        event_type: z.string(),
        data: z.record(z.unknown()),
    }
);

export type ContactGetType = z.infer<typeof EventSchema>;
