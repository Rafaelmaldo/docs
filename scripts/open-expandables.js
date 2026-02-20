(() => {
  const defaults = {
    "body-list": true,
    "body-list-email-options": true,
    "body-individual-reveal": true,
    "body-email-options": true,
    "body-filters": true,
    "body-filters-job-title": true,
    "body-filters-location": true,
    "body-filters-job-company": true,
    "body-filters-past-company": true,
    "body-filters-company-location": true,
    "body-filters-company-industry": true,
    "body-filters-funding-date": true,
    "body-filters-funding-stage": true,
    "body-filters-funding-type": true,
    "body-filters-company-summary": true,
    "response-status": true,
    "response-data": true,
    "response-data-stats": true,
    "response-data-email-options": true,
    "response-data-emails": true,
    "response-data-phones": true,
    "response-data-credits": true,
    "response-data-credits-api-credits": true,
    "response-data-profiles": true,
    "response-credits": true,
    "response-credits-email-credits": true,
    "response-credits-phone-credits": true
  };

  sessionStorage.setItem("user_toggled_expandables", JSON.stringify(defaults));
})();
