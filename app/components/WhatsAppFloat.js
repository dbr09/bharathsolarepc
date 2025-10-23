"use client";

const whatsappLink =
  "https://wa.me/918977310017?text=Hi%20Bharath,%20I%27d%20like%20to%20discuss%20a%20solar%20project%20for%20my%20property.";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-2xl shadow-[#25D366]/40 ring-1 ring-white/30 transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="h-5 w-5"
        >
          <path
            d="M12 3.5c-4.7 0-8.5 3.68-8.5 8.22 0 1.45.4 2.83 1.1 4.02L4 21l5.42-1.66c1.04.35 2.02.53 2.98.53 4.7 0 8.5-3.68 8.5-8.22S16.7 3.5 12 3.5z"
          />
          <path
            d="M9.9 8.8c-.17-.4-.36-.4-.52-.4-.13 0-.28 0-.43.01-.14.01-.37.04-.56.28-.19.24-.74.73-.74 1.78 0 1.05.76 2.06.86 2.2.09.15 1.46 2.25 3.61 3.06 1.79.7 2.15.57 2.54.53.39-.03 1.25-.51 1.43-1 .17-.48.17-.9.12-.99-.05-.09-.19-.15-.4-.26-.22-.11-1.25-.63-1.44-.7-.19-.07-.33-.11-.47.11-.14.22-.54.7-.66.84-.12.13-.24.15-.45.04-.21-.11-.87-.32-1.65-1.03-.61-.55-1.03-1.22-1.15-1.43-.12-.22-.01-.32.09-.43.1-.11.21-.26.31-.39.1-.13.14-.22.21-.36.07-.13.04-.26-.02-.37-.06-.11-.48-1.14-.67-1.56z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="hidden text-sm font-semibold uppercase tracking-wide sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
