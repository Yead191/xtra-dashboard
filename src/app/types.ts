export type UserRole = 'user' | 'provider' | 'admin' | 'worker' | 'business' | null;

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  location?: string;
  rating?: number;
  completedOrders?: number;
  memberSince?: string;
}
