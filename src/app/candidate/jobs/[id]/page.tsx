import Link from "next/link";
import { notFound } from "next/navigation";
import { getJobById } from "@/app/actions/jobAction";

export default async function JobDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const job = await getJobById(Number.parseInt(params.id));

  if (!job) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-xl text-gray-600 mb-2">
        {job.category} • {job.location}
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Job Description</h2>
        <p className="text-gray-700 whitespace-pre-wrap">{job.description}</p>
      </div>

      <Link
        href={`/candidate/apply/${job.id}`}
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Apply Now
      </Link>
    </div>
  );
}
