import json
import tkinter as tk
from tkinter import filedialog
from tqdm import tqdm

# Словарь для замены значений
replacement_dict = {
    "PHILOSOPHY_ABOUT_CYNICISM": "philosophy_about_cynicism_1",
    "PHILOSOPHY_PHILOSOPHER_BALLER": "philosophy_philosopher_barrel_2",
    "PHILOSOPHY_UNLEASHED_EXISTENCE": "philosophy_unleashed_existence_3",
    "PHILOSOPHY_DIOGENES_EPISODES": "diogenes_funny_episodes_4",
    "PHILOSOPHY_CYNICISM_QUIZ": "cynicism_quiz_5",
    "HISTORY_BEGINNINGS_ROME": "history_beginnings_rome_1",
    "HISTORY_ROMAN_BUILDERS": "history_roman_builders_2",
    "HISTORY_PIONEERS_MILITARY_ORGANIZATION": "history_pioneers_military_organization_3",
    "HISTORY_FALL_ROMAN_EMPIRE": "roman_empire_4",
    "HISTORY_ABOUT_ROMAN_EMPIRE_QUIZ": "roman_empire_quiz_5",
    "ART_MUSEUM_TRIP": "art_museum_trip_1",
    "ART_ABOUT_ART_BASICS_2": "art_basics_1",
    "ART_ABOUT_ART_BASICS_3": "art_basics_2",
    "MATH_FRACTIONS": "math_fractions_1",
    "MATH_ABOUT_PRE_ALGEBRA_2": "pre_algebra_2",
    "MATH_ABOUT_BASIC_MATH_OPERATIONS_1": "basic_math_operations_1",
    "MATH_ABOUT_BASIC_MATH_OPERATIONS_2": "basic_math_operations_2",
    "MATH_ABOUT_BASIC_MATH_OPERATIONS_3": "basic_math_operations_3",
    "MATH_ABOUT_BASIC_MATH_OPERATIONS_4": "basic_math_operations_4",
    "MATH_ABOUT_BASIC_MATH_OPERATIONS_5": "basic_math_operations_5",
    "MATH_ABOUT_BASIC_MATH_OPERATIONS_6": "basic_math_operations_6",
    "MATH_ABOUT_BASIC_MATH_OPERATIONS_7": "basic_math_operations_7",
    "MATH_ABOUT_BASIC_MATH_OPERATIONS_QUIZ": "basic_math_operations_quiz_8",
    "FINANCE_SALES_MANIPULATION": "finance_sales_manipulation_1",
    "PERSONAL_FINANCE_ABOUT_FIRST_STEPS_2": "first_steps_in_finance_2",
    "PERSONAL_FINANCE_ABOUT_FIRST_STEPS_3": "first_steps_in_finance_3",
    "PERSONAL_FINANCE_ABOUT_TAXES_BASICS_1": "taxes_basics_1",
    "PERSONAL_FINANCE_ABOUT_TAXES_BASICS_2": "taxes_basics_2",
    "PERSONAL_FINANCE_ABOUT_TAXES_BASICS_3": "taxes_basics_3",
    "PERSONAL_FINANCE_ABOUT_TAXES_BASICS_QUIZ": "taxes_basics_quiz_4",
    "PERSONAL_FINANCE_ABOUT_TAXES_BASICS_5": "taxes_basics_5"
}

# Рекурсивная функция для поиска и замены значений во всех уровнях структуры
def replace_values_recursive(data):
    if isinstance(data, dict):
        return {key: replace_values_recursive(value) for key, value in data.items()}
    elif isinstance(data, list):
        return [replace_values_recursive(item) for item in data]
    elif isinstance(data, str) and data.startswith("LESSONS_ID."):
        # Убираем префикс и ищем в словаре соответствующее значение
        short_key = data.replace("LESSONS_ID.", "")
        return replacement_dict.get(short_key, data)  # Возвращаем оригинал, если ключ не найден
    else:
        return data

# Открытие файла через диалоговое окно
def select_file():
    root = tk.Tk()
    root.withdraw()  # Скрыть главное окно
    file_path = filedialog.askopenfilename(title="Выберите JSON-файл", filetypes=[("JSON files", "*.json")])
    root.destroy()  # Закрыть окно после выбора файла
    return file_path

def main():
    input_file = select_file()

    if not input_file:
        print("Ошибка: файл не выбран.")
        return

    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Обработка данных с заменой значений
    updated_data = replace_values_recursive(data)

    # Сохранение обновленных данных в тот же файл
    with open(input_file, 'w', encoding='utf-8') as f:
        json.dump(updated_data, f, indent=4, ensure_ascii=False)

    print(f"Файл сохранен с обновленными значениями: {input_file}")

if __name__ == "__main__":
    main()
