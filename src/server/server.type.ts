export interface unsignedEvent {
  created_at: number;
  kind: number;
  content: string;
  tags: string[][];
}
export interface event extends unsignedEvent {
  pubkey: string;
  id: string;
  sig: string;
}
