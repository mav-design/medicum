export interface Commentary {
  content: string;
  id: string;
  threadId: string;
  creatorId: string;
  createdAt: Date;
  updatedAt: Date | null;
}
