import { Agenda as TAgenda } from "../api/agenda/Agenda";

export const AGENDA_TITLE_FIELD = "title";

export const AgendaTitle = (record: TAgenda): string => {
  return record.title?.toString() || String(record.id);
};
