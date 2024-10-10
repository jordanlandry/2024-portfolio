import { useEffect } from "react";

type Props = {
  keybind: string | string[];
  action: () => void;
  dependencies?: unknown[];
};

export default function useKeybind({ keybind, action, dependencies }: Props) {
  const baseDeps = [keybind, action];
  const deps = dependencies ? [...baseDeps, ...dependencies] : baseDeps;

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const key = Array.isArray(keybind) ? keybind : [keybind];
      if (key.includes(e.key)) action();
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [...deps]);
}
