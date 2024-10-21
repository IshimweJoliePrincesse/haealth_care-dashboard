"use client";

import Patients from "./components/patients/patients";
import DetailsPanel from "./components/details-panel/details-panel";
import LabResults from "./components/lab-results/lab-results";
import DiagnosisHistory from "./components/diagnosis-history/diagnosis-history";
import DiagnosticList from "./components/diagnostic-list/diagnostic-list";
import { useEffect, useState } from "react";
import { getAllPatients } from "./utils/axios/api";
import { PatientApiData } from "./types/types";
import { Spinner } from "./components/spinner/spinner";

export default function Home() {
  const [patients, setPatients] = useState<PatientApiData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllPatients();
        setPatients(response);
        setLoading(false);
      } catch (err) {
        alert("Failed to fetch data");
      }
    };
    fetchData();
  }, []);

  console.log(patients);
  const data = patients;

  if (loading === true) {
    return <Spinner />;
  } else if (loading === false && patients?.length > 0) {
    return (
      <main className="w-full h-full bg-customAsh grid grid-cols-[1fr_2fr_1fr] gap-8 mt-8">
        <div className="grid grid-rows-[1fr] h-screen -mt-5 pb-4">
          <Patients patients={data} />
        </div>

        <div className="grid grid-rows-[2fr_1fr] h-screen gap-4 -mt-5 pb-4">
          <DiagnosisHistory data={patients[3].diagnosis_history} />
          <DiagnosticList diagnosis={patients[3].diagnostic_list} />
        </div>
        <div className="grid grid-rows-[2fr_1fr] h-screen gap-4 -mt-4 pb-8">
          <DetailsPanel details={patients[3]} />
          <LabResults labResults={patients[3].lab_results} />
        </div>
      </main>
    );
  }
}
