// src/features/schemaSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReportState {
  reportMetadata: any;
  executiveSummary: any;
  contentAnalysis: any;
  audienceAnalysis: any;
  postingPatternsAnalysis: any;
  topIndustryInfluencersAnalysis: any;
  hashtagPerformanceAnalysis: any;
  influencerComparison: any;
  gapAnalysis: any;
  recommendations: any;
  summaryOfComparisons: any;
}

const initialState: ReportState = {
  reportMetadata: {},
  executiveSummary: {},
  contentAnalysis: {},
  audienceAnalysis: {},
  postingPatternsAnalysis: {},
  topIndustryInfluencersAnalysis: {},
  hashtagPerformanceAnalysis: {},
  influencerComparison: [],
  gapAnalysis: [],
  recommendations: {},
  summaryOfComparisons: "",
};

const schemaSlice = createSlice({
  name: "auditReportSchema",
  initialState,
  reducers: {
    updateReportSchema: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        reportMetadata: action.payload?.reportMetadata || {},
        executiveSummary: action.payload?.executiveSummary || {},
        contentAnalysis: action.payload?.contentAnalysis || {},
        audienceAnalysis: action.payload?.audienceAnalysis || {},
        postingPatternsAnalysis: action.payload?.postingPatternsAnalysis || {},
        topIndustryInfluencersAnalysis: action.payload?.topIndustryInfluencersAnalysis || {},
        hashtagPerformanceAnalysis: action.payload?.hashtagPerformanceAnalysis || {},
        influencerComparison: action.payload?.influencerComparison || [],
        gapAnalysis: action.payload?.gapAnalysis || [],
        recommendations: action.payload?.recommendations || {},
        summaryOfComparisons: action.payload?.summaryOfComparison || '',
      };
    },
  },
});

export const { updateReportSchema } = schemaSlice.actions;
export default schemaSlice.reducer;
