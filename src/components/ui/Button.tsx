import Link from 'next/link';

type ButtonProps = {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
};

export const Button = ({ href, variant = 'primary', children }: ButtonProps) => {
  const baseStyles = "inline-block w-48 px-6 py-3 rounded-lg text-lg font-semibold text-center transition-all duration-300";

  const variantStyles = {
    primary: "bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary",
    secondary: "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white",
  };
  
  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </Link>
  );
};