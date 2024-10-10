import { useEffect } from "react";

type Props<T> = {
  url: string;
  dependencies?: unknown[];
  callback: (data: T) => void;
  onError?: (error: unknown) => void;
};

export default function useApi<T>({
  callback,
  url,
  dependencies,
  onError,
}: Props<T>) {
  const handleOnError = (e: unknown) => {
    if (onError) onError(e);

    console.error(e);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        callback(data);
      } catch (e: unknown) {
        handleOnError(e);
      }
    };

    getData();
  }, dependencies ?? []);
}
