"use client";
import getProject from "@/config/config";
import SkeletonUI from "@/components/SkeletonUI";
import ProjectCard from "@/components/ProjectCard";

import { Meteors } from "@/components/ui/meteors";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { NumberTicker } from "@/components/ui/number-ticker";

import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ProjectType } from "@/types/project";

export default function Project() {
  const { data, isLoading } = useQuery<{
    project: ProjectType[];
  }>({
    queryKey: ["projects"],
    queryFn: async () => await getProject(),
    staleTime: 60000,
  });

  return (
    <div className="relative overflow-hidden bg-slate-100 dark:bg-[#020617] py-20">
      <ScrollProgress className="top-[0px]" />
      <Meteors number={30} />

      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col pb-10 pt-12 md:pt-24">
          <p className="text-3xl font-bold md:text-5xl mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-sky-500">
            Projects & Products
          </p>

          <hr />

          <p className="lg:max-w-4xl text-base md:text-xl mt-8 mb-2">
            Showcasing a handpicked collection of{" "}
            <NumberTicker
              value={data?.project?.length || 0}
              className="text-base md:text-xl font-medium tracking-tighter text-black dark:text-white"
            />{" "}
            project’s crafted with passion and dedication.
          </p>
        </div>

        {isLoading && (
          <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
            <SkeletonUI /><SkeletonUI /><SkeletonUI />
            <SkeletonUI /><SkeletonUI /><SkeletonUI />
          </div>
        )}

        {!isLoading && (
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 },
              },
            }}
            initial="hidden"
            animate="visible"
            className="grid gap-6 py-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {data?.project?.map((post) => (
              <ProjectCard key={post._id} post={post} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
