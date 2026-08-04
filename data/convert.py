import json

with open('words.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 生成JS格式的单词数据
js_code = 'const WORD_DATA = {\n'
for map_id, words in data.items():
    js_code += f'    {map_id}: [\n'
    for word in words:
        # 转义引号
        eng = word['english'].replace('"', '\\"')
        chn = word['chinese'].replace('"', '\\"')
        js_code += f'        {{ id: {word["id"]}, english: "{eng}", chinese: "{chn}" }},\n'
    js_code += '    ],\n'
js_code += '};'

with open('word_data.js', 'w', encoding='utf-8') as f:
    f.write(js_code)

print('Generated word_data.js')
print(f'desert: {len(data["desert"])} words')
print(f'forest: {len(data["forest"])} words')
