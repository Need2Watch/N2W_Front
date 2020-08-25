export interface ScheduledEventsState {
  scheduledEvents: Array<ScheduledEvent>;
}

export interface ScheduledEvent {
  name: string;
  start: string;
  end: string;
  color: string;
}
