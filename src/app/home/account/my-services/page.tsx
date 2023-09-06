import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full">
      <div className="text-center">
        <Link href={"/home/account/my-services/new"}>
          {" "}
          <Button title="Create New Service" style={{ color: "white" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
