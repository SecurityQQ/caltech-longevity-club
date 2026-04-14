export function DisclaimerBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] w-full bg-orange-900/80 backdrop-blur-sm border-b border-orange-500/30 py-2.5 px-4">
      <p className="text-[11px] md:text-xs text-orange-100 text-center max-w-4xl mx-auto leading-relaxed font-medium">
        <span className="font-bold">Disclaimer:</span>{" "}
        The Caltech Longevity Club is a student-led organization. The content on
        this site reflects the views of student members and does not represent
        the views of the California Institute of Technology.
      </p>
    </div>
  );
}
