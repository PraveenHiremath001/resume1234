function downloadResume()
{
   let body=document.getElementById('body').innerHTML;
   let content=document.getElementById('ResumeContent').innerHTML;
   document.getElementById('body').innerHTML=content
   window.print();
   document.getElementById('body').innerHTML=body;
}