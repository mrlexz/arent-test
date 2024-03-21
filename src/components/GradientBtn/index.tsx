import { FC } from "react";

const GradientBtn: FC<{
  containerClassName?: string;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ containerClassName = "", children, onClick }) => {
  return (
    <div
      className={`bg-gradient-to-t from-primary-300 to-primary-400 cursor-pointer ${containerClassName}`}
      onClick={() => onClick?.()}
    >
      {children}
    </div>
  );
};

export default GradientBtn;
