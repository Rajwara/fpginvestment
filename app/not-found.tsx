import MaskButton from "@/components/MaskButton";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow text-accent-fg">Error 404</p>
      <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-tight text-fg">
        This page checked out.
      </h1>
      <p className="mt-6 text-lg text-muted">
        The page you were looking for is not part of the site.
      </p>
      <MaskButton href="/" className="mt-10" arrow>
        Back to the homepage
      </MaskButton>
    </div>
  );
}
