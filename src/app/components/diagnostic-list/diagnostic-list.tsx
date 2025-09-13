import { DiagnosisListProps } from "@/app/types/types";

const DiagnosticList: React.FC<DiagnosisListProps> = ({ diagnosis }) => {
  return (
    <div className="flex flex-col gap-4 bg-customWhite shadow-md rounded-lg px-4 py-4">
      <h1 className="font-bold text-2xl text-left drop-shadow-sm">
        Diagnostic List
      </h1>
      <div className="p-4 bg-customWhite">
        <div className="bg-customAsh rounded-full">
          <table className="w-full table-fixed">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Problem/Diagnosis</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="py-1 overflow-y-auto min-h-48 max-h-80">
          <table className="w-full table-fixed">
            <tbody>
              {diagnosis.map((item, index) => (
                <tr key={index} className="border-b border-customAsh">
                  <td className="px-4 text-left">{item.name}</td>
                  <td className="px-4 text-left">{item.description}</td>
                  <td className="px-4 text-left">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticList;
