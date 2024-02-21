import { z } from 'zod';

const EventSchema = z.array
    (z.object({
        timestamp: z.number(),
        page: z.string(),
        entity_id: z.string(),
        event_type: z.string(),
        data: z.record(z.string()),
    }));

export type EventType = z.infer<typeof EventSchema>;
