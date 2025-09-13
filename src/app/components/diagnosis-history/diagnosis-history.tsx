import Image from "next/image";
import type { DiagnosisHistory } from "@/app/types/types";
import DiagnosticChart from "../diagnostic-chart/diagnostic-chart";

const DiagnosisHistory: React.FC<DiagnosisHistory> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 bg-customWhite shadow-md rounded-lg px-4 py-5">
      <h1 className="font-bold text-2xl text-left drop-shadow-sm">
        Diagnosis History
      </h1>
      <div className="flex flex-row justify-between rounded-lg px-4 py-5 bg-chartBg shadow-md">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-row justify-between w-full">
            <h1 className="font-bold text-lg text-left drop-shadow-sm">
              Blood Pressure
            </h1>
            <div className="flex flex-row items-center gap-4">
              <h1 className="text-sm text-left drop-shadow-sm">
                Last 6 months
              </h1>
              <Image
                src="/ExpandMoreIcon.svg"
                width={10}
                height={10}
                alt="Down Arrow"
                priority={true}
                className="rounded-full"
              />
            </div>
          </div>
          <DiagnosticChart data={data} />
        </div>
        <div className="flex flex-col gap-2 p-2">
          <div className="flex flex-col gap-2 p-2 border-customAsh border-b-2">
            <div className="flex flex-col gap-0">
              <div className="flex flex-row items-center gap-1">
                <div className="w-3 h-3 bg-systolicBg rounded-full"></div>
                <h1 className="font-bold text-md text-left drop-shadow-sm">
                  Systolic
                </h1>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/ArrowUpIcon.svg"
                  width={10}
                  height={5}
                  alt="Down Arrow"
                  priority={true}
                  className="rounded-full pr-1"
                />
                <h1 className="text-sm text-left drop-shadow-sm">{`${data[0].blood_pressure.systolic.levels}`}</h1>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-2">
              <div className="flex flex-col gap-0">
                <div className="flex flex-row items-center gap-1">
                  <div className="w-3 h-3 bg-diastolicBg rounded-full"></div>
                  <h1 className="font-bold text-md text-left drop-shadow-sm">
                    Diastolic
                  </h1>
                </div>
                <h1 className="font-bold text-xl text-left drop-shadow-sm">{`${data[0].blood_pressure.diastolic.value}`}</h1>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/ArrowDownIcon.svg"
                  width={10}
                  height={5}
                  alt="Down Arrow"
                  priority={true}
                  className="rounded-full pr-1"
                />
                <h1 className="text-sm text-left drop-shadow-sm">{`${data[0].blood_pressure.diastolic.levels}`}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-6 justify-evenly">
        <div className="h-64 w-56 bg-respRateBg shadow-md rounded-lg px-3 py-4 flex flex-col gap-4 justify-between ">
          <Image
            src="/LungsIcon.svg"
            width={95}
            height={95}
            alt="Respiratory Rate"
            priority={true}
            className="rounded-full bg-customWhite"
          />
          <div className="flex flex-col gap-0">
            <h1 className="font-bold text-md text-left drop-shadow-sm">
              Respiratory Rate
            </h1>
            <h1 className="font-bold text-3xl text-left drop-shadow-sm">{`${data[0].respiratory_rate.value}bpm`}</h1>
          </div>
          <h1 className="text-sm text-left drop-shadow-sm">{`${data[0].respiratory_rate.levels}`}</h1>
        </div>
        <div className="h-64 w-56 bg-tempBg shadow-md rounded-lg px-3 py-4 flex-col gap-4 justify-between">
          <Image
            src="/ThermometerIcon.svg"
            width={95}
            height={95}
            alt="Temperature"
            priority={true}
            className="rounded-full bg-customWhite"
          />
          <div className="flex flex-col gap-0">
            <h1 className="font-bold text-md text-left drop-shadow-sm">
              Temperature
            </h1>
            <h1 className="font-bold text-3xl text-left drop-shadow-sm">{`${data[0].temperature.value}°F`}</h1>
          </div>
          <h1 className="text-sm text-left drop-shadow-sm">{`${data[0].temperature.levels}`}</h1>
        </div>
        <div className="h-64 w-56 bg-heartRateBg shadow-md rounded-lg px-3 py-4 flex flex-col gap-4 justify-between">
          <Image
            src="/HeartIcon.svg"
            width={95}
            height={95}
            alt="Heart Rate"
            priority={true}
            className="rounded-full bg-customWhite"
          />
          <div className="flex flex-col gap-0">
            <h1 className="font-bold text-md text-left drop-shadow-sm">
              Heart Rate
            </h1>
            <h1 className="font-bold text-3xl text-left drop-shadow-sm">{`${data[0].heart_rate.value}bpm`}</h1>
          </div>
          <div className="flex flex-row">
            <Image
              src="/ArrowDownIcon.svg"
              width={10}
              height={5}
              alt="Down arrow"
              priority={true}
              className="rounded-full pr-1"
            />
            <h1 className="text-sm text-left drop-shadow-sm">{`${data[0].heart_rate.levels}`}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
