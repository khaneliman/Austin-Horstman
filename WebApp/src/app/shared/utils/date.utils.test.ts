import { describe, expect, it } from 'bun:test';
import { calculateYearsBetweenDates, formatDateRange, formatIsoDate } from './date.utils';

describe('Date Utilities', () => {
  describe('formatDateRange', () => {
    it('should format date range with start and end dates', () => {
      const result = formatDateRange('2021-01', '2025-04');
      expect(result).toBe('Jan 2021 - Apr 2025');
    });

    it('should format date range with current end date', () => {
      const result = formatDateRange('2021-01');
      expect(result).toBe('Jan 2021 - Current');
    });

    it('should handle dates with full format (YYYY-MM-DD)', () => {
      const result = formatDateRange('2021-01-15', '2025-04-20');
      expect(result).toBe('Jan 2021 - Apr 2025');
    });

    it('should handle dates at year boundaries', () => {
      const result = formatDateRange('2020-12', '2021-01');
      expect(result).toBe('Dec 2020 - Jan 2021');
    });
  });

  describe('calculateYearsBetweenDates', () => {
    it('should calculate years for completed employment', () => {
      // 2017-10 to 2021-01 = 3.25 years (3 years 3 months)
      const result = calculateYearsBetweenDates('2017-10', '2021-01');
      expect(result).toBe('3.3');
    });

    it('should calculate years for another completed employment', () => {
      // 2021-01 to 2025-04 = 4.25 years (4 years 3 months)
      const result = calculateYearsBetweenDates('2021-01', '2025-04');
      expect(result).toBe('4.3');
    });

    it('should calculate years with + suffix for current positions', () => {
      // Any position without end date should have + suffix
      const result = calculateYearsBetweenDates('2025-04');
      // Result will vary based on current date, but should have + suffix
      expect(result).toMatch(/\d+\.\d\+/);
    });

    it('should handle exactly one year', () => {
      const result = calculateYearsBetweenDates('2020-01', '2021-01');
      expect(result).toBe('1');
    });

    it('should handle less than one year', () => {
      // 2020-01 to 2020-06 = 5 months = 0.42 years -> rounds to 0.4
      const result = calculateYearsBetweenDates('2020-01', '2020-06');
      expect(result).toBe('0.4');
    });

    it('should handle two years exactly', () => {
      const result = calculateYearsBetweenDates('2020-01', '2022-01');
      expect(result).toBe('2');
    });

    it('should round to one decimal place', () => {
      // 2015-05 to 2017-10 = 2.42 years (2 years 5 months) -> rounds to 2.4
      const result = calculateYearsBetweenDates('2015-05', '2017-10');
      expect(result).toBe('2.4');
    });

    it('should handle dates with day precision', () => {
      const result = calculateYearsBetweenDates('2020-01-15', '2021-01-15');
      expect(result).toBe('1');
    });

    it('should handle Best Buy employment period', () => {
      // 2013-08 to 2015-07 = 1.92 years (1 year 11 months) -> rounds to 1.9
      const result = calculateYearsBetweenDates('2013-08', '2015-07');
      expect(result).toBe('1.9');
    });
  });

  describe('Real company data validation', () => {
    it('should calculate NRI-NA employment correctly (current)', () => {
      const result = calculateYearsBetweenDates('2025-04');
      expect(result).toContain('+'); // Should have + suffix for current position
    });

    it('should calculate Core BTS employment correctly', () => {
      const result = calculateYearsBetweenDates('2021-01', '2025-04');
      expect(result).toBe('4.3');
    });

    it('should calculate Skyline employment correctly', () => {
      const result = calculateYearsBetweenDates('2017-10', '2021-01');
      expect(result).toBe('3.3');
    });

    it('should calculate West Corporation employment correctly', () => {
      const result = calculateYearsBetweenDates('2015-05', '2017-10');
      expect(result).toBe('2.4');
    });

    it('should calculate Best Buy employment correctly', () => {
      const result = calculateYearsBetweenDates('2013-08', '2015-07');
      expect(result).toBe('1.9');
    });
  });

  describe('Edge cases', () => {
    it('should handle same start and end dates', () => {
      const result = calculateYearsBetweenDates('2020-01', '2020-01');
      expect(result).toBe('0');
    });

    it('should handle dates at month boundaries', () => {
      // 2020-01 to 2020-02 = 1 month = 0.08 years -> rounds to 0.1
      const result = calculateYearsBetweenDates('2020-01', '2020-02');
      expect(result).toBe('0.1');
    });

    it('should handle partial months', () => {
      // When using full dates, partial months are not counted in the month calculation
      const result = calculateYearsBetweenDates('2020-01-15', '2020-02-15');
      expect(result).toBe('0.1');
    });
  });
});

describe('formatIsoDate', () => {
  const validDates = [
    ['2026-08-24', 'August 24, 2026', 'Aug 24'],
    ['2026-09-01', 'September 1, 2026', 'Sep 1'],
    ['2026-12-31', 'December 31, 2026', 'Dec 31'],
    ['2024-02-29', 'February 29, 2024', 'Feb 29'],
    ['2000-02-29', 'February 29, 2000', 'Feb 29'],
  ];
  const invalidDates = [
    '',
    'not-a-date',
    '2026-08',
    '2026-8-24',
    '2026-08-2',
    ' 2026-08-24',
    '2026-08-24 ',
    '2026-08-24T00:00:00Z',
    '2026-02-29',
    '1900-02-29',
    '2026-04-31',
    '2026-13-01',
    '2026-00-01',
    '2026-01-00',
    '2026-01-32',
  ];

  it('defaults to the existing long display', () => {
    expect(formatIsoDate('2026-08-24')).toBe('August 24, 2026');
  });

  for (const timeZone of ['UTC', 'America/Chicago', 'America/Los_Angeles', 'Asia/Tokyo']) {
    it(`preserves calendar dates and rejects invalid input in ${timeZone}`, () => {
      // Separate processes ensure the runtime starts in each target time zone.
      const script = `
        import { formatIsoDate } from ${JSON.stringify(import.meta.resolve('./date.utils'))};
        const valid = ${JSON.stringify(validDates)}.map(([date]) => [
          formatIsoDate(date, 'long'), formatIsoDate(date, 'short')
        ]);
        const invalid = ${JSON.stringify(invalidDates)}.map((date) => {
          try { formatIsoDate(date); return false; }
          catch (error) { return error instanceof RangeError; }
        });
        console.log(JSON.stringify({ valid, invalid }));
      `;
      const result = Bun.spawnSync([process.execPath, '--eval', script], {
        cwd: import.meta.dir,
        env: { ...process.env, TZ: timeZone },
      });
      expect(result.stderr.toString()).toBe('');
      expect(result.exitCode).toBe(0);
      expect(JSON.parse(result.stdout.toString())).toEqual({
        valid: validDates.map(([, long, short]) => [long, short]),
        invalid: invalidDates.map(() => true),
      });
    });
  }
});
