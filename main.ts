// Funniest Cat Voicemail Greeting: the greeting a cat records for its own phone.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = 'You\'ve reached Pickles. I can\'t come to the phone because I pushed it off the counter. Leave a message on the floor.';
if ([...line].length > 120) throw new Error('entry is over 120 characters');
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
