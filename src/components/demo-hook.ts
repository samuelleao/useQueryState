export const code = `import { useLocation, useSearchParams } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import qs from 'qs';

function useQueryState<T = string>(
  key: string,
  { defaultValue }: { defaultValue: T }
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const location = useLocation();
  const [_, setSearchParams] = useSearchParams();

  const query = useMemo(() => {
    return qs.parse(location.search, { ignoreQueryPrefix: true });
  }, [location.search]);

  const parseValue = (value: any, defaultValue: T): T => {
    if (value === undefined) return defaultValue;

    if (typeof defaultValue === 'number') {
      const parsed = Number(value);
      return isNaN(parsed) ? defaultValue : (parsed as any as T);
    }

    if (typeof defaultValue === 'boolean') {
      if (value === 'true') return true as any as T;
      if (value === 'false') return false as any as T;
      return defaultValue;
    }

    if (typeof defaultValue === 'string') {
      return typeof value === 'string' ? (value as any as T) : defaultValue;
    }

    return value as T;
  };

  const rawValue = query[key];
  const value = parseValue(rawValue, defaultValue);

  const setValue: React.Dispatch<React.SetStateAction<T>> = useCallback(
    (newValueOrUpdater) => {
      const newValue = 
        typeof newValueOrUpdater === 'function'
        ? (newValueOrUpdater as (prevState: T) => T)(value)
        : newValueOrUpdater;

      const newQuery: Record<string, any> = { ...query };

      if (
        (typeof newValue === 'string' && newValue === '') ||
        newValue === undefined || newValue === null || newValue === defaultValue
      ) {
        delete newQuery[key];
      } else {
        if (typeof newValue === 'boolean') {
          newQuery[key] = newValue ? 'true' : 'false';
        } else if (typeof newValue === 'number') {
          newQuery[key] = newValue.toString();
        } else {
          newQuery[key] = newValue;
        }
      }

      setSearchParams(qs.stringify(newQuery));
    },
    [setSearchParams, query, key, value]
  );

  return [value, setValue];
}

export default useQueryState;
`