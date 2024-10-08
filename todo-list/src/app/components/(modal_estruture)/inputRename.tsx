"use client";
import RenameSVG from "../utility/svg_components/rename";
// hooks
import { useAtom } from "jotai";
import { renameStateAtom } from "@/app/(atoms)/(modal)/modal-atoms";

interface TypeOfProps {
  renameKey: (e: { key: string }) => void;
  addRename: () => void;
}

export const InputRename = ({ renameKey, addRename }: TypeOfProps) => {

  const [renameState, setRenameState] = useAtom(renameStateAtom);

  return (
    <div
      className="
      w-full 
      desktopMini:w-4/5 
      h-auto 
      items-center 
      flex gap-3"
    >
      <input
        type="text"
        value={renameState}
        onKeyDown={renameKey}
        aria-label="input para entrada do novo nome para uma tarefa"
        onChange={(e) => {
          setRenameState(() => e.target.value);
        }}
        placeholder="Renomear tarefa..."
        className="
          placeholder:text-xs 
          placeholder:text-[#5B5757] 
          dark:border-[#6C567D]
          dark:bg-[#161319]
          dark:placeholder:text-[#BA8AEB]
          border-[#818181]
          bg-[#F8F8F8]
          border 
          placeholder:font-medium 
          mobileMini:py-3 
          px-3 
          w-full 
          py-2 shadow-md 
          rounded-md"
      />
      <button
        disabled={renameState === "" ? true : false}
        onClick={addRename}
        aria-label="botão para renomar uma tarefa"
        className={`
        w-fit 
        h-fit 
        p-2
        rounded-lg 
        shadow-sm 
        font-bold 
        border
        text-white
        placeholder:text-[#5B5757] 
        dark:border-[#6C567D]
        dark:bg-[#161319]
        dark:placeholder:text-[#BA8AEB]
        border-[#818181]
        bg-[#F8F8F8]
        cursor-pointer
        `}
      >
        <RenameSVG />
      </button>
    </div>
  );
};
