import Image from "next/image";
import { ResultCardProps } from "@/app/types/types";

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  return (
    <div className="flex flex-row gap-2 items-center justify-between px-3 py-3 hover:bg-activeState3 hover:cursor-pointer">
      <div className="flex flex-row gap-2 items-center">
        <div className="flex flex-col pr-2">
          <h1 className="text-sm text-left">{result}</h1>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/DownloadIcon.svg"
          width={18}
          height={4}
          alt="More"
          priority={true}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default ResultCard;
