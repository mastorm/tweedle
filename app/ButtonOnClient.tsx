"use client";

export function ButtonOnClient({ hello }: { hello: (name: string) => void }) {
  return <button onClick={() => hello("mathias")}>Hi</button>;
}
