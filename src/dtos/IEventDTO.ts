
export type Event = {
    id: string;
    name: string;
    description: string;
    local: {
        city: string;
        uf: string;
    }
    thumbnail: string;
    eventDate?: string;
    created_at?: string;
    updated_at?:string;
}