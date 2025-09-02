"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 backdrop-blur-xl border-white/10 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <p className="text-slate-300 text-xs md:text-sm">
            © {currentYear} NexGenDev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}