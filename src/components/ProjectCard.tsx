"use client";

import { motion } from "framer-motion";
import { format } from "date-fns";
import { FaGithub } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";
import { HiViewGridAdd } from "react-icons/hi";
import { ShineBorder } from "@/components/ui/shine-border";
import Image from "@/components/Image";
import CardAction from "@/components/CardAction";
import { ProjectType } from "@/types/project";

interface Props {
  post: ProjectType;
}

export default function ProjectCard({ post }: Props) {
  const short = (text: string, size: number) =>
    text.length > size ? text.slice(0, size - 3) + "..." : text;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="w-full"
    >
      <ShineBorder
        className="overflow-hidden rounded-xl p-[1px] shadow-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <div className="group h-full w-full rounded-xl bg-slate-100 dark:bg-slate-900 backdrop-blur-lg shadow-lg">

          <Image post={post} />

          <div className="p-4">
            <p className="text-xs font-semibold text-indigo-500">
              #{post.category.toLowerCase()}
            </p>

            <p className="mt-3 text-lg font-semibold">
              {short(post.title, 40)}
            </p>

            <p className="mt-2 text-sm opacity-90 text-justify">
              {short(post.details, 150)}
            </p>

            <div className="mt-5 flex items-center space-x-3">
              <img
                className="w-10 h-10 rounded-full"
                src="https://res.cloudinary.com/ducahghzl/image/upload/v1754679022/SAVE_20250809_242008_jxlejy.jpg"
                alt="DV"
              />

              <div className="flex-1">
                <p className="text-xs font-semibold">Dhruv Verma</p>
                <span className="text-xs opacity-80">
                  Added: {format(new Date(post.createdAt), "dd/MM/yyyy")}
                </span>
              </div>

              <CardAction
                link={post.sourceCode}
                icon={<FaGithub className="text-lg" />}
                color="bg-slate-800"
              />

              {post.liveLink && (
                <CardAction
                  link={post.liveLink}
                  icon={<MdOpenInNew className="text-lg" />}
                  color="bg-indigo-500"
                />
              )}

              <CardAction
                link={`/project/${post._id}`}
                icon={<HiViewGridAdd className="text-lg" />}
                color="bg-slate-800"
              />
            </div>
          </div>
        </div>
      </ShineBorder>
    </motion.div>
  );
}
