/**
 * Executes a callback if the current time (or a provided mock date) is on or 
 * after May 4th, 2026, in Chicago time. Otherwise, executes a fallback function.
 *
 * @param {Function} callback - The function to execute if the date criteria are met.
 * @param {Function} fallback - The function to execute if the date criteria are not yet met.
 * @param {Date|null} [mockDate=null] - An optional Date object to use for testing 
 * or manual overrides. Defaults to the current system time.
 * @returns {*} The return value of whichever function (callback or fallback) is executed.
 */
export default function switchOnMayFourth(callback, fallback, mockDate = null) {
  const now = mockDate || new Date();

  // Explicitly forcing en-US ensures we get the MM/DD/YYYY format regardless of system locale
  const chicagoTimeStr = now.toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour12: false
  });

  const [month, day, year] = chicagoTimeStr.split('/');
  
  // Logic: It's 2026 and May 4th or later, OR it's any year after 2026
  const is2026MayFourth = (year === '2026' && month === '05' && day >= '04');
  const isAfter2026 = (year > '2026');
  const isMayAfter2026 = (year === '2026' && month > '05');

  if (is2026MayFourth || isAfter2026 || isMayAfter2026) {
    return callback();
  } else {
    return fallback();
  }
}
