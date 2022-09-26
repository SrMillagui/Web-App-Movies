import { useQuery } from "../hooks/UseQuery";
import { MoviesGrid } from "./MoviesGrid";
import Search from "./Search";

export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");
   return (
    <div>
        <Search/>
      <MoviesGrid key={search} search={search}/>
    </div>
  );
}
