export default function FilmGrain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.05] mix-blend-screen"
      style={{
        backgroundImage: "url('public/grain.png')",
      }}
    />
  );
}