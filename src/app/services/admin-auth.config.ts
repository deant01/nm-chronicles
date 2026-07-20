export interface AdminAccount {
  username: string;
  password: string;
}

export const adminAccounts: AdminAccount[] = [
  {
    username: 'admin',
    password: 'ChangeMe123!',
  },
  {
    username: 'editor',
    password: 'EditorPass123!',
  },
];

export const isValidAdminCredentials = (username: string, password: string): boolean =>
  adminAccounts.some(
    (account) => account.username === username && account.password === password,
  );
