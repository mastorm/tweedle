import { ButtonOnClient } from "./ButtonOnClient";

export default function ActionForm() {
  async function HelloAction(name: string) {
    "use server";
    console.log(name);
  }
  return (
    <div>
      <ButtonOnClient hello={HelloAction} />
    </div>
  );
}
