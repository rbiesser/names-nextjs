import { SxProps } from "@mui/material";

/**
 * Chart Theme
 *
 * MUI-X produces an SVG with the chart data and properties
 * may be styled according to their CSS class name. Use
 * the browser inspector tool to confirm class names.
 */
const theme: SxProps = {
  // change all labels fontFamily shown on both xAxis and yAxis
  "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
    fontFamily: "Roboto",
  },
  "& .MuiChartsAxis-tick": {
    stroke: "#969696",
    strokeWidth: 0.5,
  },
  "& .MuiChartsAxis-tickLabel": {
    fill: "#969696",
    strokeWidth: 0.5,
  },
  "& .MuiChartsAxis-line": {
    stroke: "#969696",
    strokeWidth: 1,
  },
  "& .MuiChartsLegend-label": {
    fontWeight: "bold",
    color: "#969696",
    strokeWidth: 0.4,
  },
};

export { theme };

// The documentation does not provide examples very well. See
// answer from https://stackoverflow.com/a/77360093
//
// sx={{
//     //change left yAxis label styles
//     "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
//       strokeWidth: "1",
//       fill: "#969696",
//     },
//     // change all labels fontFamily shown on both xAxis and yAxis
//     "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
//       fontFamily: "Roboto",
//     },
//     // change bottom label styles
//     "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
//       strokeWidth: "0.5",
//       fill: "#969696",
//     },
//     // bottomAxis Line Styles
//     "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
//       stroke: "#969696",
//       strokeWidth: 0.4,
//     },
//     // leftAxis Line Styles
//     "& .MuiChartsAxis-left .MuiChartsAxis-line": {
//       stroke: "#969696",
//       strokeWidth: 0.4,
//     },
//     "& .MuiChartsLegend-label": {
//       fontWeight: "bold",
//       color: "#969696",
//       strokeWidth: 0.4,
//     },
//   }}
