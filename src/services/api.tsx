import {
  AuthenticateUser,
  BuyRequest,
  BuyTicket,
  CreateUser,
  FormCreateEvent,
  Paginate
} from "@types";
import axios from "axios";

const baseUrl = "http://localhost:8080/";

export const api = {
  createUser: (body: CreateUser) => axios.post(baseUrl + "user/create", body),
  authenticateUser: (body: AuthenticateUser) =>
    axios.post(baseUrl + "user/authenticate", body),
  findAllEvents: (params: Paginate) =>
    axios.get(baseUrl + "event/", { params }),
  findEventById: (eventId: string) =>
    axios.get(baseUrl + "event/" + eventId),
  createEvent: (body: FormCreateEvent) =>
    axios.post(baseUrl + "event/create", body),
  findAllTicketsByEvent: (eventId) => 
    axios.get(baseUrl + "ticket/" + eventId),
  findTicketTypesByEventId: (eventId: string) =>
    axios.get(baseUrl + "ticket/types/" + eventId),
  checkTicketAvailability: (eventId: string, body: BuyTicket[]) =>
    axios.post(baseUrl + "ticket/availability/" + eventId, body),
  buyTickets: (eventId: string, body: BuyRequest) =>
    axios.post(baseUrl + "ticket/buy" + eventId, body)
};
