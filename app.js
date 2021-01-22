$(() => {
    let inputSearch = $('#search');
    let resultSearch = $('#resultSearch');
    let taskForm = $('#task-form');
    let task = $('#task');
    let deletes = $('.delete-task');
    // let buttonSearch = $('#buttonSearch');
    var searchDiv = $('#searchDiv');
    searchDiv.hide();
    fechTask();
    //input de busqueda
    inputSearch.keyup(() => {
        if (inputSearch.val()) {
            let template = '';
            let search = inputSearch.val();
            $.ajax({
                url: 'task-search.php',
                method: 'POST',
                data: { search },
                success: function(response) {
                    let conver = JSON.parse(response)
                    conver.forEach(data => {
                        template += `<li>${data.name}</li>`
                    });
                    resultSearch.html(template);
                    searchDiv.show();
                }
            })
        } else {
            template = "";
            resultSearch.html(template);
            searchDiv.hide();
        }
    })

    //formulario post
    taskForm.submit(function(e) {
            let name = $('#name').val();
            let description = $('#description').val();
            const objDatas = {
                name,
                description
            };
            $.post('task-add.php', objDatas, function(response) {
                console.log(response);
                if (response) {
                    Swal.fire({
                        title: 'Correcto!',
                        text: `${response}`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    fechTask();
                    taskForm.trigger('reset');
                }

            })
            e.preventDefault();

        })
        //obtener datos de la base de datos para listarlos
    function fechTask() {
        $.get('task-list.php', function(response) {
            let datas = JSON.parse(response);
            let template = '';
            console.log(datas);
            datas.forEach((data) => {
                template += `
                   <tr taskId="${data.id}"> 
                        <td >${data.id}</td> 
                        <td>${data.name}</td> 
                        <td>${data.description}</td> 
                        <td class="text-center">
                        <button class="edit-task btn btn-warning">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                  </svg>
                            </button>
                        <button class="delete-task btn btn-danger" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                      </svg>
                            </button>
                    </td>
                   </tr>
                    `;
            })
            task.html(template);
        })
    }

    //eliminar datos  
    $(document).on('click', '.delete-task', function() {
        let elemets = $(this)[0].parentElement.parentElement;
        let id = $(elemets).attr('taskId');
        $.post('task-delete.php', { id }, function(response) {
            console.log(response);
            Swal.fire({
                title: 'Correcto!',
                text: `${response}`,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            fechTask();
        })
    })

    //listar solo una tarea por id
    let id;
    $(document).on('click', '.edit-task', function() {
        let names = $('#name');
        let descriptions = $('#description');
        let btnAccion = $('#btn-accion');
        let elemets = $(this)[0].parentElement.parentElement;
        id = $(elemets).attr('taskId');
        $.post('task-one.php', { id }, function(response) {
            let data = JSON.parse(response);
            let name = data[0].name;
            let description = data[0].description;
            names.val(name);
            descriptions.val(description);
            btnAccion.html('Editar');
            btnAccion.addClass('btn-warning');
            btnAccion.get(0).type = 'button';
        })
    })

    //editar los datos
    $('#btn-accion').click(function() {
        let name = $('#name').val();
        let btnAccion = $('#btn-accion');
        let description = $('#description').val();
        let data = {
            id,
            name,
            description
        }
        $.post('task-edit.php', data, function(response) {
            console.log(response);
            Swal.fire({
                title: 'Correcto!',
                text: `${response}`,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            taskForm.trigger('reset');
            btnAccion.html('Agregar');
            btnAccion.removeClass('btn-warning');
            btnAccion.get(0).type = 'submit';
            fechTask();
        })
    })
})