import scans from "../data/scans.json";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-semibold">Scan</h1>
            <p className="text-sm text-gray-500">
              Private Assets / <span className="text-teal-600">New Scan</span>
            </p>
          </div>

          <div className="space-x-2">
            <button className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-50">
              Export Report
            </button>
            <button className="px-4 py-2 bg-red-100 text-red-600 rounded-lg">
              Stop Scan
            </button>
          </div>
        </div>

        {/* Project Stats Row */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
          <span>Org: <strong>Project X</strong></span>
          <span>Owner: <strong>Nammagiri</strong></span>
          <span>Total Scans: <strong>100</strong></span>
          <span>Scheduled: <strong>1000</strong></span>
          <span>Rescans: <strong>100</strong></span>
          <span>Failed Scans: <strong>100</strong></span>
        </div>

        {/* Severity Summary Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <SeverityCard title="Critical Severity" count={86} color="red" />
          <SeverityCard title="High Severity" count={16} color="orange" />
          <SeverityCard title="Medium Severity" count={26} color="yellow" />
          <SeverityCard title="Low Severity" count={16} color="blue" />
        </div>

        {/* Search + Controls */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search scans by name or type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-1/2 px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <div className="flex gap-2">
            <button className="px-4 py-2 border rounded-lg bg-white">
              Filter
            </button>
            <button className="px-4 py-2 border rounded-lg bg-white">
              Column
            </button>
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg">
              + New Scan
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                <th className="p-4 text-left">Scan Name</th>
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Progress</th>
                <th className="p-4 text-left">Vulnerability</th>
                <th className="p-4 text-left">Last Scan</th>
              </tr>
            </thead>

            <tbody>
              {scans.map((scan) => (
                <tr
                  key={scan.id}
                  className="border-t hover:bg-gray-50 cursor-pointer"
                  onClick={() => navigate(`/scan/${scan.id}`)}
                >
                  <td className="p-4 font-medium">{scan.name}</td>
                  <td className="p-4 text-gray-600">{scan.type}</td>

                  <td className="p-4">
                    <StatusPill status={scan.status} />
                  </td>

                  <td className="p-4 w-48">
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-teal-500 h-2 rounded-full"
                          style={{ width: `${scan.progress}%` }}
                        />
                      </div>
                      <span>{scan.progress}%</span>
                    </div>
                  </td>

                  <td className="p-4">
                    <VulnBadges vulns={scan.vulns} />
                  </td>

                  <td className="p-4 text-gray-500">
                    {scan.lastScan}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

/* -------------------- Sub Components -------------------- */

function SeverityCard({ title, count, color }) {
  const colors = {
    red: "text-red-600",
    orange: "text-orange-500",
    yellow: "text-yellow-500",
    blue: "text-blue-500",
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <p className={`text-2xl font-semibold mt-2 ${colors[color]}`}>
        {count}
      </p>
    </div>
  );
}

function StatusPill({ status }) {
  const styles = {
    Completed: "bg-green-100 text-green-600",
    Scheduled: "bg-blue-100 text-blue-600",
    Failed: "bg-red-100 text-red-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}

function VulnBadges({ vulns }) {
  return (
    <div className="flex gap-1">
      <Badge color="red" value={vulns.critical} />
      <Badge color="orange" value={vulns.high} />
      <Badge color="yellow" value={vulns.medium} />
      <Badge color="green" value={vulns.low} />
    </div>
  );
}

function Badge({ color, value }) {
  const styles = {
    red: "bg-red-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-400",
    green: "bg-green-500",
  };

  return (
    <span
      className={`px-2 py-1 text-xs text-white rounded ${styles[color]}`}
    >
      {value}
    </span>
  );
}