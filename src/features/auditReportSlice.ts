import { createSlice } from "@reduxjs/toolkit";
// import schema from "../utils/schema.json";
// import bill_douglas from "../utils/bill_douglas_2.0.json";
import reportSchema from "../utils/Ryan.json";

// const initialState = {
//   audienceAnalysis: schema?.audienceAnalysis || {},
//   contentAnalysis: schema?.contentAnalysis || {},
//   executiveSummary: schema?.executiveSummary || {},
//   postingPatternsAnalysis: schema?.postingPatternsAnalysis || {},
//   topIndustryInfluencers: schema?.topIndustryInfluencers || {},
//   hashtagPerformanceAnalysis: schema?.hashtagPerformanceAnalysis || {},
//   recommendations: schema?.recommendations || {},
//   profile: schema?.profile || {},
//   reportSubtitle: schema?.reportSubtitle || '',
//   reportTitle: schema?.reportTitle || '',
// }

const initialState = {
  reportMetadata: reportSchema?.reportMetadata || {},
  executiveSummary: reportSchema?.executiveSummary || {},
  contentAnalysis: reportSchema?.contentAnalysis || {},
  audienceAnalysis: reportSchema?.audienceAnalysis || {},
  postingPatternsAnalysis: reportSchema?.postingPatternsAnalysis || {},
  topIndustryInfluencersAnalysis: reportSchema?.topIndustryInfluencersAnalysis || {},
  hashtagPerformanceAnalysis: reportSchema?.hashtagPerformanceAnalysis || {},
  influencerComparison: reportSchema?.influencerComparison || [],
  gapAnalysis: reportSchema?.gapAnalysis || [],
  recommendations: reportSchema?.recommendations || {},
  summaryOfComparisons: reportSchema?.summaryOfComparison || '',
}

const schemaSlice = createSlice({
  name: "schema",
  initialState: initialState,
  reducers: {},
});

export default schemaSlice.reducer;
