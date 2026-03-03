import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import logs from "../data/logs.json";
import findings from "../data/findings.json";
import { useState, useEffect } from "react";

export default function ScanDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Activity");
  const [progress, setProgress] = useState(0);

  // Simulated animation to 45%
 useEffect(() => {
  const randomProgress = Math.floor(Math.random() * 101); // 0–100
  setProgress(randomProgress);
}, []);

  const steps = [
    "Spidering",
    "Mapping",
    "Testing",
    "Validating",
    "Reporting",
  ];
const activeStep = Math.floor((progress / 100) * steps.length);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-lg font-semibold">Scan</h1>
            <p className="text-sm text-gray-500">
              Private Assets / <span className="text-teal-600">New Scan</span>
            </p>
          </div>

          <div className="space-x-2">
            <button className="px-4 py-2 border rounded-lg bg-white">
              Export Report
            </button>
            <button className="px-4 py-2 bg-red-100 text-red-600 rounded-lg">
              Stop Scan
            </button>
          </div>
        </div>

        {/* PROGRESS CARD */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <div className="flex items-center gap-10">
            <ProgressCircle percentage={progress} />

            {/* Steps */}
            <div className="flex flex-1 justify-between items-center">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                    index === activeStep
                        ? "bg-teal-600 text-white border-teal-600"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <p className="text-xs mt-2 text-gray-600">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Metadata */}
          <div className="mt-6 border-t pt-4 flex flex-wrap gap-8 text-sm text-gray-600">
            <span>Scan Type: <strong>Grey Box</strong></span>
            <span>Targets: <strong>google.com</strong></span>
            <span>Started At: <strong>Nov 22, 09:00AM</strong></span>
            <span>Credentials: <strong>2 Active</strong></span>
            <span>Files: <strong>Control.pdf</strong></span>
            <span>Checklists: <strong>40/350</strong></span>
          </div>
        </div>

        {/* LIVE SECTION */}
        <div className="grid grid-cols-2 gap-6">
          {/* Console */}
          <div className="bg-white rounded-xl shadow">
            <div className="border-b px-4 py-2 flex justify-between">
              <h2 className="text-sm font-medium">Live Scan Console</h2>
              <span className="text-xs text-gray-400">Running...</span>
            </div>

            <div className="flex gap-4 px-4 pt-3 text-sm">
              <button
                onClick={() => setActiveTab("Activity")}
                className={`pb-2 ${
                  activeTab === "Activity"
                    ? "border-b-2 border-teal-600 text-teal-600"
                    : "text-gray-500"
                }`}
              >
                Activity Log
              </button>

              <button
                onClick={() => setActiveTab("Verification")}
                className={`pb-2 ${
                  activeTab === "Verification"
                    ? "border-b-2 border-teal-600 text-teal-600"
                    : "text-gray-500"
                }`}
              >
                Verification Loops
              </button>
            </div>

            <div className="bg-black text-green-400 text-xs p-4 h-96 overflow-y-auto rounded-b-xl">
              {logs.map((log, i) => (
                <div key={i} className="mb-1">
                  {log}
                </div>
              ))}
            </div>
          </div>

          {/* Findings */}
          <div className="space-y-4">
            <h2 className="text-sm font-medium">Finding Log</h2>

            {findings.map((f) => (
              <div
                key={f.id}
                className="bg-white rounded-xl shadow p-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      f.severity === "Critical"
                        ? "bg-red-100 text-red-600"
                        : f.severity === "High"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {f.severity}
                  </span>

                  <span className="text-xs text-gray-400">
                    {f.time || "18:45:23"}
                  </span>
                </div>

                <h3 className="font-medium text-sm">{f.title}</h3>
                <p className="text-teal-600 text-xs">{f.endpoint}</p>
                <p className="text-gray-500 text-xs mt-2">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 bg-gray-900 text-white text-xs px-6 py-3 flex justify-between rounded-lg">
          <span>Sub-agents: 0</span>
          <span>Parallel Executions: 2</span>
          <span>Operations: 1</span>
          <span className="space-x-3">
            <span className="text-red-400">Critical 0</span>
            <span className="text-orange-400">High 0</span>
            <span className="text-yellow-400">Medium 0</span>
            <span className="text-green-400">Low 0</span>
          </span>
        </div>
      </main>
    </div>
  );
}

/* ------------------ Animated Progress Component ------------------ */

function ProgressCircle({ percentage = 0 }) {
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-28 h-28">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          stroke="#14b8a6"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 1s ease-in-out",
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-semibold">{percentage}%</span>
        <span className="text-xs text-gray-400">In Progress</span>
      </div>
    </div>
  );
}