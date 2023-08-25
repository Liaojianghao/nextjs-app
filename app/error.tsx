'use client';

import { useEffect } from 'react';
import EmptyState from './components/EmptyState';

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <EmptyState title="可恶!🤬" subtitle="网络还是哪里出现了错误呢?🙄" />
    </div>
  );
};

export default ErrorState;
