import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div className={`w-full sm:w-11/12 md:w-5/6 lg:w-8/12 mx-auto my-10`}>{children}</div>
  );
}
