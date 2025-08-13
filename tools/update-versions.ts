// import { execSync } from 'node:child_process';
import path from 'node:path';

// Define the project paths relative to the repo root
const projects = [
    '.',
    'packages/core',
    'packages/angular',
    'packages/react',
    'packages/vue',
    'docs',
    'libs/angular-output-target',
];

// Prompt for the new version
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter the new version: ', (newVersion: string) => {
    for (const projectPath of projects) {
        const absPath = path.resolve(projectPath);
        console.log(`Updating version in ${absPath} to ${newVersion}...`);
        const pkgPath = path.join(absPath, 'package.json');
        try {
            const fs = require('fs');
            const pkgText = fs.readFileSync(pkgPath, 'utf8');
            const updatedText = pkgText.replace(/("version"\s*:\s*")[^"]+(")/, `$1${newVersion}$2`);
            fs.writeFileSync(pkgPath, updatedText, 'utf8');
            console.log(`✅ Updated version in ${pkgPath} to ${newVersion}`);
        } catch (error) {
            console.error(`❌ Failed to update ${pkgPath}:`, error);
            process.exitCode = 1;
        }
    }
    console.log('✅ All specified packages updated successfully.');
    rl.close();
});
