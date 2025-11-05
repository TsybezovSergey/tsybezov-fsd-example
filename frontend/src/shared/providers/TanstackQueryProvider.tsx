"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const CACHE_LIFE_TIME = 1000 * 60 * 1;

const defaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    gcTime: CACHE_LIFE_TIME,
    staleTime: CACHE_LIFE_TIME,
  },
};

const client = new QueryClient({ defaultOptions });

export default function TanstackQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
