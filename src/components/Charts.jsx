'use client';

import AreaChartPlot from "./AreaChartPlot";
import BarChartPlot from "./BarChartPlot";
import PieChartPlot from "./PieChartPlot";
import LineChartPlot from "./LineChartPlot";
import RadarChartPlot from "./RadarChartPlot";

const Charts = () => {
  return (
    <div className="px-4">
      <section className="flex my-4 gap-3">
        <div className="w-1/2 h-[300px] bg-gray-700 rounded">
          <AreaChartPlot />
        </div>
        <div className="w-1/2 h-[300px] bg-gray-700 rounded">
          <BarChartPlot />
        </div>
      </section>
      <section className="flex my-4 gap-2">
        <div className="w-1/3 h-[250px] bg-gray-700 rounded">
          <PieChartPlot />
        </div>
        <div className="w-1/3 h-[250px] bg-gray-700 rounded">
          <LineChartPlot />
        </div>
        <div className="w-1/3 h-[250px] bg-gray-700 rounded">
          <RadarChartPlot />
        </div>
      </section>
    </div>
  );
};

export default Charts;



