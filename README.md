# Цой Данил
## Инструкция к api 

Здесь содержиться информация о том, как работает api, с помощью которой можно шифровать и дешифровать запросы. 

## Объяснение

- Шифровка ведется с помощью кода виженера
- Добавил две проверки. На беке, и на фронте. 
- На фронте, если ожно из полей (word или password) не было заполнено, то кнопки шифрования и дешифрования отключаются. 
- В свою очередь на беке, в случае отправки неверного запроса, будет отправлен результат, сообщающий об ошибке
- Методы кодирования и декодирования указал в services, а их вызовы из controllers

Как использовать программу:

> На странице имеются два инпута: для word (слова) и password (пароля по которому слово будет шифроваться/лешифроваться)
> Снизу под инпутами имеется две соответсвующие кнопки для шифровки и дешифровки
> Далее, под кнопками, идут для поля. Один выводит рещультат операции (закодированное или расшифрованное слово). Другой - сообщение, отсылаемое с бека, в котором сообщается дополнительная информация об операции. Если успешно операция прошла успешно - будет выведена соответствующая информация. В противном случае - что произошла ошибка. Получить ее можно отключив сеть. 

## Дполнительно хотел указать:
Отошел от предложенного в тз варианта, потому что посчитал его неудобным в использовании. Нашел более простой и понятный вариант: все с двумя полями. С проверяющими препадователями вопрос решил: было дано разрешение. Но при том условии, что все будет расписано, и правильно исполнено