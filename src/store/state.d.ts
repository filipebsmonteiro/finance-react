import { User } from "firebase/auth";

export type AuthState = {
  loading: boolean;
  token: string | null;
  user: User | null;
};

export type BalanceRecord = {
  id: string;
  name: string;
  type: 'income' | 'expense';
  amount: number;
};

export type BalanceState = {
  totalAssets: number;
  totalIncomes: number;
  totalExpenses: number;
  records: BalanceRecord[];
};

export type LayoutState = {
  sidebar: {
    open: boolean;
  },
  header: {
    title: string | null;
    button: {
      label: string | null;
      action: string | null;
    },
  }
};

export type RootState = {
  auth: AuthState;
  balance: BalanceState;
  layout: LayoutState;
};
