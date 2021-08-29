class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- Which country took charge as the Chair of Stop TB Partnership Board in 2021? " );
    this.question.position(130, 80);
    this.option1.html("1: UK " );
    this.option1.position(150, 100);
    this.option2.html("2: Australia" );
    this.option2.position(150, 120);
    this.option3.html("3: India " );
    this.option3.position(150, 140);
    this.option4.html("4: Bangladesh" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      
      this.message.html("Thank You, Your Response Has Been Submitted");
      this.message.position(350, 350);


    });
  }
}
