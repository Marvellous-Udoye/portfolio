export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-24 h-24 perspective">
        <div className="w-full h-full cube animate-rotateCube">
          <div className="face" />
          <div className="face" />
          <div className="face" />
          <div className="face" />
          <div className="face" />
          <div className="face" />
        </div>
      </div>
    </div>
  );
}
