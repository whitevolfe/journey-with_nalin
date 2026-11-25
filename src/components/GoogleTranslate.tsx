import { useState } from "react";

const languages = [
  { code: "en", name: "English", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "de", name: "German", flag: "https://flagcdn.com/w40/de.png" },
  { code: "ru", name: "Russian", flag: "https://flagcdn.com/w40/ru.png" },
  { code: "fr", name: "French", flag: "https://flagcdn.com/w40/fr.png" },
  { code: "nl", name: "Dutch", flag: "https://flagcdn.com/w40/nl.png" },
  { code: "pl", name: "Polish", flag: "https://flagcdn.com/w40/pl.png" },
  { code: "it", name: "Italian", flag: "https://flagcdn.com/w40/it.png" },
  { code: "es", name: "Spanish", flag: "https://flagcdn.com/w40/es.png" },
  { code: "sv", name: "Swedish", flag: "https://flagcdn.com/w40/se.png" },
  { code: "da", name: "Danish", flag: "https://flagcdn.com/w40/dk.png" },
  { code: "no", name: "Norwegian", flag: "https://flagcdn.com/w40/no.png" },
  { code: "fi", name: "Finnish", flag: "https://flagcdn.com/w40/fi.png" },
  { code: "cs", name: "Czech", flag: "https://flagcdn.com/w40/cz.png" },
  { code: "pt", name: "Portuguese", flag: "https://flagcdn.com/w40/pt.png" },
  { code: "ro", name: "Romanian", flag: "https://flagcdn.com/w40/ro.png" },
  { code: "hi", name: "Hindi", flag: "https://flagcdn.com/w40/in.png" },
  { code: "zh-CN", name: "Chinese", flag: "https://flagcdn.com/w40/cn.png" },
  { code: "ar", name: "Arabic", flag: "https://flagcdn.com/w40/sa.png" },
  { code: "ta", name: "Tamil", flag: "https://flagcdn.com/w40/lk.png" },
];

export default function GoogleTranslate({ inline = false }: { inline?: boolean }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("en");

  const translate = (language: string) => {
    setSelected(language);
    setOpen(false);

    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;

    if (!select) {
      console.warn("Google Translate is not loaded yet.");
      return;
    }

    select.value = language;
    select.dispatchEvent(new Event("change", { bubbles: true }));
  };

  const currentLanguage = languages.find((language) => language.code === selected) ?? languages[0];

  return (
    <div className="relative" style={{ zIndex: 999999 }}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 rounded-full border border-white/25 bg-black/65 px-3 py-2.5 text-sm text-white shadow-lg backdrop-blur-xl transition hover:bg-black/80"
      >
        <img
          src={currentLanguage.flag}
          alt={currentLanguage.name}
          className="h-[17px] w-6 rounded-sm object-cover"
        />

        <span className="hidden sm:inline">{currentLanguage.name}</span>

        <span
          className="text-[10px] transition-transform duration-200"
          style={{
            transform: open ? "rotate(180deg)" : "none",
          }}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+8px)] w-[190px] max-h-[70vh] overflow-y-auto rounded-xl border border-white/15 bg-black/95 p-1.5 shadow-2xl">
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() => translate(language.code)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-white transition hover:bg-white/10 ${
                selected === language.code ? "bg-white/15" : ""
              }`}
            >
              <img
                src={language.flag}
                alt={language.name}
                className="h-[18px] w-[25px] shrink-0 rounded-sm object-cover"
              />

              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
