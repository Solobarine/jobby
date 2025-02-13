import Link from "next/link";
import { getJobs } from "@/app/actions/jobAction";

export default async function JobListingsPage() {
  const jobs = await getJobs();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
      <div className="grid gap-4">
        {jobs.map((job) => (
          <Link
            key={job.id}
            href={`/candidate/jobs/${job.id}`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-2">
              {job.category} • {job.location}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
