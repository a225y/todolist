window.onload = function(){

    //let oAdd = document.querySelector('#add'); 點擊功能
    let add = document.querySelector('input');
    add.addEventListener('keydown',function(e){
        if(e.keyCode === 13){
        let value = document.querySelector('#item').value;
        if(value) addTodoItem(value);

            // 新增元素 start
            function addTodoItem(text) {

                //ul
                let list = document.querySelector('.todo');
                //li
                let item = document.createElement('li');
                item.innerText = text;
                //創建div
                let buttons = document.createElement('div');
                buttons.classList.add('buttons');

                let remove = document.createElement('button');
                remove.innerHTML = "刪除";
                remove.classList.add('del');

                //加入 click 監聽 刪除功能
                remove.addEventListener('click', removeItem);

                let complete = document.createElement('button');
                complete.innerHTML = "完成"
                complete.classList.add('comp');


                //list.appendChild(item);//加入 ul
                list.insertBefore(item, list.childNodes[0]);
                item.appendChild(buttons);//加入 li

                buttons.appendChild(remove);
                buttons.appendChild(complete);

            }
            // 新增元素 End


            // 刪除元素 Start

            function removeItem() {
                let removeLi = this.parentNode.parentNode;
                let removeLiParent = removeLi.parentNode;

                removeLiParent.removeChild(removeLi);

            }


        // 刪除元素 End
        }
    });

    //點擊功能

    // oAdd.addEventListener("click",function(){
        
        
    //     // 新增元素 start
    //     function addTodoItem(text){

    //         //ul
    //         let list = document.querySelector('.todo');
    //         //li
    //         let item = document.createElement('li');
    //         item.innerText = text;
    //         //創建div
    //         let buttons = document.createElement('div');
    //         buttons.classList.add('buttons');

    //         let remove = document.createElement('button');
    //         remove.innerHTML = "刪除";
    //         remove.classList.add('del');

    //         //加入 click 監聽 刪除功能
    //         remove.addEventListener('click',removeItem);

    //         let complete = document.createElement('button');
    //         complete.innerHTML = "完成"
    //         complete.classList.add('comp');


    //         //list.appendChild(item);//加入 ul
    //         list.insertBefore(item,list.childNodes[0]);
    //         item.appendChild(buttons);//加入 li

    //         buttons.appendChild(remove);
    //         buttons.appendChild(complete);

    //     }
    //     // 新增元素 End


    //     // 刪除元素 Start

    //     function removeItem(){
    //         let removeLi = this.parentNode.parentNode;
    //         let removeLiParent = removeLi.parentNode;
            
    //         removeLiParent.removeChild(removeLi);

    //     }


    //     // 刪除元素 End


    // });


//打字功能

    let texts = ['Get Right On It...'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    let oTypeing = document.querySelector('#typeing');

    function typeing() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, index++);
        oTypeing.textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0

        }
        setTimeout(typeing, 400);
    }
    typeing();









}