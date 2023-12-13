import { Badge } from '@/components/ui/badge';
import type { Dispatch, SetStateAction } from 'react';

interface ISearchBadgeProps {
  badges: string[];
  setBadge: Dispatch<SetStateAction<string>>;
  currentBadge: string;
}

const SearchBadge = ({ badges, setBadge, currentBadge }: ISearchBadgeProps) => {
  return badges.map((badge) => (
    <Badge
      key={badge}
      onClick={() => setBadge(badge)}
      className={`mr-4 mt-2 mb-3 rounded-lg bg-background-light text-black dark:bg-background-dark dark:text-white hover:text-white cursor-pointer ${
        badge === currentBadge
          ? 'bg-background-dark text-white dark:bg-background-light dark:text-black'
          : ''
      }`}
    >
      {badge}
    </Badge>
  ));
};

export default SearchBadge;
