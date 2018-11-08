export default {
  CHART_IDS: {
    TOP_AUTHOR_BAR_ID: 'topAuthorBarChart',
    TOP_COUNTRY_BAR_ID: 'topCountryBarChart',
    TOP_ACCEPTED_AFFILIATION_BAR_PIE_ID: 'topAcceptedAffiliationBarAndPieChart',
    TOP_SUBMITTED_AFFILIATION_BAR_PIE_ID: 'topSubmittedAffiliationBarAndPieChart',
    SUBMISSION_TIME_SERIES_ID: 'submissionTimeSeriesChart',
    HISTORICAL_ACCEPTANCE_ID: 'historicalAcceptanceChart',
    ACCEPTANCE_BY_TRACK_ID: 'acceptanceByTrackChart',
    TOP_ACCEPTED_AUTHORS_ID: 'topAcceptedAuthorsChart',
    TOP_ACCEPTED_AUTHORS_BY_TRACK_ID: 'topAcceptedAuthorsByTrackChart',
    SUBMISSIONS_WORD_CLOUD_ALL_ID: 'wordCloudAll',
    SUBMISSIONS_WORD_CLOUD_ACCEPTED_ID: 'wordCloudAccepted',
    SUBMISSIONS_WORD_CLOUD_BY_TRACK_ID: 'wordCloudTrack',
  },
  scaleLabelConfig: {
    display: true,
    fontStyle: 'bold',
  },
  BASE_URL: 'https://aqueous-springs-39027.herokuapp.com/polls/',
  DEFAULT_STORE_NAME: 'persist:store',
  VIZ_TYPES: {
    AUTHOR: 'author',
    REVIEW: 'review',
    SUBMISSION: 'submission',
  },
  colorScheme2: ['rgba(231, 76, 60, 0.4)', 'rgba(52, 152, 219, 0.4)'],
  colorScheme3: ['rgba(231, 76, 60, 0.4)', 'rgba(241, 196, 15, 0.4)', 'rgba(52, 152, 219, 0.4)'],
  colorScheme4: ['rgba(231, 76, 60, 0.4)', 'rgba(211, 84, 0, 0.4)', 'rgba(241, 196, 15, 0.4)', 'rgba(52, 152, 219, 0.4)'],
  colorScheme5: ['rgba(231, 76, 60, 0.4)', 'rgba(211, 84, 0, 0.4)', 'rgba(241, 196, 15, 0.4)', 'rgba(26, 188, 156, 0.4)', 'rgba(52, 152, 219, 0.4)'],
  colorScheme6: ['rgba(192, 57, 43, 0.4)', 'rgba(231, 76, 60, 0.4)', 'rgba(211, 84, 0, 0.4)', 'rgba(243, 156, 18, 0.4)', 'rgba(241, 196, 15, 0.4)', 'rgba(22, 160, 133, 0.4)'],
  colorScheme7: ['rgba(192, 57, 43, 0.4)', 'rgba(231, 76, 60, 0.4)', 'rgba(211, 84, 0, 0.4)', 'rgba(243, 156, 18, 0.4)', 'rgba(241, 196, 15, 0.4)', 'rgba(22, 160, 133, 0.4)', 'rgba(46, 204, 113, 0.4)'],
  colorScheme8: ['rgba(192, 57, 43, 0.4)', 'rgba(231, 76, 60, 0.4)', 'rgba(211, 84, 0, 0.4)', 'rgba(243, 156, 18, 0.4)', 'rgba(241, 196, 15, 0.4)', 'rgba(22, 160, 133, 0.4)', 'rgba(46, 204, 113, 0.4)', 'rgba(26, 188, 156, 0.4)'],
  colorScheme9: ['rgba(192, 57, 43, 0.4)', 'rgba(231, 76, 60, 0.4)', 'rgba(211, 84, 0, 0.4)', 'rgba(243, 156, 18, 0.4)', 'rgba(241, 196, 15, 0.4)', 'rgba(22, 160, 133, 0.4)', 'rgba(46, 204, 113, 0.4)', 'rgba(26, 188, 156, 0.4)', 'rgba(52, 152, 219, 0.4)'],
  colorScheme10: ['rgba(192, 57, 43, 0.4)', 'rgba(231, 76, 60, 0.4)', 'rgba(211, 84, 0, 0.4)', 'rgba(243, 156, 18, 0.4)', 'rgba(241, 196, 15, 0.4)', 'rgba(22, 160, 133, 0.4)', 'rgba(46, 204, 113, 0.4)', 'rgba(26, 188, 156, 0.4)', 'rgba(52, 152, 219, 0.4)', 'rgba(155, 89, 182, 0.4)'],
  // The following is the pdf constants in mm
  pdfLeftMargin: 15,
  pdfRightMargin: 15,
  pdfInMM: 210,
  pdfTopMargin: 25,
  pdfTitleFontSize: 20,
  pdfTextFontSize: 12,
  pdfLineHeight: 1.15,
  pdfMMPerPT: 25.4 / 72,
  // The following is the pdf constants in pt instead of mm
  leftMargin: 20 * 72 / 25.4,
  rightMargin: 20 * 72 / 25.4,
  contentWidth: 170 * 72 / 25.4,
  imageWidth: 170 * 72 / 25.4,
  topMargin: 25 * 72 / 25.4,
};
