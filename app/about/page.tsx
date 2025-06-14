import { client } from "@/sanity/client";
import { Experience, ExperienceAndPartnershipsQuery, Partnership, experienceAndPartnershipsQuery } from "@/sanity/queries/experience";
import { RevalidationTag } from "@/sanity/utils";
import { formatDateString } from "@/utils/date";
import Image from "next/image";

const ExperienceBreakdown = ({ e }: { e: Experience }) => {
  return (
    <div>
      {e.projects?.map((p, i) => {
        return (
          <div
            key={`ExperienceBreakdown${p._id}`}
            className="p-12 grid grid-flow-col grid-cols-7 gap-10"
          >

            <div className="col-span-1 flex justify-center items-center text-h4 font-bold font-serif text-opacity-50 text-gray-900 relative">
              <span>•</span>
              {i + 1 < e.projects.length && <div className="border-l-2 border-gray-900 border-opacity-50 h-[6rem] absolute bottom-[-6rem]"></div>}
            </div>
            <div className="relative col-span-2 tablet:col-span-1">
              <Image
                src={p.condensedLogo}
                alt={p.title}
                fill={true}
                style={{
                  objectFit: "contain",
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-5 tablet:col-span-6">
              <p className="text-h6 font-bold">{p.title}</p>
              <p className="text-md">Since {formatDateString(p.startDate)}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const ExperienceComponent = ({ e }: { e: Experience }) => {
  return (
    <div>
      <div className="bg-gray-300 p-10 grid grid-flow-col grid-cols-7 gap-16 mt-8 tablet:mt-16">
        <div className="relative col-span-2 tablet:col-span-1">
          {e.condensedLogo && <Image
            src={e.condensedLogo}
            alt={e.name}
            fill={true}
            style={{
              objectFit: "contain"
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />}
        </div>
        <div className="col-span-5 tablet:col-span-6">
          <p className="text-h5 font-bold">{e.name}</p>
          <p className="text-lg">{e.title}</p>
          <p className="text-md">Since {formatDateString(e.startDate)}</p>
        </div>
      </div>
      <ExperienceBreakdown e={e} />
    </div>

  )
}

const PartnershipComponent = ({ p }: { p: Partnership }) => {
  return (
    <div className="bg-gray-300 p-16 grid grid-flow-col grid-cols-7 gap-16 mt-16">
      <div className="relative col-span-2 tablet:col-span-1">
        <Image
          src={p.fullLogo}
          alt={p.name}
          fill={true}
          style={{
            objectFit: "contain"
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="col-span-5 tablet:col-span-6">
        <p className="text-h4 font-bold">{p.name}</p>
        <p className="text-lg">{p.description}</p>
      </div>
    </div>
  )
}

export default async function Projects() {
  const { experience, partnerships } = await client.fetch<ExperienceAndPartnershipsQuery>(experienceAndPartnershipsQuery,
    {},
    { next: { tags: [RevalidationTag.experience, RevalidationTag.partnership] } });
  return (
    <main className="min-h-[85vh] m-8 tablet:m-0">
      <h1 className="text-h4 font-bold">Experience</h1>
      <div className="flex flex-col">
        {experience.map(e => {
          return <ExperienceComponent key={e._id} e={e} />
        })}
      </div>
      <p className="text-h4 font-bold mt-24">Partnerships</p>
      <div className="flex flex-col">
        {partnerships.map(p => {
          return <PartnershipComponent key={p._id} p={p} />
        })}
      </div>
    </main>
  )
}