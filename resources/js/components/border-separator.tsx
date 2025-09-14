import { cn } from '@/lib/utils';

interface BorderSepartorProps {
    className?: string;
}
const BorderSepartor = ({ className }: BorderSepartorProps) => {
    return (
        <div className={cn('relative border-y', className)}>
            <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] opacity-35" />
            <div className="container relative border-x py-6" />
        </div>
    );
};

export default BorderSepartor;
