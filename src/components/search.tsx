import { Input } from "@nextui-org/react";
import { SearchIcon } from "./icons/searchIcon";

export default function Search({ setSearchQuery }: { setSearchQuery: (query: string) => void }) {
  return (
    <div className="flex w-full max-w-2xl gap-2 margin-auto" >
      <Input
        onChange={(e) => setSearchQuery(e.target.value)}

        classNames={{
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "darkbg-[#18181b]",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        radius="md"
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
    </div>
  );
}