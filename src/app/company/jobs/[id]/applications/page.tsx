import { getApplicationsByJobId } from "@/app/actions/applicationAction";
import { getJobById } from "@/app/actions/jobAction";
import { notFound } from "next/navigation";

export default async function ManageApplicationsPage({
  params,
}: {
  params: { id: string };
}) {
  const jobId = Number.parseInt(params.id);
  const [job, applications] = await Promise.all([
    getJobById(jobId),
    getApplicationsByJobId(jobId),
  ]);

  if (!job) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Applications for {job.title}</h1>
      {applications.length === 0 ? (
        <p>No applications received yet.</p>
      ) : (
        <div className="grid gap-4">
          {applications.map((application) => (
            <div
              key={application.id}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">{application.name}</h2>
              <p className="text-gray-600 mb-2">{application.email}</p>
              <a
                href={application.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mb-2 block"
              >
                View Resume
              </a>
              <h3 className="font-semibold mt-4 mb-2">Cover Letter:</h3>
              <p className="text-gray-700">{application.coverLetter}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
