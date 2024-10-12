import { Ticket } from "./ticket.interface";

export interface TicketsStateInterface {
    allTicketList : Ticket[] | null;
    selectTicket: Ticket | null;
    isLoading:boolean;
    error : string | null;
}

