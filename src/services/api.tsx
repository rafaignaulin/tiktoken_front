import type {
  AuthenticateUser,
  BuyRequest,
  BuyTicket,
  CreateUser,
  FormCreateEvent,
  Paginate,
  SearchEvent
} from "@type/schemas";
import axios from "axios";

const baseUrl = "http://localhost:8080/";

export const api = {
  createUser: (body: CreateUser) => axios.post(baseUrl + "user/create", body),
  authenticateUser: (body: AuthenticateUser) =>
    axios.post(baseUrl + "user/authenticate", body),
  findAllEvents: ({ params, body }: { params?: Paginate; body?: any }) =>
    axios.post<SearchEvent[]>(baseUrl + "event/search/", { params, ...body }),
  findEventById: (eventId: string) => axios.get(baseUrl + "event/" + eventId),
  createEvent: (body: Partial<FormCreateEvent>, userId: string) =>
    axios.post(baseUrl + "event", {
      title: body.title,
      description: body.description,
      date: "2022-03-20",
      location: "web",
      logo: "df",
      tickets: [
        {
          type: "meia",
          price: 49.9,
          quantity: 20
        },
        {
          type: "cheio",
          price: 100,
          quantity: 150
        }
      ],
      promoterId: userId
    }),
  findAllTicketsByEvent: (eventId) => axios.get(baseUrl + "ticket/" + eventId),
  findTicketTypesByEventId: (eventId: string) =>
    axios.get(baseUrl + "ticket/types/" + eventId),
  checkTicketAvailability: (eventId: string, body: BuyTicket[]) =>
    axios.post(baseUrl + "ticket/availability/" + eventId, body),
  buyTickets: (eventId: string, body: BuyRequest) =>
    axios.post(baseUrl + "ticket/buy" + eventId, body)
};
