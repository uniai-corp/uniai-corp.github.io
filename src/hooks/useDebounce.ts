export default function useDebounce<
  F extends (...args: Parameters<F>) => ReturnType<F>,
>(callback: F, delay?: number) {
  let timer: ReturnType<typeof setTimeout> | NodeJS.Timeout | null = null;

  const debounced = (...args: Parameters<F>) => {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => callback(...args), delay ?? 400);
  };

  return debounced;
}
