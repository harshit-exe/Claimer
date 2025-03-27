"use client";
import ClaimHistory from "@/src/components/claimhistory"; // Ensure correct casing
import { apiURL } from "@/src/constants";
import { useAuth } from "@/src/hooks/useAuth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const { user } = useAuth();
  const [claims, setClaims] = useState([]);

  const fetchClaimHistory = async () => {
    try {
      const fe = await fetch(`${apiURL}/api/claims/get/${user?._id}`, {
        method: "GET",
      });

      const data = await fe.json();

      let json = JSON.stringify(data);

      setClaims(json.claims);
      console.log(`Data : ${json}`);
      console.log(`Claim history : ${claims}`);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(async () => {
    await fetchClaimHistory();
  }, []);

  return (
    <div className="flex h-screen bg-gray-800">
      <ClaimHistory claims={claims} />
    </div>
  );
}
