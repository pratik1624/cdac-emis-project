import { useEffect, useState } from "react";
import { getResults } from "../../api/resultApi";

import ResultSummaryCards from "../../components/results/ResultSummaryCards";
import ResultTable from "../../components/results/ResultTable";
import ResultSummary from "../../components/results/ResultSummary";
import SemesterInfo from "../../components/results/SemesterInfo";
import RemarksCard from "../../components/results/RemarksCard";

import "../../styles/results.css";

export default function AcademicResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await getResults();
        setResults(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load results.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  if (loading) {
    return <h4>Loading Results...</h4>;
  }

  if (error) {
    return <h4>{error}</h4>;
  }

  // =======================
  // Calculated Statistics
  // =======================

  const totalObtained = results.reduce(
    (sum, item) => sum + item.obtainedMarks,
    0
  );

  const totalMarks = results.reduce(
    (sum, item) => sum + item.totalMarks,
    0
  );

  const percentage =
    totalMarks > 0
      ? ((totalObtained * 100) / totalMarks).toFixed(1)
      : "0.0";

  const passedSubjects = results.filter(
    (item) => item.grade !== "F"
  ).length;

  const failedSubjects = results.length - passedSubjects;

  const highestGrade =
    results.find((r) => r.grade === "A+")?.grade ||
    results.find((r) => r.grade === "A")?.grade ||
    results.find((r) => r.grade === "B+")?.grade ||
    results.find((r) => r.grade === "B")?.grade ||
    results.find((r) => r.grade === "C")?.grade ||
    "F";

  return (
    <div className="container-fluid">
      {/* Header */}

      <div className="results-header">
        <div>
          <h2 className="page-title">
            Academic Results
          </h2>

          <p className="page-subtitle">
            View your semester-wise academic performance and grades.
          </p>
        </div>
      </div>

      {/* Summary Cards */}

    <ResultSummaryCards
  percentage={percentage}
  passedSubjects={passedSubjects}
  totalSubjects={results.length}
  totalObtained={totalObtained}
  totalMarks={totalMarks}
  highestGrade={highestGrade}
/>

      {/* Result Table */}

      <ResultTable
        results={results}
      />

      {/* Bottom Section */}

      <div className="results-bottom">

        <ResultSummary
          results={results}
          percentage={percentage}
          passedSubjects={passedSubjects}
          failedSubjects={failedSubjects}
        />

        <SemesterInfo />

      </div>

      {/* Remarks */}

      <RemarksCard
        percentage={percentage}
        highestGrade={highestGrade}
        passedSubjects={passedSubjects}
        totalSubjects={results.length}
      />

    </div>
  );
}
