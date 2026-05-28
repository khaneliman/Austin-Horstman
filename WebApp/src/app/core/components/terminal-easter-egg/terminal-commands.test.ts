import { describe, expect, it } from 'bun:test';
import { runTerminalCommand } from './terminal-commands';

describe('runTerminalCommand', () => {
  it('echoes nothing for blank input', () => {
    expect(runTerminalCommand('   ')).toEqual({ output: [] });
  });

  it('lists commands on help', () => {
    const result = runTerminalCommand('help');
    expect(result.output[0]).toContain('available commands');
    expect(result.output.some((line) => line.includes('sudo hire-me'))).toBe(true);
  });

  it('is whitespace- and case-insensitive', () => {
    expect(runTerminalCommand('  WhoAmI ').output[0]).toContain('austin horstman');
  });

  it('flags a theme toggle', () => {
    expect(runTerminalCommand('theme').toggleTheme).toBe(true);
  });

  it('navigates to contact and closes on sudo hire-me', () => {
    const result = runTerminalCommand('sudo hire-me');
    expect(result.navigate).toBe('/personal/contact');
    expect(result.close).toBe(true);
  });

  it('denies any other sudo invocation', () => {
    expect(runTerminalCommand('sudo rm -rf /').output[0]).toContain('permission denied');
  });

  it('flags clear and close', () => {
    expect(runTerminalCommand('clear').clear).toBe(true);
    expect(runTerminalCommand('exit').close).toBe(true);
    expect(runTerminalCommand(':wq').close).toBe(true);
  });

  it('reports unknown commands', () => {
    expect(runTerminalCommand('foobar').output[0]).toContain('command not found');
  });
});
