"use client";
import React, { useRef, useState, useTransition, Suspense } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get("query") || "";
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearching, startTransition] = useTransition();
  const router = useRouter();
  const [query, setQuery] = useState<string>(defaultQuery);

  const search = () => {
    startTransition(() => {
      router.push(`/search?query=${query}`);
    });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="relative w-full h-14 flex flex-col bg-white">
        <div className="relative h-14 z-10 rounded-md">
          <Input
            disabled={isSearching}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                search();
              }
              if (e.key === "Escape") {
                inputRef?.current?.blur();
              }
            }}
            ref={inputRef}
            className="absolute inset-0 h-full"
          />
          <Button
            onClick={search}
            disabled={isSearching}
            size="sm"
            className="absolute right-0 inset-y-0 h-full rounded-l-none"
          >
            {isSearching ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              <Search className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
    </Suspense>
  );
}
