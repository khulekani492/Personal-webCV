let visibility = false;

function showProjects(){
    const projectdiv = document.getElementById("personalprojects");
    

    if (!visibility){
        projectdiv.style.display = "block";
        projectdiv.style.border = "2px solid yellow";
        visibility = true;
        
    }else{
        if (visibility){
          // formdiv.style.border = "2px solid yellow";
          projectdiv.style.display = "none";
          projectdiv.style.display = "none";

          formdiv.style.height = "15%";
        }

       visibility = false; 
      }
    
}

function toggle(){
      
      const formdiv = document.getElementById("personalprojects");
    

   
      if (!visibility){
        routeform.style.display = "block";
        formdiv.style.display = "block";
        formdiv.style.border = "2px solid blue";
        
        exitbutton.style.display = "block";
        formdiv.style.height = "55%";
        formdiv.style.borderRadius ="15px";
        visibility = true;
        
      }else{
        if (visibility){
          // formdiv.style.border = "2px solid yellow";
          routeform.style.display = "none";
          exitbutton.style.display = "none";

          formdiv.style.height = "15%";
        }

       visibility = false; 
      }
    }