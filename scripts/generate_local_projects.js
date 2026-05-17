import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsDir = path.resolve(__dirname, '../../');
const outputPath = path.resolve(__dirname, '../src/data/generated_projects.json');

const projects = [];
const errors = [];

function main() {
  console.log(`Scanning directory: ${projectsDir}`);
  
  let dirs;
  try {
    dirs = fs.readdirSync(projectsDir, { withFileTypes: true });
  } catch (err) {
    console.error('Error reading projects directory:', err);
    return;
  }

  for (const dir of dirs) {
    if (!dir.isDirectory()) continue;
    
    // Skip the portfolio website itself
    if (dir.name === 'Portfolio_Website') continue;

    const infoPath = path.join(projectsDir, dir.name, 'info.json');
    if (fs.existsSync(infoPath)) {
      try {
        const fileContent = fs.readFileSync(infoPath, 'utf-8');
        const info = JSON.parse(fileContent);
        
        const project = {
          name: info.name || dir.name,
          description: info.description || '',
          github: info.github || '',
          live: info.live || '',
          techStack: Array.isArray(info.techStack) ? info.techStack : [],
          images: Array.isArray(info.images) ? info.images : [],
          category: info.category || '',
          status: info.status || 'Active',
          date: info.date || String(new Date().getFullYear()),
          featured: info.featured === true,
          thumbnail: info.thumbnail || '',
          gradient: info.gradient || 'from-amber-500/20 to-orange-600/5',
          repoName: dir.name,
          stars: 0,
          language: '',
          updatedAt: new Date().toISOString(),
        };

        projects.push(project);
        console.log(`✓ Found info.json in: ${dir.name}`);
      } catch (err) {
        errors.push(`${dir.name}: ${err.message}`);
      }
    }
  }

  // Sort: featured first, then by date/updatedAt
  projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });

  try {
    fs.writeFileSync(outputPath, JSON.stringify(projects, null, 2));
    console.log(`\n✅ Written ${projects.length} projects to ${outputPath}`);
    if (errors.length > 0) {
      console.warn(`⚠️ Errors: \n${errors.join('\n')}`);
    }
  } catch (err) {
    console.error('Failed to write output file:', err);
  }
}

main();
