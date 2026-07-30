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

  return (
    <div className="container-fluid">
      {/* Header */}

      <div className="results-header">
        <div>
          <h2 className="page-title">Academic Results</h2>

          <p className="page-subtitle">
            View your semester-wise academic performance and grades.
          </p>
        </div>
      </div>

      {/* Summary */}

      <ResultSummaryCards results={results} />

      {/* Table */}

      <ResultTable results={results} />

      {/* Bottom */}

      <div className="results-bottom">
        <ResultSummary results={results} />

        <SemesterInfo results={results} />
      </div>

      {/* Remarks */}

      <RemarksCard results={results} />
    </div>
  );
}
