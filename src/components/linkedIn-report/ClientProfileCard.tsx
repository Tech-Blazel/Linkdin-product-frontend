import React, { useState } from "react";
import ProfileAvatar from "@/assets/images/profile-avatar.png";
import Bill from "@/assets/images/Bill.png";
import SmartImage from "../SmartImage";
import { toSlugName } from "@/utils/constants";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { supabase } from "@/supabase-client";
import { twMerge } from "tailwind-merge";
import { GiCancel } from "react-icons/gi";

interface ClientProfileCardProps {
  id: number;
  name: string;
  title: string;
  profilePictureUrl?: string;
  varified: boolean;
  presented: boolean;
}

const ClientProfileCard: React.FC<ClientProfileCardProps> = ({
  id,
  name,
  title,
  profilePictureUrl,
  varified,
  presented,
}) => {
  const displayImage = name === "Bill Douglas" ? Bill : profilePictureUrl || "";

  const [varifiedValue, setVarifiedValue] = useState<string>(
    varified ? "yes" : "no"
  );
  const [presentedValue, setPresentedValue] = useState<string>(
    presented ? "yes" : "no"
  );

  const [showOverlay, setShowOverlay] = useState(false);

  // ✅ Update Varified in Supabase
  const handleVarifiedChange = async (val: string) => {
    setVarifiedValue(val);
    const { error } = await supabase
      .from("client_database")
      .update({ varified: val === "yes" })
      .eq("id", id);

    if (error) {
      console.error("Error updating varified:", error.message);
    }
  };

  // ✅ Update Presented in Supabase
  const handlePresentedChange = async (val: string) => {
    setPresentedValue(val);
    const { error } = await supabase
      .from("client_database")
      .update({ presented: val === "yes" })
      .eq("id", id);

    if (error) {
      console.error("Error updating presented:", error.message);
    }
  };

  return (
    <div className="relative group w-full bg-primary-light border-2 border-primary/20 rounded-xl p-4 sm:p-6 flex flex-col items-center mx-auto overflow-hidden">
      {/* 👇 Hover Blur Overlay */}
      <div
        className={twMerge(
          "absolute inset-0 bg-white/80 backdrop-blur-xs flex items-center justify-center transition-all duration-500 z-10",
          showOverlay
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
        )}
      >
        <div className="flex flex-col items-center space-y-4">
          {/* Varified RadioGroup */}
          <div
            className={twMerge(
              "flex items-center justify-between w-[200px] md:w-64 p-2 rounded-md border-2 text-text-primary",
              varifiedValue === "yes"
                ? "border-green-600/20"
                : "border-primary/20"
            )}
          >
            <Label
              className={twMerge(
                "text-sm font-medium",
                varifiedValue === "yes" ? "text-green-600" : "text-primary"
              )}
            >
              Varified
            </Label>
            <RadioGroup
              value={varifiedValue}
              onValueChange={handleVarifiedChange}
              className="flex items-center space-x-4"
            >
              <div className="flex items-center space-x-1">
                <RadioGroupItem
                  value="yes"
                  id={`varified-yes-${name}`}
                  className="border-green-600 checked:bg-green-600 cursor-pointer"
                />
                <Label htmlFor={`varified-yes-${name}`} className="text-sm">
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-1">
                <RadioGroupItem
                  value="no"
                  id={`varified-no-${name}`}
                  className="border-red-500 checked:bg-red-500 cursor-pointer"
                />
                <Label htmlFor={`varified-no-${name}`} className="text-sm">
                  No
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Presented RadioGroup */}
          <div
            className={twMerge(
              "flex items-center justify-between w-[200px] md:w-64 p-2 rounded-md border-2 text-text-primary",
              presentedValue === "yes"
                ? "border-green-600/20"
                : "border-primary/20"
            )}
          >
            <Label
              className={twMerge(
                "text-sm font-medium",
                presentedValue === "yes" ? "text-green-600" : "text-primary"
              )}
            >
              Presented
            </Label>
            <RadioGroup
              value={presentedValue}
              onValueChange={handlePresentedChange}
              className="flex items-center space-x-4"
            >
              <div className="flex items-center space-x-1">
                <RadioGroupItem
                  value="yes"
                  id={`presented-yes-${name}`}
                  className="border-green-600 checked:bg-green-600 cursor-pointer"
                />
                <Label htmlFor={`presented-yes-${name}`} className="text-sm">
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-1">
                <RadioGroupItem
                  value="no"
                  id={`presented-no-${name}`}
                  className="border-red-500 checked:bg-red-500 cursor-pointer"
                />
                <Label htmlFor={`presented-no-${name}`} className="text-sm">
                  No
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* View Report Button */}
          <a
            href={`${window.location.origin}/linkedin-audit-report/${toSlugName(
              name
            )}`}
            target="_blank"
            className="bg-primary hover:bg-primary-dark text-white text-xs md:text-sm px-5 py-2 rounded-md transition-all duration-150 ease-in-out transform hover:scale-105 active:scale-95"
          >
            View Audit Report
          </a>
          <button
            onClick={() => setShowOverlay(false)}
            className="text-sm text-primary underline hover:text-primary-dark absolute block md:hidden top-3 right-3 cursor-pointer"
          >
            <GiCancel className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <SmartImage
        src={displayImage}
        alt={name}
        fallbackSrc={ProfileAvatar}
        className="w-20 h-20 sm:w-28 sm:h-28 bg-white rounded-full object-cover shadow-md mb-3"
      />

      <div className="min-h-[120px] text-center">
        <p className="text-primary font-bold text-xl sm:text-2xl">{name}</p>
        <p className="text-sm sm:text-base text-text-primary font-normal mt-1 line-clamp-3">
          {title}
        </p>
      </div>
      <div className="mt-4 block md:hidden">
        <button
          onClick={() => setShowOverlay(true)}
          className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm transition"
        >
          Show Details
        </button>
      </div>
    </div>
  );
};

export default ClientProfileCard;
