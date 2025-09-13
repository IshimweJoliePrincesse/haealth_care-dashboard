import Image from "next/image";
import { PatientDetails } from "@/app/types/types";
import React from "react";

const DetailsPanel: React.FC<PatientDetails> = ({ details }) => {
  function convertDate(inputDate: string) {
    const [month, day, year] = inputDate.split("/");
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }
  const formattedDate = convertDate(details.date_of_birth);

  return (
    <div className="bg-customWhite rounded-lg px-3 py-4 flex flex-col justify-between gap-4 shadow-md -mt-6">
      <div className="flex self-center flex-col items-center gap-2">
        <Image
          src={details.profile_picture}
          width={200}
          height={200}
          alt="Profile Photo"
          priority={true}
          className="rounded-full"
        />
        <h1 className="font-bold text-2xl text-center drop-shadow-sm">
          {details.name}
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center justify-start">
          <div className="hover:cursor-pointer">
            <Image
              src="/BirthIcon.svg"
              width={18}
              height={18}
              alt="Profile Photo"
              priority={true}
              className="rounded-full w-auto h-auto border-customAsh"
            />
          </div>
          <div className="flex flex-col justify-between py-2 pr-2 h-full">
            <h1 className="text-sm text-left">Date Of Birth</h1>
            <h1 className="text-sm text-left font-bold">{formattedDate}</h1>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center justify-start">
          <div className="hover:cursor-pointer">
            <Image
              src="/FemaleIcon.svg"
              width={18}
              height={18}
              alt="Profile Photo"
              priority={true}
              className="rounded-full w-auto h-auto border-customAsh"
            />
          </div>
          <div className="flex flex-col justify-between py-2 pr-2 h-full">
            <h1 className="text-sm text-left">Gender</h1>
            <h1 className="text-sm text-left font-bold">{details.gender}</h1>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center justify-start">
          <div className="hover:cursor-pointer">
            <Image
              src="/PhoneIcon.svg"
              width={18}
              height={18}
              alt="Profile Photo"
              priority={true}
              className="rounded-full w-auto h-auto border-customAsh"
            />
          </div>
          <div className="flex flex-col justify-between py-2 pr-2 h-full">
            <h1 className="text-sm text-left">Contact Info</h1>
            <h1 className="text-sm text-left font-bold">
              {details.phone_number}
            </h1>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center justify-start">
          <div className="hover:cursor-pointer">
            <Image
              src="/PhoneIcon.svg"
              width={18}
              height={18}
              alt="Profile Photo"
              priority={true}
              className="rounded-full w-auto h-auto border-customAsh"
            />
          </div>
          <div className="flex flex-col justify-between py-2 pr-2 h-full">
            <h1 className="text-sm text-left">Emergency Contacts</h1>
            <h1 className="text-sm text-left font-bold">
              {details.emergency_contact}
            </h1>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center justify-start">
          <div className="hover:cursor-pointer">
            <Image
              src="/InsuranceIcon.svg"
              width={18}
              height={18}
              alt="Profile Photo"
              priority={true}
              className="rounded-full w-auto h-auto border-customAsh"
            />
          </div>
          <div className="flex flex-col justify-between py-2 pr-2 h-full">
            <h1 className="text-sm text-left">Insurance Provider</h1>
            <h1 className="text-sm text-left font-bold">
              {details.insurance_type}
            </h1>
          </div>
        </div>
      </div>
      <button
        className="self-center bg-activeState rounded-full py-3 px-4 font-bold"
        type="button"
      >
        Show All Information
      </button>
    </div>
  );
};

export default DetailsPanel;
