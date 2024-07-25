import React from "react";
import PageNavBar from "../components/PageNavBar";

type Props = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div className={`w-full sm:w-11/12 md:w-5/6 lg:w-8/12 mx-auto sm:my-2`}>
      <PageNavBar />
      {children}
    </div>
  );
}
