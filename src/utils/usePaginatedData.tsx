import {useState, useCallback, useEffect} from 'react';

interface UsePaginatedDataProps<T> {
  fetchFunction: (page: number, limit: number) => Promise<T[]>;
  initialPage?: number;
  limit?: number;
}

export function usePaginatedData<T>({
  fetchFunction,
  initialPage = 1,
  limit = 10,
}: UsePaginatedDataProps<T>) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  const fetchData = useCallback(
    async (reset = false) => {
      if ((!hasMore && !reset) || loading || refreshing) {
        return;
      }

      if (reset) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      try {
        const newPage = reset ? initialPage : page;
        const newData = await fetchFunction(newPage, limit);

        setHasMore(newData.length === limit);

        setData(reset ? newData : prev => [...prev, ...newData]);

        if (reset) {
          setPage(initialPage + 1);
        } else {
          setPage(prev => prev + 1);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [page, hasMore, loading, refreshing, fetchFunction, limit, initialPage],
  );

  useEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true);
      fetchData(true);
    }
  }, [isInitialized, fetchData]);

  return {
    data,
    loading,
    refreshing,
    refresh: () => fetchData(true),
    loadMore: () => fetchData(false),
  };
}
