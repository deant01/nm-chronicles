const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const cwd = process.cwd();
const src = path.join(cwd, 'dist', 'github-pages', 'browser');
const tmp = path.join(os.tmpdir(), `gh-pages-deploy-${Date.now()}`);
fs.mkdirSync(tmp, { recursive: true });
function copy(srcDir, destDir) {
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copy(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
copy(src, tmp);
console.log('Using temp directory:', tmp);
process.chdir(tmp);
execSync('git init -q', { stdio: 'inherit' });
execSync('git config user.name "GitHub Actions"', { stdio: 'inherit' });
execSync('git config user.email "github-actions[bot]@users.noreply.github.com"', { stdio: 'inherit' });
execSync('git remote add origin https://github.com/deant01/nm-chronicles.git', { stdio: 'inherit' });
execSync('git checkout -q -b gh-pages', { stdio: 'inherit' });
execSync('git add -A', { stdio: 'inherit' });
execSync('git commit -q -m "Force deploy develop build"', { stdio: 'inherit' });
execSync('git push --force origin gh-pages', { stdio: 'inherit' });
console.log('Deployed from:', tmp);
