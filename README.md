# React + Vite + JS

ПЛАНИРОВЩИК СОБЫТИЙ  

выпускной проект FRONT SEASONS RDCLR.SCHOOL  

1. макет Red Collar декстоп на 1920px, резиновая верстка от 1280px (требование ТЗ).  

2. главная страница - календарь на текущий месяц:
- сетка календаря на 6 недель, выделены числа текущего месяца;
- более темным цветом выделены предстоящие события (начиная с завтрашнего дня), более светлым - прошедшие события (включая сегодняшний день);
- в правой навигационной части шапки возможна навигация по месяцам. если год отличается от текущего, то он также отображается вместе с месяцем.    


3. главная страница неавторизованного пользователя.  

3.1. в крайней правой навигационной части шапки кнопка "войти" - авторизация.  

3.2. возможность просматривать события:  

3.2.1. открыть и просмотреть карточку прошедщего события.  

3.2.2. открыть и просмотреть карточку будущего события:
- есть возможность авторизации для присоединения к событию (перебрасывает на 3.1.)    

4. главная страница авторизованного пользователя.  

4.1. в крайней правой навигационной части шапки аватар и активная кнопка "+" - создание события.  

4.2. возможность просматривать карточки прошедших событий.  

4.3. возможность просматривать будущие события:
- присоединиться к событию - выходит модальное окно "поздравляем!";
- событие с участием пользователя выделяются в календаре маркером - красной точкой слева;
- выводится карточка будущего события с участием пользователя с возможностью отмены участия в событии;
- выводится доп.модальное окно с вопросом об отмене участия;
- при отмене участия удаляется маркер участия в событии.  

4.4. возможность создавать событие:
- модальное окно - карточка создания события с занесением информации и кнопкой создать (становится активной при заполнении всех полей);
- модальное окно подтверждения создания события;
- созданное событие выделяется красным цветом в календаре
4.4.1. на модальном окне есть возможность отменить создание события:
- выходит модальное окно предупреждения о закрытии окна.  

  
5. модальное окно "что-то пошло не так" с кнопкой перезагрузки браузера.

