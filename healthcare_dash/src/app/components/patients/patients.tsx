import Image from "next/image";
import PatientCard from "@/app/components/patient-card/patient-card";
import { PatientsData } from "@/app/types/types";

const Patients: React.FC<PatientsData> = ({ patients }) => {
  return (
    <div className="bg-customWhite rounded-lg py-4 flex flex-col gap-8 shadow-md overflow-y-auto">
      <div className="flex flex-row justify-between items-center px-3">
        <h1 className="font-bold text-left text-2xl drop-shadow-sm">
          Patients
        </h1>
        <div className="hover:cursor-pointer">
          <Image
            src="/SearchIcon.svg"
            width={18}
            height={18}
            alt="Search Icon"
            priority={true}
            className="w-auto h-auto"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 overflow-y-auto">
        {patients.map((patient, index) => (
          <PatientCard key={index} patient={patient} />
        ))}
      </div>
    </div>
  );
};
export default Patients;
