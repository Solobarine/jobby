import Link from "next/link";
import { getCompanyJobs } from "@/app/actions/jobAction";
import { Trash2, FilePenLine } from "lucide-react";

export default async function JobDashboardPage() {
  const jobs = await getCompanyJobs();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Job Dashboard</h1>
        <Link
          href="/company/jobs/new"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Post a New Job
        </Link>
      </div>
      <div className="grid gap-4">
        {jobs.map((job) => (
          <div key={job.id} className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-4">
              {job.category} • {job.location}
            </p>
            <div className="flex items-center justify-between">
              <Link
                href={`/company/jobs/${job.id}/applications`}
                className="text-blue-600 hover:underline"
              >
                View Applications
              </Link>
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-400"
                >
                  <FilePenLine />
                </button>
                <button
                  type="button"
                  className="text-red-600 hover:text-red-400"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
