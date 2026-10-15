import { Button } from "../components/Button";
import { Paintbrush, Squiggle } from "../components/Doodles";

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center py-24 text-center">
      <Paintbrush className="h-24 w-24 text-vermilion" />
      <p className="hand mt-4 text-3xl text-ink-soft">Oops, a happy accident</p>
      <h1 className="mt-2 text-5xl sm:text-6xl">This page wandered off the canvas</h1>
      <Squiggle className="mt-6 h-5 w-32 text-ochre" />
      <p className="mt-6 max-w-lg text-lg text-ink-soft">
        The link may be old or mistyped. These might be what you were after:
      </p>
      <div className="mt-9 flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
        <Button to="/kids-art-classes/">Kids' classes</Button>
        <Button to="/art-camps/" variant="ink">Art camps</Button>
        <Button to="/adult-art-classes/" variant="secondary">Adult classes</Button>
        <Button to="/" variant="ghost">Home</Button>
      </div>
    </section>
  );
}
