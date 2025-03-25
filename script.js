const completedButtons = document.getElementsByClassName("btn-completed");
const currentTime = new Date();
const day = currentTime.toLocaleString('default', { weekday: 'short' });
const month = currentTime.toLocaleString('default', { month: 'short' });
const date = currentTime.getDate();
const year = currentTime.getFullYear();
document.getElementById('day').innerText = day + ',';
document.getElementById('month-year').innerText = month + ' ' + date + ' ' + year;

for (let i = 0; i < completedButtons.length; i++) {
    completedButtons[i].addEventListener("click", function () {
        // console.log('Clicked');
        alert('Board Updated Successfully')
        completedButtons[i].disabled = true;
        const totalTask = parseInt(document.getElementById('total-task').innerText);

        document.getElementById('total-task').innerText = totalTask + 1;

        const taskCount = parseInt(document.getElementById('task-count').innerText);
        // console.log(taskCount);
        document.getElementById('task-count').innerText = taskCount - 1;
        if(document.getElementById('task-count').innerText === '0'){
            alert('Congrates! You have completed All the Current Task');
        }
        const taskName = document.getElementsByClassName('task-name')[i].innerText;
        // console.log(taskName);
        const completedTask = document.createElement('p');
        const text = 'You Have completed the task'
        let hours = currentTime.getHours();
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const seconds = currentTime.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const formattedTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        // console.log(formattedTime);
        completedTask.innerText = text + ' ' + '"' + taskName + '"' + ' ' + 'at' + ' ' + formattedTime;
        document.getElementById('task-list').appendChild(completedTask);
    });
    document.getElementById('clear-history').addEventListener('click', function(){
        document.getElementById('task-list').innerHTML = '';
    })
}

document.getElementById('theme-changer').addEventListener('click', function(){
    var randomNumber = Math.random()*16777215;
    var newRandomColor = '#' + Math.floor(randomNumber).toString(16);
    document.body.style.backgroundColor = newRandomColor;
    // console.log(newRandomColor);
})