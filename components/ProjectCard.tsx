import Image from "next/image";
interface Props {
  sklh: string;
  almt: string;
  img: string;
  google: string;
}

const ProjectCard = ({ sklh, almt, img, google }: Props) => {
  return (
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none shadow-lg">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">{sklh}</h3>
            <p className='text-gray-600 text-sm'>{almt}</p>
            <div className="mt-1 flex items-center gap-x-4">
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <iframe src={google}  className='pt-10 sm:pb-5 md:pt-10 lg:pb-10 h-full w-full max-h-fit'  ></iframe>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 sm:px-12 sm:py-12">
            <div className="rounded-2xl bg-gray-50 py-1 px-1 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-1 max-h-full max-w-full  ">
            <Image 
              src={img}
              alt=''
              className='flex justify-center object-cover max-h-fit w-full rounded-2xl'
              width={200}
              height={200}
              ></Image>
            </div>
          </div>
        </div>
  );
};

export default ProjectCard;
