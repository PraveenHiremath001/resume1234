
// image uploading totemplate
// image uploading totemplate
function SetImageToTemplate()
{
   let file=document.getElementById('img-tag').files[0];
   console.log(file)

   let reader=new FileReader();
   reader.readAsDataURL(file)

   console.log(reader.result);
 
   // set the image to template

  reader.onloadend=function()
  {
   document.getElementById('MyImage-profile').src=reader.result;
  };
}
// CV generate
function generateCV()
{
    
// Personal Details
    let name=document.getElementById('MyName').value;
    let nameT=document.getElementById('myName')
    nameT.innerHTML=name.toUpperCase();

     let DOB=document.getElementById('DOB').value;

    let Email=document.getElementById('MyEmail').value;
    let EmailT=document.getElementById('EmailT');
    EmailT.innerHTML=Email;

    let Phone=document.getElementById('MyPhoneNo').value;
    let PhoneT=document.getElementById('MobileNo');
    PhoneT.innerHTML=Phone;

    let Address=document.getElementById('MyAddress').value;
    let AddressT=document.getElementById('HomeAddress');
    AddressT.innerHTML=Address;

    let Pincodee=document.getElementById('MyPincode').value; 
    let PincodeT=document.getElementById('MyPinCodes');
    PincodeT.innerHTML=Pincodee;

    let AboutMe=document.getElementById('textAreaT').value;
    let AboutT=document.getElementById('AboutMeT');
    AboutT.innerHTML=AboutMe; 

// //Education Section 1
//    let careerObj=document.getElementById('careerobj-textarea').value;
//    let careerobj_textarea=document.getElementById('CareerObjectiveT');
//    careerobj_textarea.innerHTML=careerObj;

//    let Degree=document.getElementById('degree').value;
//    let FirstSchoolName=document.getElementById('FirstSchoolName').value;
//    let FirstScLoc=document.getElementById('FirstScLoc').value;
//    let FirstEduSM=document.getElementById('FirstEduSM').value;
//    let FirstEduSY=document.getElementById('FirstEduSY').value;
//    let FirstEduEM=document.getElementById('FirstEduEM').value;
//    let FirstEduEY=document.getElementById('FirstEduEY').value;
//    let FieldOfStudy=document.getElementById('FieldOfStudy').value;
//    let PersentCGPA=document.getElementById('PersentCGPA').value;

// //Education Section 2
//     let Degree2=document.getElementById('degree2').value;
//     let SecondSchoolName=document.getElementById('SecondSchoolName').value;
//     let SecondScLoc=document.getElementById('SecondScLoc').value;
//     let SecondEduSM=document.getElementById('SecondEduSM').value;
//     let SecondEduSY=document.getElementById('SecondEduSY').value;
//     let SecondEduEM=document.getElementById('SecondEduEM').value;
//     let SecondEduEY=document.getElementById('SecondEduEY').value;
//     let SecondFieldOfStudy=document.getElementById('SecondFieldOfStudy').value;
//     let SecondPersentCGPA=document.getElementById('SecondPersentCGPA').value;
    

// //Education Section 3
//     let Degree3=document.getElementById('degree3').value;
//     let ThirdSchoolName=document.getElementById('ThirdSchoolName').value;
//     let ThirdScLoc=document.getElementById('ThirdScLoc').value;
//     let ThirdEduSM=document.getElementById('ThirdEduSM').value;
//     let ThirdEduSY=document.getElementById('ThirdEduSY').value;
//     let ThirdEduEM=document.getElementById('ThirdEduEM').value;
//     let ThirdEduEY=document.getElementById('ThirdEduEY').value;
//     let ThirdFieldOfStudy=document.getElementById('ThirdFieldOfStudy').value;
//     let ThirdPersentCGPA=document.getElementById('ThirdPersentCGPA').value;

// // Experience Section 1....
//     let FirstExpPosition=document.getElementById('FirstExpPosition').value;
//     let FirstExpCompNam=document.getElementById('FirstExpCompNam').value;
//     let FirstExpSM=document.getElementById('FirstExpSM').value;
//     let FirstExpSY=document.getElementById('FirstExpSY').value;
//     let txtPanMonth=document.getElementById('txtPanMonth').value;
//     let txtPanYear=document.getElementById('txtPanYear').value

// // Experience Section 2....
//     let SecondExpPosition=document.getElementById('SecondExpPosition').value;
//     let SecondExpCompNam=document.getElementById('SecondExpCompNam').value;
//     let SecondExpSM=document.getElementById('SecondExpSM').value;
//     let SecondExpSY=document.getElementById('SecondExpSY').value;
//     let txtPanMonth1=document.getElementById('txtPanMonth2').value;
//     let txtPanYear2=document.getElementById('txtPanYear2').value;

    getAllChildren();
}
// hiding education 2 and 3
// 2
var setedu1=0;
function hideEdu1(g)
{
    setedu1=g;
}
// 3
var setedu2=0;
function hideEdu2(h)
{
    setedu2=h;
}

function setEducationDetains()
{
    //Education Section 1
   let careerObj=document.getElementById('careerobj-textarea').value;
   let careerobj_textarea=document.getElementById('CareerObjectiveT');
   careerobj_textarea.innerHTML=careerObj;

   let Resume_Title_textarea=document.getElementById('Resume-Title-textarea').value;
   let resume_title=document.getElementById('resume-title');
   resume_title.innerHTML=Resume_Title_textarea;

   let Degree=document.getElementById('degree').value;
   let FirstEduDegreeT=document.getElementById('FirstEduDegree');
   FirstEduDegreeT.innerHTML=Degree;

   let FirstSchoolName=document.getElementById('FirstSchoolName').value;
   let FirstEduSchoolT=document.getElementById('FirstEduSchool');
   FirstEduSchoolT.innerHTML=FirstSchoolName;


   let FirstScLoc=document.getElementById('FirstScLoc').value;
   let FirstEduSM=document.getElementById('FirstEduSM').value;
   let FirstEduSY=document.getElementById('FirstEduSY').value;

   let FirstEduEM=document.getElementById('FirstEduEM').value;

   let FirstEduEY=document.getElementById('FirstEduEY').value;
   let FirstEduYearT=document.getElementById('FirstEduYear')
   FirstEduYearT.innerHTML=FirstEduEY;

   let First_FieldOfStudy=document.getElementById('first-FieldOfStudy').value;
   let First_field_of_study=document.getElementById('First-field-of-study');
   First_field_of_study.innerHTML=First_FieldOfStudy;

   let PersentCGPA=document.getElementById('PersentCGPA').value;
   let F_score_percent=document.getElementById('F-score-percent');
   F_score_percent.innerHTML=PersentCGPA+'%';

//    cal
   let calYear=FirstEduEY-FirstEduSY
   let F_total_year=document.getElementById('F-total-year')
   F_total_year.innerHTML=calYear+' yr';

// Education section 2
 if(setedu1!=1)
 {

 
    let Degree2=document.getElementById('degree2').value;
    let SecondEduDegreeT=document.getElementById('SecondEduDegree');
    SecondEduDegreeT.innerHTML=Degree2;
    

    let SecondSchoolName=document.getElementById('SecondSchoolName').value;
    let SecondEduSchoolT=document.getElementById('SecondEduSchool');
    SecondEduSchoolT.innerHTML=SecondSchoolName;

    let SecondScLoc=document.getElementById('SecondScLoc').value;
    let SecondEduSM=document.getElementById('SecondEduSM').value;
    let SecondEduSY=document.getElementById('SecondEduSY').value;
    let SecondEduEM=document.getElementById('SecondEduEM').value;

    let SecondEduEY=document.getElementById('SecondEduEY').value;
    let SecondEduYearT=document.getElementById('SecondEduYear');
    SecondEduYearT.innerHTML=SecondEduEY;   

    let SecondFieldOfStudy=document.getElementById('SecondFieldOfStudy').value;
    let second_field_of_study=document.getElementById('second-field-of-study');
    second_field_of_study.innerHTML=SecondFieldOfStudy;

    let SecondPersentCGPA=document.getElementById('SecondPersentCGPA').value;
    let S_score_percent=document.getElementById('S-score-percent');
    S_score_percent.innerHTML=SecondPersentCGPA+'%';
// cal
    let SecondcalYear=SecondEduEY-SecondEduSY
    let S_total_year=document.getElementById('S-total-year')
    S_total_year.innerHTML=SecondcalYear+' yr';
 }
// Education Section 3

if(setedu2!=1)
{


    let Degree3=document.getElementById('degree3').value;
    let ThirdEduDegree=document.getElementById('ThirdEduDegree');
    ThirdEduDegree.innerHTML=Degree3;
     
    let ThirdSchoolName=document.getElementById('ThirdSchoolName').value;
    let ThirdEduSchool=document.getElementById('ThirdEduSchool');
    ThirdEduSchool.innerHTML=ThirdSchoolName;

    let ThirdScLoc=document.getElementById('ThirdScLoc').value;
    let ThirdEduSM=document.getElementById('ThirdEduSM').value;
    let ThirdEduSY=document.getElementById('ThirdEduSY').value;
    let ThirdEduEM=document.getElementById('ThirdEduEM').value;

    let ThirdEduEY=document.getElementById('ThirdEduEY').value;
    let ThirdEduYear=document.getElementById('ThirdEduYear');
    ThirdEduYear.innerHTML=ThirdEduEY;


    let ThirdFieldOfStudy=document.getElementById('ThirdFieldOfStudy').value;
    let Third_field_of_study=document.getElementById('Third-field-of-study');
    Third_field_of_study.innerHTML=ThirdFieldOfStudy;

    let ThirdPersentCGPA=document.getElementById('ThirdPersentCGPA').value;
    let T_score_percent=document.getElementById('T-score-percent');
    T_score_percent.innerHTML=ThirdPersentCGPA+'%';
// cal
    let ThirdcalYear=ThirdEduEY-ThirdEduSY
    let T_total_year=document.getElementById('T-total-year')
    T_total_year.innerHTML=ThirdcalYear+' yr';
}

// Experience section----------
    let FirstExpPosition=document.getElementById('FirstExpPosition').value;
    let First_Exp_Pos=document.getElementById('First-Exp-Pos');
    First_Exp_Pos.innerHTML=FirstExpPosition;

    let FirstExpCompNam=document.getElementById('FirstExpCompNam').value;
    let First_Company_Name=document.getElementById('First-Company-Name');
    First_Company_Name.innerHTML=FirstExpCompNam;

    let FirstExpSM=document.getElementById('FirstExpSM').value;
    let FirstExpSY=document.getElementById('FirstExpSY').value;
    let txtPanMonth=document.getElementById('txtPanMonth').value;
    let txtPanYear=document.getElementById('txtPanYear').value
    


}
// hiding experience when function called
var set=0;
function setLog(nu)
{
    set=nu;
}

function setExperience(no)
{
 // Experience section- 1---------
    let FirstExpPosition=document.getElementById('FirstExpPosition').value.toUpperCase();
    let First_Exp_Pos=document.getElementById('First-Exp-Pos');
    First_Exp_Pos.innerHTML=FirstExpPosition;

    let FirstExpCompNam=document.getElementById('FirstExpCompNam').value;
    let First_Company_Name=document.getElementById('First-Company-Name');
    First_Company_Name.innerHTML=FirstExpCompNam;

    let FirstExpSM=document.getElementById('FirstExpSM').value;
    let FirstExpSY=document.getElementById('FirstExpSY').value;
    let txtPanMonth=document.getElementById('txtPanMonth').value;

    let txtPanYear=document.getElementById('txtPanYear').value
    let First_Exp_End_Year=document.getElementById('First-Exp-End-Year');
    First_Exp_End_Year.innerHTML=txtPanYear

    // calculating First Experience
    let totalExp=txtPanYear-FirstExpSY
    let First_Exp_year=document.getElementById('First-Exp-year');
    First_Exp_year.innerHTML=totalExp +' yr';
    
 // Experience section-2---------
    if(set==1)
    {
        let SecondExpPosition=document.getElementById('SecondExpPosition').value;
        let Second_Exp_Pos=document.getElementById('Second-Exp-Pos');
        Second_Exp_Pos.innerHTML=SecondExpPosition;
    
        let SecondExpCompNam=document.getElementById('SecondExpCompNam').value;
        let Second_Company_Name=document.getElementById('Second-Company-Name');
        Second_Company_Name.innerHTML=SecondExpCompNam;
    
        let SecondExpSM=document.getElementById('SecondExpSM').value;
        let SecondExpSY=document.getElementById('SecondExpSY').value;
        let txtPanMonth1=document.getElementById('txtPanMonth2').value;
    
        let txtPanYear2=document.getElementById('txtPanYear2').value;
        let Second_Exp_End_Year=document.getElementById('Second-Exp-End-Year');
        Second_Exp_End_Year.innerHTML=txtPanYear2;
    
        // calculating Second Experience
        let totalExp2=txtPanYear2-SecondExpSY
        let Second_Exp_year=document.getElementById('Second-Exp-year');
        Second_Exp_year.innerHTML=totalExp2 +' yr';
    
    }    


}

function getAllChildren()
{ 
// Adding Skills
    let BoxEl=document.getElementById('box');
    let allChildrenCount=BoxEl.children.length;
    let minus='<a href="javascript:void(0)" class="remove-btn">X</a>'
}

// Certification------
function setCertificationToTemplate()
{
    let certiName=document.getElementById('Certification-Name').value;
    let certiNameT=document.getElementById('Certification-Name-T');
    certiNameT.innerHTML=certiName;

    let certiOrg=document.getElementById('Certi-Org-name').value;
    let certiOrgT=document.getElementById('Certificate-org-name');
    certiOrgT.innerHTML=certiOrg;

    let certiDate=document.getElementById('Certi-complition-date').value;
    let certiDateT=document.getElementById('certification-date');
    certiDateT.innerHTML=certiDate;

    let certiDuration=document.getElementById('certificate-Duration').value;
    let certiDurationT=document.getElementById('certification-duration');
    certiDurationT.innerHTML=certiDuration+' months';



}