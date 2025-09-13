import { LabResultProps } from "@/app/types/types";
import ResultCard from "../result-card/result-card";

const LabResults: React.FC<LabResultProps> = ({ labResults }) => {
  return (
    <div className="bg-customWhite rounded-lg py-4 flex flex-col gap-4 shadow-md overflow-y-auto min-h-60 mb-4">
      <div className="flex flex-row justify-between items-center px-3">
        <h1 className="font-bold text-left text-2xl drop-shadow-sm">
          Lab Results
        </h1>
      </div>
      <div className="flex flex-col gap-2 pl-2 overflow-y-auto">
        {labResults.map((result, index) => (
          <ResultCard key={index} result={result} />
        ))}
      </div>
    </div>
  );
};

export default LabResults;
