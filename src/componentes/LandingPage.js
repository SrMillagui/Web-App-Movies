import { MoviesGrid } from "./MoviesGrid";
import { useDebounce } from "../hooks/useDeabaunce";
import { useSearchParams } from "react-router-dom";

export function LandingPage() {
  const [query] = useSearchParams();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 300);
  return (
    <div>
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
