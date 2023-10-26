	
	
	var questionState = 0;	
	var quizActive = true;	
		
	var userStats =	[
						0,	//kinky
						0, 	//romantic
						0, 	//fancy 
						0, 	//fun
						0 	//fire
						
					];
	
	var tempStats = userStats; //Holds stat increases relating to user selection
	
	/* QUIZ BUILDING VARIABLES */
	
	//The following array contains all question text elements
	
	var questionText =	[															
							"ถ้ามีไข่ชนิดหนึ่งอยู่ตรงหน้าคุณ  คุณคิดว่ามันเป็นไข่ของสัตว์ชนิดใด?", 	//q1 แก้ปรโย
							"ถ้าคุณสามารถช่วยชีวิตสัตว์ได้หนึ่งชนิด หากโลกจะแตก คุณจะเลือกช่วยสัตว์ชนิดใด?", //q2
							"ถ้าคุณเลือกของวิเศษได้เพียงหนึ่งชิ้น คุณจะเลือกของชิ้นไหน?", 	//q3
							"หากพบว่ามีคนนอนอยู่กลางถนน และบริเวณนั้นมีคุณเพียงคนเดียวคุณจะทำอย่างไร??", 				//q4
							"ถ้าคุณมีเงิน 1,000 บาท อยากให้เป็นแบบไหน?", 			//q5
                            "จู่ ๆ ไฟในห้องก็ดับ คุณเลือกที่จะแก้ปัญหาอย่างไร?", // q6
                            "นามธรรมใดต่อไปนี้ที่คุณจะเลือกนำมายึดไว้ในใจ??"  // q7

							
						];
	
	//The following array contains all answer text elements for each question
	
	var answerText =	[		//question 1 answers													
							[	"ไข่งู", //: kinky
                                "ไข่เต่า", //: romantic 
                                "ไข่ไดโนเสาร์",// fancy
                                "ไข่ไก่", //: fun
                                "ไข่นกกระจอกเทศ", //: fun
                                "ไข่จระเข้" //: fire
								],							
								
								//question 2 answers
							[	"หมาป่า",// : kinky
                                "กระต่าย", //: romantic 
                                "แมว",// : romantic
                                "แกะ", //: fun
                                "กวาง", //: fancy
                                "ม้า" //: fire
                                ],
                              
								
								//question 3 answers
                                [	"ผ้าคลุมล่องหน", //: kinky 
                                    "พรม", //: romantic
                                    "ยาอมตะ",// : fancy
                                    "กระจกวิเศษ", //: fire
                                    "ประตูวิเศษ",// : kinky 
                                    "ไทม์แมชชีน" //: fun
                                    
                                ],
								
								//question 4 answers
                                [	"รีบเดินผ่านไปอย่างเร็ว", //: fire
                                    "เดินย้อนกลับทางเดิม", //: kinky
                                    "โทรศัพท์เรียกรถพยาบาล", //: fun
                                    "เข้าไปเรียกและช่วยเหลือเท่าที่ทำได้",// : romantic 
                                    "กระโดดข้ามคนที่นอนอยู่ 3 ครั้ง", //: fancy
                                    "เข้าไปอุ้มแล้ววิ่งพาไปโรงพยาบาล" //: fancy
                                ],
								
								//question 5 answers
                                [	"แบงก์พัน 1 ใบ", //: fun
                                    "แบงก์ห้าร้อย 2 ใบ",//: fancy
                                    "แบงก์ห้าร้อย 1 ใบกับแบงก์ร้อย 5 ใบ", //: romantic 
                                    "แบงก์ร้อย 10 ใบ ",//: kinky
                                    "แบงก์ยี่สิบ 50 ใบ" ,//: fire
                                    "เหรียญสิบ 100 เหรียญ" //: fire
                                ],
                            //question 6 answers
                            [	"จุดเทียน", //: romantic 
                                "ใช้ไฟจากโซลาร์เซลล์",// : fire
                                "เข้านอน", //: fancy
                                "เปิดไฟฉาย",// : kinky 
                                "โทรศัพท์ขอความช่วยเหลือ",// : fire
                                "แพนิก กระวนกระวาย" //: fun
                        ],
                            //question  7 answers
                             [	"ช่างมัน ใช้ชีวิตตามใจฉัน ",    //: fancy
                                "ทำทุกอย่างที่ตัวเองสบายใจ", //: fire
                                "ความเหมาะสมและถูกกาลเทศะ",// : fun
                                "การเสียสละ รู้จักฟังผู้อื่น ",//: kinky 
                                "ความรัก การเอาใจใส่คนรอบข้าง", //: romantic 
                                "ความยุติธรรม" //: fun
                    ]

						]
	
	//The following array contains all personality stat increments for each answer of every question
	
	var answerValues =	[		//question 1 answer values
							[	[3,0,1,0,2,0], 		
								[0,0,0,1,2,3],		
								[0,3,0,2,1,0],
								[0,2,0,3,0,1],
								[2,1,3,0,0,0],
								[1,0,2,0,3,0] 
							],	
						
								//question 2 answer values
                            [	[3,0,1,0,2,0], 		
								[0,0,0,1,2,3],		
								[0,3,0,2,1,0],
								[0,2,0,3,0,1],
								[2,1,3,0,0,0],
								[1,0,2,0,3,0] 
							],	

								//question 3 answer values
                            [	[3,0,1,0,2,0], 		
								[0,0,0,1,2,3],		
								[0,3,0,2,1,0],
								[0,2,0,3,0,1],
								[2,1,3,0,0,0],
								[1,0,2,0,3,0] 
							],	
								
								//question 4 answer values
                            [	[3,0,1,0,2,0], 		
								[0,0,0,1,2,3],		
								[0,3,0,2,1,0],
								[0,2,0,3,0,1],
								[2,1,3,0,0,0],
								[1,0,2,0,3,0] 
							],	
								
								//question 5 answer  values
                            [	[3,0,1,0,2,0], 		
								[0,0,0,1,2,3],		
								[0,3,0,2,1,0],
								[0,2,0,3,0,1],
								[2,1,3,0,0,0],
								[1,0,2,0,3,0] 
							],	
                            	
                                //question 6 answer values
                            [	[3,0,1,0,2,0], 		
								[0,0,0,1,2,3],		
								[0,3,0,2,1,0],
								[0,2,0,3,0,1],
								[2,1,3,0,0,0],
								[1,0,2,0,3,0] 
							],

                           //question 7 answer values
                            [	[3,0,1,0,2,0], 		
								[0,0,0,1,2,3],		
								[0,3,0,2,1,0],
								[0,2,0,3,0,1],
								[2,1,3,0,0,0],
								[1,0,2,0,3,0] 
							]
						
							
						

						]
	
	

	var results = document.getElementById("results");
	var quiz = document.getElementById("quiz");
	var body = document.body.style;
	var printResult = document.getElementById("topScore");
	var buttonElement = document.getElementById("button");
	

	
	buttonElement.addEventListener("click", changeState);	//Add click event listener to main button
	
	/* This function progresses the user through the quiz */
	
	function changeState() {	
        updatePersonality(); // Adds the values of the tempStats to the userStats
    
        // ทำให้ .iner และ .modal แสดงขึ้น
        
       document.querySelector('.modal').style.display = 'block';
    
        // เปลี่ยนพื้นหลังเว็บเป็นภาพที่คุณต้องการ
        document.body.style.backgroundImage = "url('IMG_3362.GIF')"; 
            
		
								
		
		if (quizActive) {	
			
			/*True while the user has not reached the end of the quiz */
			
			initText(questionState);	//sets up next question based on user's progress through quiz
			questionState++;			//advances progress through quiz
			
			buttonElement.disabled = true; //disables button until user chooses next answer
			buttonElement.innerHTML = "Please select an answer";			
			buttonElement.style.opacity = 0.7;
			
		} else {
			
			/*All questions answered*/
			
			setCustomPage(); //runs set up for result page
		}
	}
	
	/* This function determines the question and answer content based on user progress through the quiz */

	function initText(question) {							
		
		var answerSelection = ""; //text varialbe containting HTML code for the radio buttons' content
		
		/* Creates radio buttons based on user progress through the quiz - current 'id' generation is not w3c compliant*/
		
		for (i = 0; i < answerText[question].length; i++) {		
			
			answerSelection += "<li><input type='radio' name='question" +
			(question+1) + "' onClick='setAnswer("+i+")' id='" + answerText[question][i] + "'><label for='" + answerText[question][i] + "'>" + answerText[question][i] + "</label></li>";
		}
		
		document.getElementById("questions").innerHTML = questionText[question];	//set question text
		document.getElementById("answers").innerHTML = answerSelection;				//set answer text
	}
	
	/* This function is called when a user selects an answer, NOT when answer is submitted */
	
	function setAnswer(input) {
				
		clearTempStats();									//clear tempStats in case user reselects their answer
		
		tempStats = answerValues[questionState-1][input];	//selects personality values based on user selection 
				
		if (questionState < questionText.length) {
			
			/*True while the user has not reached the end of the quiz */
			
			buttonElement.innerHTML = "Continue";
			buttonElement.disabled = false;
			buttonElement.style.opacity = 1;
					
		} else {
			
			/*All questions answered - QUESTION TIME IS OVER!*/
			
			quizActive = false;
			buttonElement.innerHTML = "Display your custom website"
			buttonElement.disabled = false;
			buttonElement.style.opacity = 1;
		}
	}
	
	/* This function sets tempStats to 0 */
	
	function clearTempStats() {
		
		tempStats = [0,0,0,0,0,0];	
	}
	
	/*This function adds the values of the tempStats to the userStats based on user selection */
	
	function updatePersonality() {
		
		for (i = 0; i < userStats.length ; i++) {
			userStats[i] += tempStats[i];
		}
	}
	
	/* This function determines the highest personality value */
	
	function setCustomPage() {
		
		var highestStatPosition = 0;	//highest stat defaults as 'cute'
		
		/* This statement loops through all personality stats and updates highestStatPosition based on a highest stat */
		
		for (i = 1 ; i < userStats.length; i++) {
			
			if (userStats[i] > userStats[highestStatPosition]) {
				highestStatPosition = i;
			}
		}
		
		displayCustomPage(highestStatPosition); //passes the index value of the highest stat discovered
		
		/* Hides the quiz content, shows results content */
		quiz.style.display = "none";		
	}
	
	/* BUILDS WEB PAGE AS PER RESULTS OF THE QUIZ */
	
	/* The following code manipulates the CSS based on the personality results */
			
	function displayCustomPage(personality) {
		switch (personality) {
			
			case 0:	
				results.style.display = "inline-block";
				results.classList.add("cute");
				body.background = "none";
				body.backgroundImage = "url('k.png')";
				
                document.body.style.backgroundSize = "cover"; //ขนาดรูป
				
				//printResult.innerText = "";
				break;
				
			case 1:		
				results.style.display = "inline-block";
				results.classList.add("spooky");
				body.background = "none";
				body.backgroundImage = "url('ro.png')";
                document.body.style.backgroundSize = "cover"; 
				body.backgroundRepeat = "repeat";
				
				//printResult.innerText = "Sex is Romantic ";
				break;
				
			case 2:		
				results.style.display = "inline-block";
				results.classList.add("lame");
				body.background = "none";
				body.backgroundImage = "url('fa.png')";;
                document.body.style.backgroundSize = "cover";
				body.cursor = "url(https://web.archive.org/web/20091027003810/http://ca.geocities.com/EverlastingIllusions/Miscellanous/Cursor9.gif), auto";
				//printResult.innerText = "Sex is Fancy";
				break;
				
			case 3:		
            results.style.display = "inline-block";
            results.classList.add("lame");
            body.background = "none";
            body.backgroundImage = "url('fu.png')";;
            document.body.style.backgroundSize = "cover";
           
            //printResult.innerText = "Sex is FUN";
				break;
				
			case 4:		
                results.style.display = "inline-block";
				results.classList.add("cool");
				body.background = "none";
				body.backgroundImage = "url('fr.png')";
				body.backgroundRepeat = "repeat";
                document.body.style.backgroundSize = "cover"; //ขนาดรูป
		
				//printResult.innerText = "Sex is Fire";
				break;
				

				
			default: 
				document.getElementById("error").style.display = "inline-block";

		}
	}