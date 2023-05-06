import { ButtonOnClient } from "./ButtonOnClient";
export async function HelloAction(name: string) {
  "use server";
  console.log(name);
}
export default function ActionForm() {
  return (
    <div>
      <ButtonOnClient hello={HelloAction} />
    </div>
  );
}
