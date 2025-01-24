import { Job } from "@prisma/client";
import JobListItem from "@/components/JobListItem";

const JobResults = async () => {
  const jobs = await prisma?.job.findMany({
    where: {
      approved: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <>
      <div className="flex-grow space-y-3">
        {jobs?.map((job: Job) => {
          return <JobListItem job={job} key={job.id} />;
        })}
      </div>
    </>
  );
};
export default JobResults;
