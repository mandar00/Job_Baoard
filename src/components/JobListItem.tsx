import { Job } from "@prisma/client";
import defaultCompanyLogo from "@/assets/company-logo-placeholder.png";
import Image from "next/image";
import { Banknote, Briefcase, Clock, Globe2, MapPin } from "lucide-react";
import { formatMoney, relativeDate } from "@/lib/utils";
import Badge from "./Badge";

interface JobListItemsProps {
  job: Job;
}

export default function JobListItem({
  job: {
    title,
    companyName,
    type,
    location,
    locationType,
    salary,
    companyLogoUrl,
    createdAt,
  },
}: JobListItemsProps) {
  return (
    <article className="flex gap-3 rounded-lg border p-5 hover:bg-muted/60">
      <div className="flex h-[6em] w-[6em] items-center  ">
        <Image
          className="self-center rounded-lg"
          src={companyLogoUrl || defaultCompanyLogo}
          alt={companyName}
        />
      </div>
      <div className="flex-grow">
        <div>
          <h2 className="text-xl font-normal">{title}</h2>
          <p className="text-base text-muted-foreground">{companyName}</p>
        </div>
        <div className="text-muted-foreground">
          <p className="flex items-center gap-1.5 text-sm sm:hidden">
            <Briefcase size={".8em"} className="shrink-0" />
            {type}
          </p>
          <p className="flex items-center gap-1.5  text-sm">
            <MapPin size={".8em"} className="shrink-0" />
            {locationType}
          </p>
          <p className="flex items-center gap-1.5  text-sm">
            <Globe2 size={".8em"} className="shrink-0" />
            {location || "Global"}
          </p>
          <p className="flex items-center gap-1.5  text-sm">
            <Banknote size={".8em"} className="shrink-0" />
            {formatMoney(salary)}
          </p>
          <p className="flex items-center gap-1.5 text-sm sm:hidden">
            <Clock size={".8em"} className="shrink-0" />
            {relativeDate(createdAt)}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 flex-col items-end justify-between sm:flex">
        <Badge>{type}</Badge>
        <span className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock size={"1em"}/>
          {relativeDate(createdAt)}
        </span>
      </div>
    </article>
  );
}
