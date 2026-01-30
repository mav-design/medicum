export interface Category {
  id: string;
  name: string;
  description: string;
  threads: {
    new: boolean;
    total: number;
  };
  creatorId: string;
  createdAt: Date;
  updatedAt: Date | null;
}
