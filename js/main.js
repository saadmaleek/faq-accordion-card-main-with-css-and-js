
    const buttons = document.getElementsByClassName('button')
    const contents = document.getElementsByClassName('faq__content-description');
    const icons = document.getElementsByClassName('icon');
    
   
    
    for(let i = 0; i < buttons.length; i++){
        //when one of the buttons are clicked run this function
        buttons[i].onclick = function() {
        //variables
        let panel = this.nextElementSibling;
		let coursePanel = document.getElementsByClassName("faq__content-description");
		let courseAccordion = document.getElementsByClassName("button");
		let courseAccordionActive = document.getElementsByClassName("button button-active");
        let icons = document.getElementsByClassName('icon');

        /*if pannel is already open - minimize*/
        if(panel.style.height){
            //minifies current pannel if already open
            panel.style.height = null;
            //removes the 'active' class as toggle didnt work on browsers minus chrome
            this.classList.remove('button-active');
            icons[i].classList.remove('bx-chevron-up');
            icons[i].classList.add('bx-chevron-down');
        } else {//pannel isnt open...
            //goes through the buttons and removes the 'active' css (+ and -)
            for (let ii = 0; ii < courseAccordionActive.length; ii++){
                courseAccordionActive[ii].classList.remove('button-active');
                icons[ii].classList.remove('bx-chevron-up');
                icons[ii].classList.remove('bx-chevron-down');
                
            }
            //Goes through and removes 'active' from the css, also minifies any 'panels' that might be open
            for(let iii = 0; iii < coursePanel.length; iii++) {
                this.classList.remove('button-active');
                coursePanel[iii].style.height = null;
                icons[iii].classList.remove('bx-chevron-up');
                icons[iii].classList.add('bx-chevron-down');
            }
            //opens the specified pannel
            panel.style.height = panel.scrollHeight + 'px';
            //adds the 'active' addition to the css.
            this.classList.add('button-active')
            icons[i].classList.add('bx-chevron-up')
        }
            

        }//closing to the acc onclick function
    }//closing to the for loop.



