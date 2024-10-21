import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Projects } from "./components/Projects";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <header>
        <h1>My Projects</h1>
      </header>

      <main>
        <Projects />
      </main>
    </QueryClientProvider>
  );
}

export default App;
