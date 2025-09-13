import Image from "next/image";
import { PatientCardProps } from "@/app/types/types";

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
  return (
    <div className="flex flex-row gap-2 items-center justify-between px-3 hover:bg-activeState2 hover:cursor-pointer">
      <div className="flex flex-row gap-2 items-center">
        <div>
          <Image
            src={patient.profile_picture}
            width={50}
            height={50}
            alt="Profile Photo"
            priority={true}
            className="rounded-full w-auto h-auto"
          />
        </div>
        <div className="flex flex-col pr-2">
          <h1 className="text-sm font-bold text-left">{patient.name}</h1>
          <h1 className="text-sm text-left">{`${patient.gender}, ${patient.age}`}</h1>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/MoreHorizontal.svg"
          width={18}
          height={4}
          alt="More"
          priority={true}
          className="hover:cursor-pointer hover:bg-activeState w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default PatientCard;
