var arr = new Array();
var count = 0;
function addTask() {
    var title = document.getElementById('title').value;
    arr.push(title);
    console.log(title.value);
    
    var task_list = document.getElementById('task-list');
    var new_row = document.createElement('tr');
    for(var i = 0; i < 3; i++)
    {
        var td = document.createElement('td');
        td = new_row.insertCell(i);
        if(i == 0)
        {
            var title_tag = document.createElement('p');
            var node = document.createTextNode(title);
            title_tag.appendChild(node);
            td.appendChild(title_tag);
        }
        else if(i == 1){
            var update_btn = document.createElement('button');
            var t = document.createTextNode("Edit");
            
            update_btn.appendChild(t);
            td.appendChild(update_btn);
        }
        else {
            var delete_btn = document.createElement('button');
            var t = document.createTextNode("delete");
            delete_btn.setAttribute('onclick', 'removeTask(this)');
            delete_btn.appendChild(t);
            td.appendChild(delete_btn);
        }
    }
    
    console.log(new_row);
    task_list.appendChild(new_row);
}

function removeTask(oButton) {
    var empTab = document.getElementById('task-list');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.
}

function search()
{
    
}