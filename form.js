const fForm=document.getElementById('first-Form');
const fFormBtn=document.getElementById('first-next-btn')

const sFormBtnBack=document.getElementById('second-next-btn');
var counter=1;
fFormBtn.addEventListener('click',()=>
{
   fForm.classList.add('hidden');

   document.getElementById('second-form').classList.remove('hidden');
   document.getElementById('two').classList.add('active');
//    hiding both second  buttton
   let bothBtnEl=document.getElementById('btn-next-prev').classList.remove('hidden');
//second education unhiding
document.getElementById('second-education-form1').classList.remove('hidden');
//Third education unhiding
document.getElementById('second-education-form2').classList.remove('hidden');
// Hiding hobbbie section
//  document.getElementById('hobbie-main-container').classList.add('hidden');

})

sFormBtnBack.addEventListener('click',()=>
{
    fForm.classList.remove('hidden');
   document.getElementById('second-form').classList.add('hidden');
   document.getElementById('two').classList.remove('active');
//    unhidind both second button
   let bothBtnEl=document.getElementById('btn-next-prev').classList.add('hidden');

   document.getElementById('second-education-form1').classList.add('hidden');

   document.getElementById('second-education-form2').classList.add('hidden');
   for(let i=1;i<3;i++) 
   {
     let idRemove=document.getElementById('second-education-form'+i).classList.add('hidden')
   }
})

// Code for Image Load and dispalay address
let file=document.getElementById('img-tag');
let message=document.getElementById('upload-label');
   //Calling event file is uploaded
file.addEventListener('input',()=>
{
   // if user select file
   if(file.files.length)
   {
      let fileName=file.files[0].name;
      document.getElementById('upload-label').innerHTML=file.files[0].name;
      // console.log(file.files[0].name);
      
   }
});



// code for Add more

// function addEducationElements()
// {
//     if(counter<3)
//     {
//         counter=counter+1;
//     }
//     else
//     {
//         alert('You can only add 3 Education')
//         exit;
//         counter=counter-2;
//     }
// }
function deleteItems(button)
{
    let number=button;
    let idRemove=document.getElementById('second-education-form'+number).classList.add('hidden');

}

sFormBtnBack.addEventListener('click',()=>
{
    for(let i=2;i<=counter;i++)
    {
        let extraRemove=document.getElementById("second-form"+i)
        extraRemove.remove();
        
    }
    counter=counter-2;
   document.getElementsByClassName('form second ').style.display='hidden'
})
// check box for expirence
function validate()
{
   let chkPan=document.getElementById('chkPan');

   
   if(chkPan.checked)
   {
      
         var txtPanMonth=document.getElementById('txtPanMonth');
         txtPanMonth.setAttribute('disabled','disabled');

         var txtPanYear=document.getElementById('txtPanYear');
         txtPanYear.setAttribute('disabled','disabled');
   }
   else
   {
      
            var txtPanMonth=document.getElementById('txtPanMonth');
            txtPanMonth.removeAttribute('disabled','disabled');

            var txtPanYear=document.getElementById('txtPanYear');
            txtPanYear.removeAttribute('disabled','disabled');
   }

}
// 2nd check box for expirence
function validate2()
{
   let chkPan2=document.getElementById('chkPan2');

   
   if(chkPan2.checked)
   {
      
         var txtPanMonth=document.getElementById('txtPanMonth2');
         txtPanMonth.setAttribute('disabled','disabled');

         var txtPanYear=document.getElementById('txtPanYear2');
         txtPanYear.setAttribute('disabled','disabled');
   }
   else
   {
      
            var txtPanMonth=document.getElementById('txtPanMonth2');
            txtPanMonth.removeAttribute('disabled','disabled');

            var txtPanYear=document.getElementById('txtPanYear2');
            txtPanYear.removeAttribute('disabled','disabled');
   }

}
//code for education Next button
function goToExpirence()
{
   
   // 3rd progressive button enable
   document.getElementById('three').classList.add('active');
   // Unhiding Experience form
   let expirenceEl=document.getElementById('Expirence-Form');
   expirenceEl.classList.remove('hidden');

   // hiding education1
   let hideFirstEducation=document.getElementById('second-form');
   hideFirstEducation.classList.add('hidden');
   // hiding education2
   let hideSecondEducation=document.getElementById('second-education-form1');
   hideSecondEducation.classList.add('hidden');
   // hiding education3
   let hideThirdEducation=document.getElementById('second-education-form2');
   hideThirdEducation.classList.add('hidden');

   // Hiding Back & Next Education Button
   document.getElementById('btn-next-prev').classList.add('hidden');
}

// Back Button of expirence buttton......
function goBackFromExperience()
{
   // 3rd progressive button disable
   document.getElementById('three').classList.remove('active');

   // hiding Experience form
   let expirenceEl=document.getElementById('Expirence-Form');
   expirenceEl.classList.add('hidden');

   // unhiding education1
   let hideFirstEducation=document.getElementById('second-form');
   hideFirstEducation.classList.remove('hidden');

   // unhiding education2
   let hideSecondEducation=document.getElementById('second-education-form1');
   hideSecondEducation.classList.remove('hidden');

   // unhiding education3
   let hideThirdEducation=document.getElementById('second-education-form2');
   hideThirdEducation.classList.remove('hidden');

   // unHiding Back & Next Education Button
   document.getElementById('btn-next-prev').classList.remove('hidden');

   // hiding both btn of experience
   document.getElementById('Experience-back-btn').classList.add('hidden');
   document.getElementById('Experience-next-btn').classList.add('hidden');

}
function goNextFromExperience()
{
   //4rd progressive button enable.................
   document.getElementById('four').classList.add('active');
   goToExpirence()
   let expirenceEl=document.getElementById('Expirence-Form');
   expirenceEl.classList.add('hidden');
   document.getElementById('main-container').classList.add('hidden') ;
   document.getElementById('progressive-cont').style.marginTop='380px'
   document.getElementById('template-main-container').classList.remove('hidden');

}

//.......Code for skills..............




// Code for setting values to resume template

function addMore()
{
   pushElement()
   var countNum=1;
   document.getElementById('error').innerHTML="";
   let name=document.getElementById('name').value;

   if(name=='')
   {
      document.getElementById('error').innerHTML="Please Enter value";
   }
   else
   {
      
      let box=document.getElementById('box');
      let li=document.createElement('li');
      li.setAttribute('id','skill'+countNum);

      li.innerHTML=name+" ";
      

      // remove tag
      let a=document.createElement('a');
      a.textContent='X';
      a.href="javascript:void(0)";
      a.className="remove-btn"

      li.appendChild(a);

      let pos=box.firstElementChild;
      if(pos==null)
      {
         box.appendChild(li);
      }
      else
      {
         box.insertBefore(li,pos);
      }

   } 
   document.getElementById('name').value="";
   countNum=1;


   
   
}

let Skills=[];
function pushElement()
{
   // Adding skills in array
  let name=document.getElementById('name').value;
   if(name!="")
   {
      Skills.push(name)
   }
   // Skills.push(document.getElementById('name').value);
   

}
// for skill
function setskilltoTemplate()
{
   console.log(Skills.length);

   let skillEl=document.getElementById('skill-container');
   for(let j=0;j<Skills.length;j++)
   {
      let li=document.createElement('li');
      li.setAttribute('id','ski'+j);
      skillEl.appendChild(li);

   }
      
// Adding skills to template dynamically
   for(let i=0;i<Skills.length;i++)
   {
      let j=Skills[i]
      document.getElementById('ski'+i).innerHTML=j;
   }
}


// -----------------------------------------------------------
// Code for setting hobbies values to resume template

function addMoreHobbie()
{
    pushHobbieEl()
   var countNum1=1;
   document.getElementById('error2').innerHTML="";
   let name1=document.getElementById('name2').value;

   if(name1=='')
   {
      document.getElementById('error2').innerHTML="Please Enter value";
   }
   else
   {
      
      let box=document.getElementById('box2');
      let li=document.createElement('li');
      li.setAttribute('id','hobi'+countNum1);

      li.innerHTML=name1+" ";
      

      // remove tag
      let a=document.createElement('a');
      a.textContent='X';
      a.href="javascript:void(0)";
      a.className="remove-btn"

      li.appendChild(a);

      let pos=box.firstElementChild;
      if(pos==null)
      {
         box.appendChild(li);
      }
      else
      {
         box.insertBefore(li,pos);
      }

   } 
   document.getElementById('name2').value="";
   countNum1=1;   
}

// function for add btn in hobbie
let Hobbie=[];
function pushHobbieEl()
{
   // Adding skills in  Hobbie array
   let name2=document.getElementById('name2').value
   if(name2!="")
   {
      Hobbie.push(name2)
   }
   // Hobbie.push(document.getElementById('name2').value);
   // console.log(Hobbie.length)
   // Hobbie.forEach(ele=>
   //    {
   //       console.log(ele)
   //    })

}

// for hobbie
function SetHobbieToTemplate()
{
   console.log(Hobbie.length);

   let hobbieEl=document.getElementById('Hobbie-container');
   for(let k=0;k<Hobbie.length;k++)
   {
      let h4=document.createElement('h4');
      h4.setAttribute('id','hob'+k);
      hobbieEl.appendChild(h4);

   }
   console.log(document.getElementById('Hobbie-container'))
      
//   Adding skills to template dynamically 

   for(let i=0;i<Hobbie.length;i++)
   {
      let j=Hobbie[i]
      document.getElementById('hob'+i).innerHTML=j;
   }

   let imgAddress=document.getElementById('img-tag').value;
   console.log(imgAddress)
   // document.getElementById('MyImage-profile').setAttribute('src',)

}




let btn=document.querySelector('#box');

// code for removing the tag for skill
btn.addEventListener('click',function(e)
{
   let box=document.getElementById('box');
   let li=e.target.parentNode;

   // Delete skill from array
   let deleteEl2=li.innerHTML
   console.log(deleteEl2)
   let delSkill=deleteEl2.substring(0,deleteEl2.indexOf(' '));
   Skills.forEach(gg=>
      {
         if(gg==delSkill)
         {
            Skills.pop(delSkill)
         }
      })

   box.removeChild(li)
   
})



// -----code for removing the tag for skill-----
let btn2=document.querySelector('#box2');
btn2.addEventListener('click',function(e)
{
   let box=document.getElementById('box2');
   let li=e.target.parentNode;

   // Delete hobbie from array
   let deleteEl=li.innerHTML
   let delHobbie=deleteEl.substring(0,deleteEl.indexOf(' '));
   console.log(delHobbie)
   Hobbie.forEach(eb=>
      {
         if(eb==delHobbie)
         {
            Hobbie.pop(delHobbie)
         }
      })

   // removing from form
   box.removeChild(li)

   
})








// download resume
function downloadResume()
{
   document.getElementById('body-main').style.backgroundColor='white';
   let progressiveEl=document.getElementById('progressive-cont');
   let downloadBtn=document.getElementById('resume-download-btn');
   progressiveEl.classList.add('hidden');
   downloadBtn.classList.add('hidden')
   window.print();
   progressiveEl.classList.remove('hidden');
   downloadBtn.classList.remove('hidden');
   document.getElementById('body-main').style.backgroundColor='';
}
// deleting experience section 
function deleteExp2()
{
   document.getElementById('experience2').classList.add('hidden');
   document.getElementById('addMoreExperience-btn').classList.remove('hidden');
}

// For clicking on addmorebuton
function addMoreExperience()
{
   document.getElementById('experience2').classList.remove('hidden');
   document.getElementById('addMoreExperience-btn').classList.add('hidden');
}



// // image uploading totemplate
// // image uploading totemplate
// function SetHobbieToTemplate()
// {
//    let file=document.getElementById('img-tag').files[0];
//    console.log(file)

//    let reader=new FileReader();
//    reader.readAsDataURL(file)

//    console.log(reader.result);
 
//    // set the image to template

//   reader.onloadend=function()
//   {
//    document.getElementById('MyImage-profile').src=reader.result;
//   };
// }

// Adding Sertificate section

// Enable
function addSertification()
{
   document.getElementById('certificateSec').classList.remove('hidden');
   document.getElementById('addSertification-btn').classList.add('hidden')
   // removing the hided container from template
   document.getElementById('Certificate-Main-Container').classList.remove('hidden')
}
// delete certification
function deletecertificate()
{
   document.getElementById('certificateSec').classList.add('hidden');
   document.getElementById('addSertification-btn').classList.remove('hidden')
      // removing the hided container from template
   document.getElementById('Certificate-Main-Container').classList.add('hidden');

}
// certificate checkBox
function validateCerti()
{
   let chkPan3=document.getElementById('chkPan3');

   
   if(chkPan3.checked)
   {
      
         var txtcertMonth=document.getElementById('certificate-Date');
         txtcertMonth.setAttribute('disabled','disabled');
   }
   else
   {
      
      var txtcertMonth=document.getElementById('certificate-Date');
      txtcertMonth.removeAttribute('disabled','disabled');
           
   }

}