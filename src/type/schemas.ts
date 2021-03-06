import z from "zod";

export type Order = "asc" | "desc";

export type Paginate = {
  sort: `${string},${Order}`;
  page: number;
  size: number;
};

export type SearchEvent = z.infer<typeof searchEventSchema>;
export type CreateUser = z.infer<typeof createUserSchema>;
export type FormCreateEvent = z.infer<typeof formCreateEvent>;
export type CreateTicket = z.infer<typeof createTicketSchema>;
export type BuyTicket = z.infer<typeof buyTicketSchema>;
export type BuyRequest = z.infer<typeof buyRequestSchema>;
export type AuthenticateUser = z.infer<typeof authenticateUserSchema>;

export const createUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string()
});

export const authenticateUserSchema = z.object({
  email: z.string().min(3),
  password: z.string().min(8)
});

export const createTicketSchema = z.object({
  type: z.string(),
  price: z.number(),
  quantity: z.number()
});

export const buyTicketSchema = z.object({
  type: z.string(),
  quantity: z.number()
});

export const buyRequestSchema = z.object({
  buyer: z.string(),
  tickets: z.array(buyTicketSchema)
});

export const formCreateEvent = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  location: z.string(),
  logo: z.string(),
  tickets: z.array(createTicketSchema),
  promoterId: z.string()
});

export const searchEventSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  date: z.date(),
  location: z.string(),
  logo: z.string(),
  created_at: z.date(),
  updated_at: z.date()
});
