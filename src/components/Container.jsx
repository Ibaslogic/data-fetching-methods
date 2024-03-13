import { cn } from '../lib/utils';

const Container = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8 w-full md:max-w-screen-xl',
        className
      )}
      {...props}
    />
  );
};

export default Container;
