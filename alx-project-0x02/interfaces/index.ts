// interfaces/index.ts

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
}
// interfaces/index.ts

export interface PostProps {
  id?: number;
  title: string;
  content: string;
  userId: number;
}

