import { cn } from '../../utils/helpers';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  as?: 'div' | 'article';
}

export function Card({ children, className, hover, onClick, as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={cn('card', hover && 'card--hover', onClick && 'card--clickable', className)}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } : undefined}
    >
      {children}
    </Tag>
  );
}
