"use client";
import { useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const session = useSession();
  console.log(session);
  return <div className="flex gap-24">Dashboard</div>;
};

export default Dashboard;
