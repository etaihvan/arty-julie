import { Button } from "../components/Button";
import { Teacup } from "../components/Doodles";

export default function ThankYou() {
  return (
    <section className="container-page flex flex-col items-center py-24 text-center">
      <Teacup className="h-28 w-32 text-garden" />
      <h1 className="mt-6 text-5xl sm:text-6xl">Thank you!</h1>
      <p className="mt-5 max-w-lg text-lg text-ink-soft">
        Your message is on its way to Julie. She'll be in touch soon. In the meantime, have a look around the gallery.
      </p>
      <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        <Button to="/gallery/">See the gallery</Button>
        <Button to="/" variant="secondary">Back to home</Button>
      </div>
    </section>
  );
}
