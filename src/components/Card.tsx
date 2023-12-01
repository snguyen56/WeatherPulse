import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  reference?: React.RefObject<HTMLDivElement> | null;
};

export default function Card({
  children,
  className = "",
  reference = null,
}: Props) {
  return (
    <div className={`${className} rounded-xl`} ref={reference}>
      {children}
    </div>
  );
}
