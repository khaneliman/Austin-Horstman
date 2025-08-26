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
