(function() 
 {
  var allQuestions = [{
    question: "Python was developed by Guido Van Rossum in:",
    options: ["October 1991", "November 1991", "February 1991", "March 1991"],
    answer: 2
  }, {
    question: "Python is available on which website:",
    options: ["www.python.com", "www.python.org", "www.py.com", "www.cpython.com"],
    answer: 1
  }, {
    question: "The smallest individual unit in a program is:",
    options: ["Keyword", "Identifier", "Operator","Token"],
    answer: 3
  },{
    question: "What is the name of special literal of Python?",
    options: ["pass", "None", "break", "continue"],
    answer: 1
  }, {
    question: "Which of these is not Python's built-in core data types?",
    options: ["List", "Dictionary", "Tuple", "Class"],
    answer: 3
  },{
    question: "Which of the following has the highest level of precedence|?",
    options: ["|", "**", "&", "!"],
    answer: 0
  },{
    question: "What is the output of the code: "abc"+"2abc"?,
    options: ["abcabc", "abc2abc", "abcAbc", "2abcabc"],
    answer: 1
  },{
    question: "Implicit type conversion is also called",
    options: ["Casting", "Type Casting", "Coercion", "Token"],
    answer: 2
  },{
    question: "What is the output of the code: len("CodeWiz123")?",
    options: ["5", "8", "12", "10"],
    answer: 3
  },{
    question: "In Python, the Floating point numbers have precision of _______ digits?",
    options: ["15", "20", "21", "11"],
    answer: 0
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();