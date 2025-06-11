import React from 'react';

interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  download?: string | boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  onClick,
  href,
  download,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  disabled = false,
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0D0D0D] transition-all duration-300 ease-in-out transform hover:scale-105";
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const variantClasses = {
    primary: `bg-[#E50914] hover:bg-[#B20710] focus:ring-[#E50914] text-white ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`,
    secondary: `bg-[#8A2BE2] hover:bg-[#9C4CE4] focus:ring-[#8A2BE2] text-white ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`,
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        download={download}
        className={`${combinedClasses} ${disabled ? 'pointer-events-none' : ''}`}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default StyledButton;