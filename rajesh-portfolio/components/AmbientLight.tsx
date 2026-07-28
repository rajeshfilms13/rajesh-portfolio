export default function AmbientLight() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-yellow-500/5 blur-[140px]" />

      <div className="absolute -right-40 top-[45%] h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[160px]" />

      <div className="absolute bottom-0 left-[30%] h-80 w-80 rounded-full bg-yellow-300/5 blur-[140px]" />
    </div>
  );
}