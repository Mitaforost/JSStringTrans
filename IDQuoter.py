import re
import tkinter as tk
from tkinter import filedialog
from tqdm import tqdm

# Ключи, которые не нужно оборачивать в кавычки
keys_to_exclude = ["type", "questionId", "highlights", "resizeMode", "svgLabel", "imageUrl", "images"]


def process_js_file(js_content):
    """
    Находит все значения id и оборачивает их в одинарные кавычки, если они не обернуты.
    """
    pattern = r'(\bid\s*:\s*)([^\'"\s][^\s,]*)'  # Поиск ключа id без кавычек
    matches = list(re.finditer(pattern, js_content))

    updated_content = js_content

    for match in tqdm(matches, desc="Обработка id", unit="строка"):
        key_text = match.group(1)
        id_value = match.group(2)

        # Проверка на исключенные ключи
        preceding_match = re.search(r'(\w+)\s*:\s*$', js_content[:match.start()])
        if preceding_match and preceding_match.group(1) in keys_to_exclude:
            continue

        # Заменяем значение id на то же значение, обернутое в одинарные кавычки
        updated_content = updated_content.replace(f'{key_text}{id_value}', f"{key_text}'{id_value}'")

    return updated_content


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

    with open(input_file, 'r', encoding='utf-8') as f:
        js_content = f.read()

    updated_content = process_js_file(js_content)

    output_file = input("Введите имя для выходного файла (например, output.js): ").strip()
    if not output_file.endswith('.js'):
        output_file += '.js'  # Добавляем расширение, если его нет

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(updated_content)

    print(f"Файл сохранен как: {output_file}")

if __name__ == "__main__":
    main()
