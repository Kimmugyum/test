        var numberCheck;
        var check;
        function clickHandler() // 숫자 및 연산자 클릭하면 그 값이 나옴
        {
           var a = document.getElementById("top")
           var b = this.innerText
           a.innerText = a.innerText + b
           var c = document.getElementById("result").onclick
           // =버튼을 누른다음에 숫자를 클릭시 그 숫자가 다시 나와야한다. a.innerText = '' + b
           // 빈칸 + this.innerText 3+3 = 6 그다음 3누르면 3이나와야한다. 결과값클릭후 그 값이나와야한다.
           if(!isNaN(this.innerText)) //숫자 및 연산자 비교
           {
              numberCheck = true; // flag 값
           }
           else{
               numberCheck = false;
           }
           if(check)
           {
               check = false
               a.innerText = `` + b

           }
        }
            
        function reset() //top에 있는 innerText를 초기화
        {
            var a = document.getElementById("top")
            a.innerText = '';     
        }
        function result() // 결과값
        {
            var a = document.getElementById("top")
            var b = a.innerText
            if(numberCheck) // ex) 5+5 = 10, +5- = +5- 맨마지막 기호가 연산자아닐시 결과값이 나옴
            {
                a.innerText = eval(b)
                check = true;
            }
        }

        var number = document.getElementsByClassName("number"); // 숫자에다가 클릭이벤트를 넣기
        for(var i = 0; i < number.length; i++){
            number[i].addEventListener('click', clickHandler);
        }
        
        var AC = document.getElementById("color"); // AC버튼에 reset이벤트 넣기
            AC.addEventListener('click', reset);
        
        var result2 = document.getElementById("result") // = 버튼에 클릭이벤트 넣기
            result2.addEventListener('click', result);

        var operator = document.getElementsByClassName("orange") // 연산자에다가 클릭이벤트넣기
        {
            for(var i =0; i < operator.length; i++)
            {
            operator[i].addEventListener('click', clickHandler)
            }
        }