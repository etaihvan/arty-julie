import { Gallery } from "../components/Gallery";
import { SectionHeading } from "../components/SectionHeading";
import { InstagramPanel } from "../components/InstagramPanel";
import { CtaBand } from "../components/CtaBand";
import { gallery } from "../content/gallery";

export default function GalleryPage() {
  return (
    <>
      <section className="container-page pb-6 pt-16">
        <SectionHeading
          as="h1"
          eyebrow="Gallery"
          title="The studio wall"
          intro="Paintings, drawings, papier-mâché, mosaics and more from Julie's classes and camps. Tap a photo to see it larger."
          underline="vermilion"
        />
      </section>
      <section aria-label="Artwork" className="container-page py-12">
        <Gallery items={gallery} />
      </section>
      <div className="container-page">
        <InstagramPanel />
      </div>
      <CtaBand
        title="Want to make work like this?"
        primary={{ to: "/kids-art-classes/", label: "Kids' & teen classes", track: "view_program_click", trackLabel: "gallery-kids" }}
        secondary={{ to: "/adult-art-classes/", label: "Adult classes", track: "view_program_click", trackLabel: "gallery-adults" }}
        body="Classes and camps for every age, with all materials included."
      />
    </>
  );
}
