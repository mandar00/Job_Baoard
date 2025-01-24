import { jobTypes } from "@/constants/jobConstants";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Select from "./ui/select";
import prisma from "@/lib/prisma";
import { Button } from "./ui/button";
import { jobFilterSchema } from "@/lib/validations";
import { redirect } from "next/navigation";


async function filterJobs(formData: FormData) {
  "use server";

  const values = Object.fromEntries(formData.entries());

  const { q, type, location, remote } = jobFilterSchema.parse(values);

  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(type && { type }),
    ...(location && { location }),
    ...(remote && { remote: "true" }),
  });
  console.log(searchParams);
  redirect(`/?${searchParams.toString()}`);
}


const JobsFilterSidebar = async () => {
  //add try catch and throw error for it to be caught by error page
  const distinctLocationResponse = await prisma.job.findMany({
    where: { approved: true },
    select: {
      location: true,
    },
    distinct: ["location"],
  });

  const distinctLocations = distinctLocationResponse
    .map(({ location }) => location)
    .filter(Boolean) as string[];

  return (
    <aside className="sticky top-0 h-fit rounded-lg border bg-background md:w-[250px]">
      <form action={filterJobs} className="p-3">
        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="q">Search</Label>
            <Input id="q" name="q" placeholder="Title ,Company etc " />
          </div>
          <div className="space-y-2">
            <Label htmlFor="type">Job Type</Label>
            <Select id="type" name="type" defaultValue={""}>
            <option value={""}>All Types</option>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Select id="location" name="location" defaultValue={""}>
              <option value={""}>All Regions</option>
              {distinctLocations.map((location, locationIndex) => (
                <option key={locationIndex} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          </div>
          <div className=" flex gap-2 items-center">
            <input id="remote" name="remote" type="checkbox" className="scale-125 accent-black" defaultChecked={true}/>
            <Label htmlFor="remote">Is Remote</Label>
          </div>
          <Button type="submit" className="w-full">Filter Jobs</Button>
        </div>
      </form>
    </aside>
  );
};
export default JobsFilterSidebar;
