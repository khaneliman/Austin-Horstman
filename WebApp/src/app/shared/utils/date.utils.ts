/**
 * Utility functions for date formatting and manipulation
 */

/**
 * Format a date range from start/end date strings
 * @param dateStart Start date in 'YYYY-MM' or 'YYYY-MM-DD' format
 * @param dateEnd End date in 'YYYY-MM' or 'YYYY-MM-DD' format, undefined means current
 * @returns Formatted date range string (e.g., "Jan 2021 - Current" or "May 2015 - Oct 2017")
 */
export function formatDateRange(dateStart: string, dateEnd?: string): string {
  const formatDate = (dateStr: string): string => {
    const parts = dateStr.split('-');
    const year = parts[0] || '2000';
    const month = parts[1] || '01';
    const date = new Date(parseInt(year, 10), parseInt(month, 10) - 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const startFormatted = formatDate(dateStart);
  const endFormatted = dateEnd ? formatDate(dateEnd) : 'Current';

  return `${startFormatted} - ${endFormatted}`;
}

/**
 * Calculate years of experience between two dates
 * @param dateStart Start date in 'YYYY-MM' or 'YYYY-MM-DD' format
 * @param dateEnd End date in 'YYYY-MM' or 'YYYY-MM-DD' format, undefined means current date
 * @returns Formatted years string (e.g., "2.5" or "5+")
 */
export function calculateYearsBetweenDates(dateStart: string, dateEnd?: string): string {
  const parseDate = (dateStr: string): Date => {
    const parts = dateStr.split('-');
    const year = parseInt(parts[0] || '2000', 10);
    const month = parseInt(parts[1] || '01', 10) - 1;
    const day = parseInt(parts[2] || '01', 10);
    return new Date(year, month, day);
  };

  const startDate = parseDate(dateStart);
  const endDate = dateEnd ? parseDate(dateEnd) : new Date();

  // Calculate difference in months
  const monthsDiff =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());

  // Convert to years with one decimal place
  const years = monthsDiff / 12;

  // Round to one decimal place
  const roundedYears = Math.round(years * 10) / 10;

  // For current positions (no end date), add a "+" suffix
  if (!dateEnd) {
    return `${roundedYears}+`;
  }

  return roundedYears.toString();
}
