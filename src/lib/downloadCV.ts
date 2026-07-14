const CV_PATH = '/Kannan-S-CV.pdf';
const CV_DOWNLOAD_NAME = 'Kannan-S-CV.pdf';

/** Downloads the CV PDF from the public folder. */
export function downloadCV() {
  const link = document.createElement('a');
  link.href = CV_PATH;
  link.download = CV_DOWNLOAD_NAME;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
