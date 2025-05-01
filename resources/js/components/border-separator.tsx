import { cn } from '@/lib/utils';

interface BorderSepartorProps {
    className?: string;
}
const BorderSepartor = ({ className }: BorderSepartorProps) => {
    return (
        <div>
            <div className={cn('border-y ', className)}>
                <div className="w-full bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] py-6 opacity-35">
                    <div className="container border-x z-30">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BorderSepartor;
