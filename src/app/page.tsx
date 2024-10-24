import { projectsSchema } from "@/lib/schemas";
import type { Projects } from "@/lib/schemas";

export default async function Home() {
  const response = await fetch(
    `http://localhost:8484/api/docs/${process.env.DOC_ID}/tables/${process.env.TABLE_ID}/records`,
    {
      headers: [["Authorization", `Bearer ${process.env.GRIST_API_KEY}`]],
    },
  );

  const rawData = await response.json();
  const data = projectsSchema.parse(rawData);

  return (
    <>
      <header>
        <h1>My Projects</h1>
      </header>

      <main>
        <ProjectList data={data} />
      </main>
    </>
  );
}

interface ProjectListProps {
  data: Projects;
}

function ProjectList(props: ProjectListProps) {
  // TODO: Parallel data fetching
  return JSON.stringify(props.data, null, 2);
}
