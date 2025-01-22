import re
from deep_translator import GoogleTranslator
from tqdm import tqdm
import tkinter as tk
from tkinter import filedialog
import time  # Для отслеживания времени

# Ключи, которые не нужно переводить
keys_to_exclude = ["type", "questionId", "highlights", "resizeMode", "svgLabel", "imageUrl", "images", "image", "theme", "value"]

escape_sequences = {
    r'\"': '"',
    r'\\': '\\',
    r'\a': '\a',
    r'\b': '\b',
    r'\r': '\r',
    r'\n': '\n',
    r'\s': ' ',
    r'\t': '\t'
}


def translate_text(text, target_language):
    """Перевод текста с помощью Google Translator, с разбивкой на части, если длина превышает лимит."""
    max_length = 5000
    translated_parts = []

    for i in range(0, len(text), max_length):
        part = text[i:i + max_length]
        try:
            translated_part = GoogleTranslator(source='auto', target=target_language).translate(part)
            if translated_part:  # Проверка, что перевод вернулся корректно
                translated_parts.append(translated_part)
            else:
                translated_parts.append(part)  # Оставляем оригинальный текст, если перевод не сработал
        except Exception as e:
            print(f"Ошибка при переводе текста '{part}': {e}")
            return text  # Возвращаем оригинальный текст в случае ошибки

    return ''.join(translated_parts)


def escape_quotes(text, quote_type):
    """Экранирование кавычек внутри текста, избегая лишних слешей."""
    if quote_type == "'":
        return re.sub(r"(?<!\\)'", "\\'", text)  # Только неэкранированные кавычки
    elif quote_type == '"':
        return re.sub(r'(?<!\\)"', '\\"', text)  # Только неэкранированные кавычки
    elif quote_type == "`":
        return re.sub(r"(?<!\\)`", "\\`", text)  # Только неэкранированные кавычки
    return text


def handle_spaces_and_escape_sequences(text):
    """
    Обрабатывает ведущие и завершающие пробелы, а также escape-последовательности.
    Возвращает текст до, основной текст и текст после.
    """
    leading_match = re.match(r"^([\s.,:;\\[\\\"'abnrs\t]+)", text)  # Поиск пробелов или escape-последовательностей в начале
    trailing_match = re.match(r".*?(\s*|\\[\\\"'abnrs\t]+)$", text)  # Поиск пробелов или escape-последовательностей в конце

    leading = leading_match.group(1) if leading_match else ''
    trailing = trailing_match.group(1) if trailing_match else ''

    clean_text = text[len(leading):len(text) - len(trailing)]  # Текст без начала и конца

    return leading, clean_text, trailing


def find_texts_to_translate(js_content):
    """
    Ищем строки для перевода, исключая строки, которые являются значениями ключей из keys_to_exclude.
    """
    pattern = r'(["\'`])((?:\\.|[^\1])*?)\1'  # Ищем строки в кавычках
    matches = list(re.finditer(pattern, js_content))
    texts_to_translate = []

    # Создаём множество для хранения ключей, которые нужно исключить
    excluded_keys = set(keys_to_exclude)
    key_count = 0  # Для подсчета количества встреченных ключей
    processed_lines = 0  # Строки, которые уже обработаны

    # Обрабатываем найденные строки
    for match in tqdm(matches, desc="Обработка строк", unit="строка"):
        quote_type = match.group(1)
        original_text = match.group(2)
        match_position = match.start()

        # Ищем символы перед найденной строкой
        preceding_text = js_content[:match_position]
        preceding_match = re.search(r'(\w+)\s*:\s*$', preceding_text)

        # Проверяем, является ли найденная строка значением исключённого ключа
        if preceding_match:
            key_name = preceding_match.group(1)  # Извлекаем ключ перед строкой
            if key_name in excluded_keys:
                key_count += 1  # Увеличиваем счетчик исключенных ключей
                continue

        # Пропускаем строки, содержащие URL
        if re.search(r'https?://', original_text):
            continue

        # Если строка не исключена, добавляем её в список для перевода
        leading, clean_text, trailing = handle_spaces_and_escape_sequences(original_text)
        texts_to_translate.append((clean_text, quote_type, leading, trailing))

        processed_lines += 1  # Увеличиваем количество обработанных строк

    print(f"\nНайдено ключей для исключения: {key_count}")

    # Возвращаем список для перевода, даже если он пустой
    return texts_to_translate if texts_to_translate else []

def translate_js_file(input_file, target_language):
    """Основная функция перевода JavaScript файла."""
    with open(input_file, 'r', encoding='utf-8') as f:
        js_content = f.read()

    # Ищем все строки для перевода
    texts_to_translate = find_texts_to_translate(js_content)

    if not texts_to_translate:
        print("Нет строк для перевода.")
        return  # Если нет строк для перевода, выходим из функции

    # Перевод строк с прогрессом
    with tqdm(total=len(texts_to_translate), desc="Перевод", unit="строка") as pbar:
        start_time = time.time()  # Начинаем отсчет времени
        for clean_text, quote_type, leading, trailing in texts_to_translate:
            translated_text = translate_text(clean_text, target_language)
            translated_text = escape_quotes(translated_text, quote_type)

            # Восстанавливаем исходную строку с пробелами и escape-последовательностями
            new_text = f'{quote_type}{leading}{translated_text}{trailing}{quote_type}'
            js_content = js_content.replace(f'{quote_type}{leading}{clean_text}{trailing}{quote_type}', new_text)

            # Обновляем прогресс
            pbar.set_postfix({"Скорость": f"{len(texts_to_translate) / (time.time() - start_time):.2f} строк/с"})
            pbar.update(1)

    output_file = f'output_{target_language}.js'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"\nПереведённый файл сохранён как: {output_file}")

def select_file():
    """Выбор файла через диалоговое окно."""
    root = tk.Tk()
    root.withdraw()  # Скрыть главное окно
    file_path = filedialog.askopenfilename(title="Выберите файл .js", filetypes=[("JavaScript files", "*.js")])
    root.destroy()  # Закрыть окно после выбора файла
    return file_path


def main():
    input_file = select_file()

    if not input_file:
        print("Ошибка: файл не выбран.")
        return

    # Доступные языки для перевода
    languages = {
        'es': 'Испанский',
        'fr': 'Французский',
        'pt': 'Португальский',
        'de': 'Немецкий',
        'tr': 'Турецкий',
        'it': 'Итальянский',
        'cs': 'Чешский',
        'ro': 'Румынский',
        'pl': 'Польский',
        'id': 'Индонезийский',
        'ar': 'Арабский'
    }

    # Выбор языка для перевода
    print("Выберите язык для перевода:")
    for code, name in languages.items():
        print(f"{code}: {name}")

    target_language = input("Введите код языка: ").strip()

    if target_language not in languages:
        print("Ошибка: Неверный код языка.")
        return

    # Запуск перевода
    translate_js_file(input_file, target_language)


if __name__ == "__main__":
    main()
