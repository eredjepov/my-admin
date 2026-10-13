import polyglotI18nProvider from "ra-i18n-polyglot";
import englishMessages from "ra-language-english";
import { mergeTranslations } from "react-admin";
import { raSupabaseEnglishMessages } from "ra-supabase";

export const supportedLocales = [
  { locale: "en", name: "English" },
  { locale: "ru", name: "Русский" },
  { locale: "uz", name: "O‘zbekcha" },
];

const resourceMessages = {
  en: {
    workboard: {
      clinical_workspace: "Clinical workspace",
    },
    resources: {
      patients_info: {
        name: "Patient |||| Patients",
        fields: {
          id: "ID",
          name: "Name",
          surname: "Surname",
          phone: "Phone",
          created_at: "Created",
          updated_at: "Updated",
        },
      },
      visits: {
        name: "Visit |||| Visits",
        fields: {
          id: "ID",
          created_at: "Created",
          patient_id: "Patient",
          appointment: "Appointment",
          comments: "Comments",
          diagnosis_id: "Diagnosis",
          patient_search: "Patient search",
        },
      },
      diagnosis: {
        name: "Diagnosis |||| Diagnoses",
        fields: {
          id: "ID",
          title: "Diagnosis",
          description: "Notes",
          created_at: "Created",
        },
      },
      appointments: {
        name: "Appointment |||| Appointments",
        fields: {
          id: "ID",
          title: "Appointment",
          description: "Description",
          created_at: "Created",
          updated_at: "Updated",
        },
      },
    },
  },
  ru: {
    workboard: {
      clinical_workspace: "Рабочее место клиники",
    },
    resources: {
      patients_info: {
        name: "Пациент |||| Пациенты",
        fields: {
          id: "ID",
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          created_at: "Создано",
          updated_at: "Обновлено",
        },
      },
      visits: {
        name: "Визит |||| Визиты",
        fields: {
          id: "ID",
          created_at: "Создано",
          patient_id: "Пациент",
          appointment: "Вариант приёма",
          comments: "Комментарии",
          diagnosis_id: "Диагноз",
          patient_search: "Поиск пациента",
        },
      },
      diagnosis: {
        name: "Диагноз |||| Диагнозы",
        fields: {
          id: "ID",
          title: "Диагноз",
          description: "Заметки",
          created_at: "Создано",
        },
      },
      appointments: {
        name: "Вариант приёма |||| Варианты приёма",
        fields: {
          id: "ID",
          title: "Вариант приёма",
          description: "Описание",
          created_at: "Создано",
          updated_at: "Обновлено",
        },
      },
    },
  },
  uz: {
    workboard: {
      clinical_workspace: "Klinika ish muhiti",
    },
    resources: {
      patients_info: {
        name: "Bemor |||| Bemorlar",
        fields: {
          id: "ID",
          name: "Ism",
          surname: "Familiya",
          phone: "Telefon",
          created_at: "Yaratilgan",
          updated_at: "Yangilangan",
        },
      },
      visits: {
        name: "Tashrif |||| Tashriflar",
        fields: {
          id: "ID",
          created_at: "Yaratilgan",
          patient_id: "Bemor",
          appointment: "Qabul turi",
          comments: "Izohlar",
          diagnosis_id: "Tashxis",
          patient_search: "Bemorni qidirish",
        },
      },
      diagnosis: {
        name: "Tashxis |||| Tashxislar",
        fields: {
          id: "ID",
          title: "Tashxis",
          description: "Qaydlar",
          created_at: "Yaratilgan",
        },
      },
      appointments: {
        name: "Qabul turi |||| Qabul turlari",
        fields: {
          id: "ID",
          title: "Qabul turi",
          description: "Tavsif",
          created_at: "Yaratilgan",
          updated_at: "Yangilangan",
        },
      },
    },
  },
};

const russianMessages = {
  ra: {
    action: {
      add_filter: "Добавить фильтр",
      add: "Добавить",
      back: "Назад",
      cancel: "Отмена",
      clear_input_value: "Очистить значение",
      clone: "Копировать",
      confirm: "Подтвердить",
      create: "Создать",
      delete: "Удалить",
      edit: "Изменить",
      export: "Экспорт",
      list: "Список",
      refresh: "Обновить",
      remove_filter: "Удалить фильтр",
      reset: "Сбросить",
      reset_password: "Сбросить пароль",
      save: "Сохранить",
      search: "Поиск",
      select_all: "Выбрать всё",
      show: "Просмотр",
      sort: "Сортировка",
      undo: "Отменить",
      close: "Закрыть",
      open_menu: "Открыть меню",
      close_menu: "Закрыть меню",
      update: "Обновить",
      toggle_theme: "Переключить тему",
    },
    page: {
      create: "Создать: %{name}",
      edit: "%{name}: %{recordRepresentation}",
      list: "%{name}",
      loading: "Загрузка",
      not_found: "Страница не найдена",
      show: "%{name}: %{recordRepresentation}",
      empty: "Записей «%{name}» пока нет.",
      invite: "Хотите добавить первую запись?",
      error: "Произошла ошибка",
      access_denied: "Доступ запрещён",
    },
    auth: {
      auth_check_error: "Войдите, чтобы продолжить",
      user_menu: "Профиль",
      username: "Пользователь",
      password: "Пароль",
      confirm_password: "Подтвердите пароль",
      email: "Электронная почта",
      sign_in: "Войти",
      sign_in_error: "Не удалось войти. Проверьте данные",
      logout: "Выйти",
    },
    input: {
      password: {
        toggle_visible: "Скрыть пароль",
        toggle_hidden: "Показать пароль",
      },
    },
    message: {
      are_you_sure: "Вы уверены?",
      delete_content: "Удалить эту запись «%{name}»?",
      invalid_form: "Проверьте заполнение формы",
      loading: "Пожалуйста, подождите",
      no: "Нет",
      yes: "Да",
    },
    navigation: {
      clear_filters: "Сбросить фильтры",
      no_filtered_results: "По заданным фильтрам ничего не найдено",
      no_results: "Записи не найдены",
      page_range_info: "%{offsetBegin}–%{offsetEnd} из %{total}",
      page_rows_per_page: "Строк на странице:",
      first: "Первая страница",
      last: "Последняя страница",
      next: "Следующая страница",
      previous: "Предыдущая страница",
      skip_nav: "Перейти к содержимому",
    },
    notification: {
      updated: "Запись обновлена |||| Обновлено записей: %{smart_count}",
      created: "Запись создана",
      deleted: "Запись удалена |||| Удалено записей: %{smart_count}",
      http_error: "Ошибка связи с сервером",
      canceled: "Действие отменено",
      logged_out: "Сеанс завершён. Войдите снова",
      not_authorized: "Недостаточно прав",
    },
    validation: {
      required: "Обязательное поле",
      minLength: "Минимум символов: %{min}",
      maxLength: "Максимум символов: %{max}",
      number: "Введите число",
      email: "Введите корректный email",
      unique: "Значение должно быть уникальным",
    },
  },
  "ra-supabase": {
    auth: {
      email: "Электронная почта",
      confirm_password: "Подтвердите пароль",
      forgot_password: "Забыли пароль?",
      reset_password: "Сбросить пароль",
      password_reset: "Инструкции для входа отправлены на вашу почту.",
      back_to_login: "Вернуться ко входу",
    },
    reset_password: {
      forgot_password: "Восстановление пароля",
      forgot_password_details: "Введите email для получения инструкций.",
    },
    set_password: {
      new_password: "Новый пароль",
    },
    validation: {
      password_mismatch: "Пароли не совпадают",
    },
  },
};

const uzbekMessages = {
  ra: {
    action: {
      add_filter: "Filtr qo‘shish",
      add: "Qo‘shish",
      back: "Orqaga",
      cancel: "Bekor qilish",
      clear_input_value: "Qiymatni tozalash",
      clone: "Nusxalash",
      confirm: "Tasdiqlash",
      create: "Yaratish",
      delete: "O‘chirish",
      edit: "Tahrirlash",
      export: "Eksport",
      list: "Ro‘yxat",
      refresh: "Yangilash",
      remove_filter: "Filtrni olib tashlash",
      reset: "Tiklash",
      reset_password: "Parolni tiklash",
      save: "Saqlash",
      search: "Qidirish",
      select_all: "Barchasini tanlash",
      show: "Ko‘rish",
      sort: "Saralash",
      undo: "Bekor qilish",
      close: "Yopish",
      open_menu: "Menyuni ochish",
      close_menu: "Menyuni yopish",
      update: "Yangilash",
      toggle_theme: "Mavzuni almashtirish",
    },
    page: {
      create: "%{name} yaratish",
      edit: "%{name}: %{recordRepresentation}",
      list: "%{name}",
      loading: "Yuklanmoqda",
      not_found: "Sahifa topilmadi",
      show: "%{name}: %{recordRepresentation}",
      empty: "%{name} hali mavjud emas.",
      invite: "Birinchi yozuvni qo‘shmoqchimisiz?",
      error: "Xatolik yuz berdi",
      access_denied: "Kirish taqiqlangan",
    },
    auth: {
      auth_check_error: "Davom etish uchun tizimga kiring",
      user_menu: "Profil",
      username: "Foydalanuvchi",
      password: "Parol",
      confirm_password: "Parolni tasdiqlang",
      email: "Elektron pochta",
      sign_in: "Kirish",
      sign_in_error: "Kirish amalga oshmadi. Ma’lumotlarni tekshiring",
      logout: "Chiqish",
    },
    input: {
      password: {
        toggle_visible: "Parolni yashirish",
        toggle_hidden: "Parolni ko‘rsatish",
      },
    },
    message: {
      are_you_sure: "Ishonchingiz komilmi?",
      delete_content: "%{name} yozuvi o‘chirilsinmi?",
      invalid_form: "Forma ma’lumotlarini tekshiring",
      loading: "Iltimos, kuting",
      no: "Yo‘q",
      yes: "Ha",
    },
    navigation: {
      clear_filters: "Filtrlarni tozalash",
      no_filtered_results: "Filtrlar bo‘yicha ma’lumot topilmadi",
      no_results: "Ma’lumot topilmadi",
      page_range_info: "%{offsetBegin}–%{offsetEnd} / %{total}",
      page_rows_per_page: "Sahifadagi qatorlar:",
      first: "Birinchi sahifa",
      last: "Oxirgi sahifa",
      next: "Keyingi sahifa",
      previous: "Oldingi sahifa",
      skip_nav: "Asosiy tarkibga o‘tish",
    },
    notification: {
      updated: "Yozuv yangilandi |||| %{smart_count} ta yozuv yangilandi",
      created: "Yozuv yaratildi",
      deleted: "Yozuv o‘chirildi |||| %{smart_count} ta yozuv o‘chirildi",
      http_error: "Server bilan aloqa xatosi",
      canceled: "Amal bekor qilindi",
      logged_out: "Seans tugadi. Qayta kiring",
      not_authorized: "Ruxsat yetarli emas",
    },
    validation: {
      required: "Majburiy maydon",
      minLength: "Kamida %{min} ta belgi",
      maxLength: "Ko‘pi bilan %{max} ta belgi",
      number: "Raqam kiriting",
      email: "To‘g‘ri email kiriting",
      unique: "Qiymat yagona bo‘lishi kerak",
    },
  },
  "ra-supabase": {
    auth: {
      email: "Elektron pochta",
      confirm_password: "Parolni tasdiqlang",
      forgot_password: "Parolni unutdingizmi?",
      reset_password: "Parolni tiklash",
      password_reset: "Kirish ko‘rsatmalari emailingizga yuborildi.",
      back_to_login: "Kirish sahifasiga qaytish",
    },
    reset_password: {
      forgot_password: "Parolni tiklash",
      forgot_password_details: "Ko‘rsatmalarni olish uchun email kiriting.",
    },
    set_password: {
      new_password: "Yangi parol",
    },
    validation: {
      password_mismatch: "Parollar mos kelmadi",
    },
  },
};

const english = mergeTranslations(
  englishMessages,
  raSupabaseEnglishMessages,
  resourceMessages.en,
);

const messages = {
  en: english,
  ru: mergeTranslations(english, russianMessages, resourceMessages.ru),
  uz: mergeTranslations(english, uzbekMessages, resourceMessages.uz),
};

export const i18nProvider = polyglotI18nProvider(
  (locale) => messages[locale as keyof typeof messages] ?? messages.en,
  "en",
  supportedLocales,
  { allowMissing: true },
);
