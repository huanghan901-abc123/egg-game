import re

# 读取新的单词数据
with open('word_data.js', 'r', encoding='utf-8') as f:
    new_word_data = f.read()

# 读取game.js
with open('../src/game.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 替换WORD_DATA部分
# 匹配从 "const WORD_DATA = {" 到 "};" 的部分
pattern = r'const WORD_DATA = \{.*?\n\};'
match = re.search(pattern, content, re.DOTALL)

if match:
    print(f'Found WORD_DATA at position {match.start()}-{match.end()}')
    print(f'Old length: {len(match.group())}')
    print(f'New length: {len(new_word_data)}')
    
    # 替换
    new_content = content[:match.start()] + new_word_data + content[match.end():]
    
    # 写回
    with open('../src/game.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print('Successfully replaced WORD_DATA!')
else:
    print('ERROR: WORD_DATA not found!')
