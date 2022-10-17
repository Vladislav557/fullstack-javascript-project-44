#!/usr/bin/env node

import cli from '../src/cli.js';
import brainEven from '../src/brain-even.js';

const name = cli();
brainEven(name);
