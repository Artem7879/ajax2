function getAjax(method,url,func)//метод, адрес, функция-обработчик результатов
{
//1. Создать объект запрос XMLHttpRequest
let request = new XMLHttpRequest();
//2. Настройка запроса (указать адрес и метод отправки)
request.open(method,url,true)
//3. Обработчик события изменения состояния запроса
request.onreadystatechange = function()
{
//4.Отследить состояние - получен ответ от сервера
if(request.readyState == 4 && request.status == 200)
func(request.responseText)//результаты запроса
}
//5. Отправить запрос
request.send()
}



let url = 'X-Gismeteo-Token: 56b30cb255.3443075'
let f = document.forms.form

document.querySelector('#bt').addEventListener('click',function()
{

getAjax('GET', url, function(data)
{

    console.log(data)
    let arr = JSON.parse(data)
    console.log(arr)
    for(let item of arr)
    {
    document.body.innerHTML =`<p>${form.city}:${item.description};  temperature:${$item.temperature};   humidity:${item.humidity} </p>`
    }
    })

})

