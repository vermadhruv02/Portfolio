"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { format } from "date-fns";
// import Image from "@/components/Image";
// import Link from "react-router-dom";
// import { useRouter } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { MdOpenInNew } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery} from "@tanstack/react-query";
import Loading from "@/components/Loading";
import { Safari } from "@/components/ui/safari"

// interface Project {
//   id: string;
//   title: string;
//   details: string;
//   tags: string[];
//   category: string;
//   author: string;
//   avatar: string;
//   createdAt: string;
//   sourceCode: string;
//   liveLink: string;
//   image: string;
// };

async function getProject(id: string) {
  const URL = `${import.meta.env.VITE_BACKEND_URL}/api/projects/find/${id}`;
  const res = await fetch(URL);
  const { data } = await res.json();
  // console.log(`${JSON.stringify(data.longDetails)}`);
  return data;
}

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: project, isLoading } = useQuery({
    queryKey: ["project"  , id],
    queryFn: async () => {
      return await getProject(id!);
    },
    staleTime: 60000,
  });
 
 
  const handelClick = () => {
    navigate(-1);   
  };
  
  return (
    
    <>
      {isLoading && <Loading />}
      {!isLoading && project && 
      
        <div className=" p-8 max-w-7xl mx-auto mt-28 mb-10 dark:bg-[#0a0f24] bg-slate-100 rounded-xl border-[1px] dark:border-white/10 border-black/10 ">
      <div className="pb-5">
        {/* <Link href="/projects"> */}
        <HoverBorderGradient
          onClick={handelClick}
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-slate-800 bg-slate-100 text-sm  text-slate-700 dark:text-slate-100 flex items-center"
        >
          <IoIosArrowBack className="font-extrabold text-lg mr-1 -ml-2" /> Back
        </HoverBorderGradient>
        {/* </Link> */}
      </div>
      <div className=" ">
        {/* <img
          src={project?.image}
          width={1080}
          height={720}
          alt={project?.title}
          className="w-full dark:brightness-75 dark:hover:brightness-90 "
        /> */}
        <Safari url="magicui.design" imageSrc={project?.image}  />
      </div>
      <div className="mt-6">
        <span className="p-2 text-xs mb-10 border-[2px] rounded-full">
          #{project?.category}
        </span>
        <h2 className="lg:text-3xl text-xl font-bold mt-5 z-[1000]">
          {project?.title}
        </h2>
        <p className=" mt-2 lg:max-w-5xl lg:text-base text-sm ">
          {project?.details}
        </p>
         <hr className="my-5" />

         <div
  className="prose dark:prose-invert max-w-full"
  dangerouslySetInnerHTML={{ __html: project?.longDetails }}
></div>

        {project?.tags.length > 0 && (
          <div className="flex mt-4">
            <div>
              <div className="flex space-x-2 mt-2 flex-wrap items-center">
                <span className="font-semibold ">Tags:</span>
                {project?.tags.map((tag: string) => (
                  <button
                    key={tag}
                    className="w-fit h-10 px-2 flex text-xs items-center justify-center border rounded-full "
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-6">
          <div className="flex items-center gap-x-2">
            <img
              width={100}
              height={100}
              src={project?.avatar}
              className="w-12 h-12 rounded-lg"
              alt={project?.author}
            />
            <div>
              <p>{project?.author}</p>
              <span className="text-xs leading-tight ">
                Added At: {format(new Date(project?.createdAt), "dd/MM/yyyy")}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-6 gap-x-5">
          <a href={project?.sourceCode} target="_blank">
            <HoverBorderGradient
              containerClassName="rounded-lg"
              as="button"
              className="dark:bg-slate-800 bg-slate-100  text-slate-700 dark:text-slate-100 flex items-center space-x-2"
            >
              <FaGithub className="font-extrabold text-lg mr-2" /> Github
            </HoverBorderGradient>
          </a>
          {project?.liveLink && (
            <a href={project?.liveLink} target="_blank">
              <HoverBorderGradient
                containerClassName="rounded-lg"
                as="button"
                className="dark:bg-indigo-500 bg-indigo-500 text-slate-100 dark:text-slate-100 flex items-center space-x-2"
              >
                <MdOpenInNew className="font-extrabold text-lg mr-2" /> Live
              </HoverBorderGradient>
            </a>
          )}
        </div>
      </div>
    </div>
      }
    </>
  );  
};

export default ProjectPage;
