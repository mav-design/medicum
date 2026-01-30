export interface Thread {
  id: string;
  title: string;
  content: string;
  category: string;
  creatorId: string;
  createdAt: Date;
  updatedAt: Date | null;
  commentCount: number;
}
