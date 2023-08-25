'use client';

import { useRouter } from 'next/navigation';
import Heading from './Heading';
import Button from './Button';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = '没有匹配的房源',
  subtitle = '试着减少一些条件?',
  showReset,
}) => {
  const router = useRouter();

  return (
    <div
      className="
      h-[60vh]
      flex
      flex-col
      gap-2
      justify-center
      items-center
    "
    >
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="返回首页"
            onClick={() => router.push('/')}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
