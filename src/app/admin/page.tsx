import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full flex flex-col md:flex-row">
  {/* Sidebar */}
  <div className="first hidden md:flex w-full md:w-[25%] lg:w-[20%]">
    <div className="h-screen bg-white flex flex-col justify-between">
      {/* Main Menu */}
      <div className="p-4 sm:p-6">
        <h2 className="text-gray-400 text-xs font-semibold uppercase tracking-wide">
          Main Menu
        </h2>
        <nav className="mt-6 space-y-4">
          {/* Dashboard */}
          <a
            href="#"
            className="flex items-center gap-4 px-4 py-3 text-white bg-blue-600 rounded-xl"
          >
            <Image src="/home.png" alt="" width={24} height={24} />
            <span className="font-medium">Dashboard</span>
          </a>
          {/* Car Rent */}
          <a
            href="#"
            className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:bg-gray-100 rounded-xl"
          >
            <Image src="/carlogo.png" alt="" width={24} height={24} />
            <span className="font-medium">Car Rent</span>
          </a>
          {/* Insight */}
          <a
            href="#"
            className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:bg-gray-100 rounded-xl"
          >
            <Image src="/chart.png" alt="" width={24} height={24} />
            <span className="font-medium">Insight</span>
          </a>
          {/* Reimburse */}
          <a
            href="#"
            className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:bg-gray-100 rounded-xl"
          >
            <Image src="/wallet.png" alt="" width={24} height={24} />
            <span className="font-medium">Reimburse</span>
          </a>
          {/* Inbox */}
          <a
            href="#"
            className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:bg-gray-100 rounded-xl"
          >
            <Image src="/message.png" alt="" width={24} height={24} />
            <span className="font-medium">Inbox</span>
          </a>
          {/* Calendar */}
          <a
            href="#"
            className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:bg-gray-100 rounded-xl"
          >
            <Image src="/calendar.png" alt="" width={24} height={24} />
            <span className="font-medium">Calendar</span>
          </a>
        </nav>
      </div>

      {/* Preferences */}
      <div className="p-4 sm:p-6">
        <h2 className="text-gray-400 text-xs font-semibold uppercase tracking-wide">
          Preferences
        </h2>
        <nav className="mt-6 space-y-4">
          {/* Settings */}
          <a
            href="#"
            className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:bg-gray-100 rounded-xl"
          >
            <Image src="/setting.png" alt="" width={24} height={24} />
            <span className="font-medium">Settings</span>
          </a>
          {/* Help & Center */}
          <a
            href="#"
            className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:bg-gray-100 rounded-xl"
          >
            <Image src="/info-circle.png" alt="" width={24} height={24} />
            <span className="font-medium">Help & Center</span>
          </a>
          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-xl">
            <span className="flex items-center gap-4 text-gray-400">
              <Image src="/briefcase.png" alt="" width={22} height={22} />
              <span className="font-medium">Dark Mode</span>
              <Image src="/group.png" alt="" width={68} height={34} />
            </span>
          </div>
        </nav>
      </div>

      {/* Log Out */}
      <div className="p-4 sm:p-6 border-t">
        <a
          href="#"
          className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:bg-gray-100 rounded-xl"
        >
          <Image src="/logout.png" alt="" width={24} height={24} />
          <span className="font-medium">Log Out</span>
        </a>
      </div>
    </div>
  </div>


  {/* Main Content */}
  <div className="sec flex w-full md:w-[75%] lg:w-[80%] bg-[#f6f7f9] p-4 sm:p-6 gap-6 flex-wrap justify-center">
    <Image
      src="/Details Rental.png"
      alt="Details Rental"
      width={534}
      height={836}
      className="w-full md:w-[48%] lg:w-[45%]"
    />
    <div className="w-full md:w-[48%] lg:w-[45%] flex flex-col gap-6">
      <Image
        src="/Top 5 Car Rental.png"
        alt="Top 5 Car Rental"
        width={524}
        height={324}
        className="w-full"
      />
      <Image
        src="/Recent Transaction.png"
        alt="Recent Transaction"
        width={524}
        height={480}
        className="w-full"
      />
    </div>
  </div>
</div>

  );
}
