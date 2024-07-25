import React, { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <section className="py-16 bg-white w-full">
      <div className="container mx-auto">{children}</div>
    </section>
  );
}
