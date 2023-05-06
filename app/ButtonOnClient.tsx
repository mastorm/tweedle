"use client";

import { HelloAction } from "./ActionForm";

export function ButtonOnClient({ hello }: { hello: (name: string) => void }) {
  return <button onClick={() => HelloAction("mathias")}>Hi</button>;
}
