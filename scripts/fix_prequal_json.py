import json
from pathlib import Path
from typing import List

root = Path(__file__).resolve().parent.parent
file_path = root / 'assets' / 'data' / 'prequal-content.json'

lines = file_path.read_text(encoding='utf-8').splitlines()
start_idx = None
for idx, line in enumerate(lines):
    if '"id": "part-4"' in line:
        start_idx = idx
        break
if start_idx is None:
    raise SystemExit('Unable to find part-4 boundary')

# Parse the valid head portion up to but excluding the malformed part-4 object
head_lines = lines[:start_idx]
# Replace the trailing comma of part-3 with a closing object and close the array
# Find the last occurrence of "}," before start_idx and replace with "}".
for idx in range(len(head_lines) - 1, -1, -1):
    if head_lines[idx].strip() == '},':
        head_lines[idx] = '    }'
        break
head_text = '\n'.join(head_lines) + '\n  ]\n}\n'
head_json = json.loads(head_text)

# Parse the malformed tail from part-4 onward
parts = []
current = None
in_text = False
text_buffer: List[str] = []

for line in lines[start_idx:]:
    stripped = line.strip()
    if not in_text:
        if stripped.startswith('"id":'):
            if current is not None:
                parts.append(current)
            current = {'text': []}
            current['id'] = stripped.split(':', 1)[1].strip().strip(',').strip().strip('"')
        elif stripped.startswith('"title":'):
            if current is None:
                raise SystemExit('title before id')
            current['title'] = stripped.split(':', 1)[1].strip().strip(',').strip().strip('"')
        elif stripped.startswith('"synopsis":'):
            if current is None:
                raise SystemExit('synopsis before id')
            current['synopsis'] = stripped.split(':', 1)[1].strip().strip(',').strip().strip('"')
        elif stripped.startswith('"text":') and stripped.endswith('['):
            in_text = True
            text_buffer = []
        elif stripped == '},' or stripped == '}':
            if current is not None and not in_text:
                parts.append(current)
                current = None
    else:
        if stripped in [']', '],']:
            in_text = False
            paragraphs: List[str] = []
            current_paragraph: List[str] = []
            for text_line in text_buffer:
                if text_line.strip() == '':
                    if current_paragraph:
                        paragraphs.append('\n'.join(current_paragraph).strip())
                        current_paragraph = []
                else:
                    current_paragraph.append(text_line.rstrip())
            if current_paragraph:
                paragraphs.append('\n'.join(current_paragraph).strip())
            current['text'] = paragraphs
            text_buffer = []
        else:
            # Trim leading indentation used inside the JSON text block
            text_buffer.append(line.rstrip())

if current is not None and current not in parts:
    parts.append(current)

head_json['parts'].extend(parts)
file_path.write_text(json.dumps(head_json, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(f'Fixed JSON written to {file_path}')
