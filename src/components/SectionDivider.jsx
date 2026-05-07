export default function SectionDivider() {
  return (
    <div className="w-full relative overflow-hidden" style={{ height: '36px' }}>
      {/* Solid black background with angled stripes */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -55deg,
            transparent 0px,
            transparent 3px,
            rgba(255,255,255,0.06) 3px,
            rgba(255,255,255,0.06) 6px
          )`,
        }}
      />
    </div>
  );
}
